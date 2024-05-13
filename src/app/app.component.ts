import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
