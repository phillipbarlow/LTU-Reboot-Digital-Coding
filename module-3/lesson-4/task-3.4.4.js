let objRecipe = {
    recipeTitle : 'Beans on toast',
    Servings: 1,
    ingredients:['backed beans', 'bread', 'butter', 'black pepper'],
    directions:[
        'Empty tin of beans into a pan',
        'put bread in toaster',
        'butter the toast',
        'place beans on top of buttered bread',
        'apply black pepper']
};
console.log(objRecipe.recipeTitle);
console.log(objRecipe.Servings);
for(counter = 0; counter < objRecipe.ingredients.length; counter++){
    let ingredient = objRecipe.ingredients[counter];
    console.log(ingredient);
}
for(counter = 0; counter < objRecipe.ingredients.length; counter++){
    let direction = objRecipe.directions[counter];
    console.log(direction);
}