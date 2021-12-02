import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IRecipe } from '../recipes.models';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe : IRecipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router :Router,
    private alertCtrl : AlertController
  ) {}

  ngOnInit() {
    /*paramMap - a maps of all the parameters of the routthis route receives
     */
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('recipeId')) {
        return;
      }
      const recipeId = params.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

// both method works
  async OnDeleteRecipe(){
    const alert = await this.alertCtrl.create({
      header:'Delete Recipe',
      message: 'Are you sure you want to delete the recipe?',
      buttons: [
        {text:'Cancel',role:'cancel'},
        {text:'Delete',handler:()=>{
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }},
      ]
    })
    await alert.present();
  }
  // OnDeleteRecipe(){
  //   const alert = this.alertCtrl.create({
  //     header:'Delete Recipe',
  //     message: 'Are you sure you want to delete the recipe?',
  //     buttons: [
  //       {text:'Cancel',role:'cancel'},
  //       {text:'Delete',handler:()=>{
  //         this.recipeService.deleteRecipe(this.loadedRecipe.id);
  //         this.router.navigate(['/recipes']);
  //       }},
  //     ]
  //   }).then(alertReturn => {
  //     alertReturn.present()
  //   });
  // }
}
