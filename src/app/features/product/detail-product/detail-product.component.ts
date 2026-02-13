import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { LucideAngularModule, Minus, Plus, ShoppingCart, Zap, ChevronLeft, ChevronRight, Check } from 'lucide-angular';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
  standalone: true,
  imports: [NgFor, NgClass, LucideAngularModule],
})
export class DetailProductComponent {
  // Lucide icons
  readonly MinusIcon = Minus;
  readonly PlusIcon = Plus;
  readonly ShoppingCartIcon = ShoppingCart;
  readonly ZapIcon = Zap;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly CheckIcon = Check;

  // Image carousel - thay the Bootstrap carousel bang Angular state
  currentImageIndex = 0;
  images = [
    'https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  // Quantity state
  quantity = 1;

  prevImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0
      ? this.images.length - 1
      : this.currentImageIndex - 1;
  }

  nextImage(): void {
    this.currentImageIndex = this.currentImageIndex === this.images.length - 1
      ? 0
      : this.currentImageIndex + 1;
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }
}
