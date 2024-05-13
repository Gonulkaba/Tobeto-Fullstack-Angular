import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Northwind Market';
  cartCount: number=0;

  onAddProductToCart(): void{
    this.cartCount +=1;

    console.log('Ürün sepete eklendi');
  }


}
