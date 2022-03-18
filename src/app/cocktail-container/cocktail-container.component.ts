import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/shared/services/cocktail.service';
@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [];
  public selectedCocktail: Cocktail = this.cocktails[0];
  constructor(private cocktailService: CocktailService) {}
  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }

  ngOnInit(): void {
  }

}
