import { Component } from '@angular/core';
import { ProductCard } from './components/molecules/product-card/product-card';
import { OrderSummary, OrderItem } from './components/organisms/order-summary/order-summary';

@Component({
  selector: 'app-root',
  imports: [ProductCard, OrderSummary],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  drawerOpen = false;
  cart: OrderItem[] = [];

  products = [
    { id: 1, name: 'Bandeja Paisa', desc: 'Frijoles, arroz, carne molida, chicharrón, huevo y plátano.', price: 32000 },
    { id: 2, name: 'Mote de queso', desc: 'Sopa tradicional del Sinú con ñame y queso costeño.', price: 18000 },
    { id: 3, name: 'Arroz con coco', desc: 'Con pescado frito y patacones.', price: 28000 },
    { id: 4, name: 'Limonada de coco', desc: 'Fría y cremosa.', price: 9000 },
  ];

  get count(): number {
    return this.cart.reduce((n, i) => n + i.qty, 0);
  }

  add(p: { id: number; name: string; price: number }) {
    const found = this.cart.find((i) => i.id === p.id);
    if (found) {
      this.cart = this.cart.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      this.cart = [...this.cart, { id: p.id, name: p.name, price: p.price, qty: 1 }];
    }
  }

  increase(id: number) {
    this.cart = this.cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
  }

  decrease(id: number) {
    this.cart = this.cart
      .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
      .filter((i) => i.qty > 0);
  }

  confirm() {
    alert('¡Pedido confirmado!');
    this.cart = [];
    this.drawerOpen = false;
  }
}
