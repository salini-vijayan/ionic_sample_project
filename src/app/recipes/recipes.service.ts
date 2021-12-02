import { Injectable } from '@angular/core';
import { IRecipe } from './recipes.models';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes : IRecipe[] = [
    {
      id:'r1',
      title : 'Dosa',
      imageUrl: 'https://1.bp.blogspot.com/-6dYHtnwiLm8/X8vDQIwSY8I/AAAAAAABE3A/MKYXwpsz-qkaQmnlWaa4lG-ZlI6cKKzIwCLcBGAsYHQ/s564/set%2Bdosa%2Brecipe.JPG',
      ingredients: ['urad dal', 'rice', 'salt']
    },
    {
      id:'r2',
      title : 'Wheat Dosa',
      imageUrl: 'https://1.bp.blogspot.com/-6dYHtnwiLm8/X8vDQIwSY8I/AAAAAAABE3A/MKYXwpsz-qkaQmnlWaa4lG-ZlI6cKKzIwCLcBGAsYHQ/s564/set%2Bdosa%2Brecipe.JPG',
      ingredients: ['Wheat','salt']
    },
  ];
  constructor() { }

  getAllRecipes(){
    /*'...' is the spread operator.
    [...this.recipes] pull all recipes into an array */
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    // '{...}' this will pull all properties of the corresponding recipe
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId
    })}
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe => {return recipe.id !== recipeId});
  }
}
