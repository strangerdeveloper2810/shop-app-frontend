import { Component } from '@angular/core';
import { LucideAngularModule, CheckCircle, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss'],
  standalone: true,
  imports: [LucideAngularModule],
})
export class OrderConfirmComponent {
  // Lucide icons cho component - khai báo đúng kiểu cho icon
  readonly CheckCircleIcon = CheckCircle;
  readonly ShoppingBagIcon = ShoppingBag;
}
