import React, { useState } from "react";
import SideMenu from "./SideMenu";
import "./Kitchen.css";

const Kitchen = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(""); // Track selected menu item
  const [expandedRecipe, setExpandedRecipe] = useState(null); // Track expanded recipe
  const [expandedTip, setExpandedTip] = useState(null); // Track expanded tip
  const [searchQuery, setSearchQuery] = useState(""); // Track search query
  const [selectedType, setSelectedType] = useState(""); // Track selected dish type

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Simulated list of recipes with details and type
  const recipes = [
    { 
      id: 1, 
      name: "Spaghetti Carbonara", 
      details: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      recipe: "Boil pasta, Cook pancetta, Mix eggs and cheese, Toss everything together",
      type: "Meat"
    },
    { 
      id: 2, 
      name: "Grilled Chicken Salad", 
      details: "A healthy salad with grilled chicken, mixed greens, tomatoes, cucumbers, and a vinaigrette dressing.",
      recipe: "Grill chicken, Chop vegetables, Mix ingredients, Add dressing",
      type: "Meat"
    },
    { 
      id: 3, 
      name: "Vegan Stir Fry", 
      details: "A flavorful stir fry with mixed vegetables, tofu, and soy sauce.",
      recipe: "Stir fry vegetables, Cook tofu, Mix with soy sauce",
      type: "Vegan"
    },
    { 
      id: 4, 
      name: "Grilled Salmon", 
      details: "A simple and healthy grilled salmon with herbs and spices.",
      recipe: "Season salmon, Grill salmon, Serve with lemon",
      type: "Fish"
    },
  ];

  // Simulated list of tips with details
  const tips = [
    { 
      id: 1, 
      title: "Use fresh ingredients", 
      details: "Fresh ingredients enhance the flavor and nutrition of your dishes. Always check for the freshness of vegetables, fruits, and meat before cooking."
    },
    { 
      id: 2, 
      title: "Preheat your oven", 
      details: "Preheating your oven to the right temperature ensures even cooking. Many recipes require a specific temperature to ensure proper cooking time."
    },
    { 
      id: 3, 
      title: "Add salt to pasta water", 
      details: "When boiling pasta, adding salt to the water enhances the flavor of the pasta. It’s recommended to use about 1 tablespoon of salt per 4 liters of water."
    },
    { 
      id: 4, 
      title: "Let meat rest", 
      details: "After cooking, let your meat rest for a few minutes to allow the juices to redistribute. This results in a juicier and more flavorful meat."
    },
    { 
      id: 5, 
      title: "Experiment with herbs and spices", 
      details: "Adding herbs and spices can elevate the flavor of any dish. Don’t be afraid to try new combinations to discover new tastes."
    },
  ];

  // Handle menu item click
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu); // Set the selected menu
    closeMenu(); // Close the side menu
    setExpandedRecipe(null); // Clear expanded recipe when menu changes
    setExpandedTip(null); // Clear expanded tip when menu changes
  };

  // Handle recipe click to toggle details
  const handleRecipeClick = (recipeId) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId); // Toggle recipe details visibility
  };

  // Handle tip click to toggle details
  const handleTipClick = (tipId) => {
    setExpandedTip(expandedTip === tipId ? null : tipId); // Toggle tip details visibility
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query
  };

  // Handle dish type filter change
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selected dish type
  };

  // Filter recipes based on the search query and selected type
  const filteredRecipes = recipes.filter((recipe) =>
    (recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") &&
    (recipe.type === selectedType || selectedType === "")
  );

  // Filter tips based on the search query
  const filteredTips = tips.filter((tip) =>
    tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === ""
  );

  return (
    <div className="kitchen">
      <button
        className={`menu-toggle ${menuVisible ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {menuVisible ? "×" : "☰"}
      </button>
      <h1>Welcome to the kitchen</h1>
      <p> Open the menu to see all the options</p>
      <SideMenu isVisible={menuVisible} closeMenu={closeMenu} handleMenuClick={handleMenuClick} />
      <div className="kitchen-content">
        {selectedMenu === "Recipes" && (
          <div>
            <h2>Recipes</h2>
            <div className="filter-container">
              <select value={selectedType} onChange={handleTypeChange} className="type-filter">
                <option value="">All dish types</option>
                <option value="Meat">Meat</option>
                <option value="Fish">Fish</option>
                <option value="Vegan">Vegan</option>
              </select>
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-bar"
              />
            </div>

            <ul>
              {filteredRecipes.map((recipe) => (
                <li key={recipe.id}>
                  <span onClick={() => handleRecipeClick(recipe.id)} className="recipe-name">
                    {recipe.name}
                  </span>
                  {expandedRecipe === recipe.id && (
                    <div className="recipe-details">
                      <p>{recipe.details}</p>
                      <ol>
                        {recipe.recipe.split(",").map((step, index) => (
                          <li key={index}>{step.trim()}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedMenu === "Tips" && (
          <div>
            <h2>Cooking Tips</h2>
            <div className="filter-container">
              <input
                type="text"
                placeholder="Search tips..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-bar"
              />
            </div>
            <ul>
              {filteredTips.map((tip) => (
                <li key={tip.id}>
                  <span onClick={() => handleTipClick(tip.id)} className="tip-title">
                    {tip.title}
                  </span>
                  {expandedTip === tip.id && (
                    <div className="tip-details">
                      <p>{tip.details}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kitchen;
