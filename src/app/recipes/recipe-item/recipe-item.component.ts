import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '../recipes.models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: IRecipe;

  constructor() {}

  ngOnInit() {}
}
