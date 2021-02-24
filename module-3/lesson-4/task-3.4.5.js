let objRecipe = {
    recipeTitle : 'Beans on toast',
    Servings: 1,
    ingredients:['backed beans', 'bread', 'butter', 'black pepper'],
    directions:[
        'Empty tin of beans into a pan',
        'put bread in toaster',
        'butter the toast',
        'place beans on top of buttered bread',
        'apply black pepper'],
        letscook: function(){
            console.log('im hungry lets cook ' + this.recipeTitle)
        }
};
objRecipe.letscook();