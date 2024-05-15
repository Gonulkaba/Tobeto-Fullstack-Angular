import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-examples',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './basic-examples.component.html',
  styleUrl: './basic-examples.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicExamplesComponent {
  title: string = 'Northwind Market';
  cartCount: number=0;

  products: {name: string; price:number; discontinued: boolean}[]=[
    //ürün listesi
    {
      name: "Çay",
      price: 100,
      discontinued: false
    },
    {
      name: "Kahve",
      price: 200,
      discontinued: true
    },
    {
      name: "Su",
      price: 50,
      discontinued: false
    },
    {
      name: "Meyve suyu",
      price: 20,
      discontinued: true
    },
    {
      name: "Maden suyu",
      price: 25,
      discontinued: false
    }

  ]

  onAddProductToCart(): void{
    this.cartCount +=1;

    console.log('Ürün sepete eklendi');
  }
 }
