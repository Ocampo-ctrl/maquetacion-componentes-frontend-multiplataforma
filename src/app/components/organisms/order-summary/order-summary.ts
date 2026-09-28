import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../atoms/button/button';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-order-summary',
  imports: [Button],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {
  @Input() items: OrderItem[] = [];
  @Input() ivaRate = 0.19;
  @Output() increase = new EventEmitter<number>();
  @Output() decrease = new EventEmitter<number>();
  @Output() confirm = new EventEmitter<void>();

  get subtotal(): number {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }
  get iva(): number {
    return this.subtotal * this.ivaRate;
  }
  get total(): number {
    return this.subtotal + this.iva;
  }

  money(value: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(value);
  }
}
