import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Crepioca', 'Rápido, gostoso e nutritivo', 'https://portal-amb-imgs.clubedaana.com.br/2018/11/crepioca.jpg'),
    new Recipe('Feijoada', 'Excelente tradição', 'https://cdn.panelinha.com.br/receita/1588270905274-39_Panelinha_12_02_200635.jpg'),
  ];

  @Output() resendRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  forwardRecipe(recipe: Recipe) {
    this.resendRecipe.emit(recipe);
  }

}
