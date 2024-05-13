import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
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
