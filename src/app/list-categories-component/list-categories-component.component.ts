import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';
@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})
export class ListCategoriesComponentComponent {

category : Categorie[]= [{"id":1,"title":"Grand électroménager",
"image":"assets/images/categorie_electromenager.jpg", "description":"bon etat id1",
"available":true},
{"id":2,"title":"Petit électroménager",
"image":"assets/images/categorie_petit_electromenager.jpg", "description":"bon etat id2",
"available":true},
{"id":3,"title":"Produits informatiques",
"image":"assets/images/categorie_produits_informatiques.jpg", "description":"bon etat id3",
"available":true},
{"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
"description":"bon etat id4", "available":true},
{"id":5,"title":"TV, images et son",
"image":"assets/images/categorie_tv_image_son.jpg", "description":"bon etat id5",
"available":true},
{"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
"description":"bon etat id6","available":false},
];
   filteredCategories: Categorie[] = [...this.category];

func1(any:string){
    console.log(any);
    alert(any);
}
inputValue:string ;

  filterCategories(inputValue: string): void {
    const id = parseInt(inputValue, 10);
    if (!isNaN(id)) {
      this.filteredCategories = this.category.filter(category => category.id === id);
    } else {
      this.filteredCategories = [...this.category];
    }
  }
}
