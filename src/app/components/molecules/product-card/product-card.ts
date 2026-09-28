import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-product-card',
  imports: [Button],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() image = '';
  @Input() title = 'Nombre del platillo';
  @Input() description = 'Descripción corta del platillo.';
  @Input() price = 0;
  @Output() add = new EventEmitter<void>();

  get formattedPrice(): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(this.price);
  }
}
