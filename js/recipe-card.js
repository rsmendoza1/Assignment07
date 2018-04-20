/*eslint-env browser*/

var recipe = {
    title: "Salsa Verde", //STRING
    servings: 4, //NUMBER
    ingredients: [" - tomatillos", " - onion", " - garlic", " - oregano", " - cumin", " - salt"] //ARRAY
};

window.console.log(recipe.title); //DISPLAYS TITLE
window.console.log("Servings: " + recipe.servings); //TEXT + VAR + SERVINGS
window.console.log("Ingredients:");
for (var i = 0; i < recipe.ingredients.length; i++) { //?
    window.console.log(recipe.ingredients[i]);
}

// MOVE 'VAR' DECLARATIONS TO TOP OF THE FUNCTION?