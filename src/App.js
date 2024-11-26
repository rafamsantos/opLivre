import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Kitchen from './components/Kitchen';  // Add other sections similarly
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    // Function to handle changes in the hash
    const handleHashChange = () => {
      setCurrentSection(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Call the function once initially to update state based on the initial hash
    if (!window.location.hash) {
      // Set default section if there's no hash in the URL
      window.location.hash = '#home';
    } else {
      handleHashChange();
    }

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <Navbar />
      {currentSection === '#home' && <Cover />}  {/* Add Home content or default view */}
      {currentSection === '#kitchen' && <Kitchen />}
      {/* Add more conditional renders for other sections */}
    </div>
  );
}

export default App;
