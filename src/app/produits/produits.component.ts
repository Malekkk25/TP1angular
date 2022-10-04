import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html' 
})
export class ProduitsComponent implements OnInit {
  produits :string[];

  constructor() {
    this.produits=["PC ASUS","imprimante Epson","tablette Samsung"];
    
   }

  ngOnInit(): void {
  }

}
