import { Component } from '@angular/core';
import { LucideAngularModule, Search, Star, ShoppingCart, Zap } from 'lucide-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [LucideAngularModule],
})
export class HomeComponent {
  // Lucide icons cho template sử dụng
  SearchIcon = Search;
  StarIcon = Star;
  ShoppingCartIcon = ShoppingCart;
  ZapIcon = Zap;
}
