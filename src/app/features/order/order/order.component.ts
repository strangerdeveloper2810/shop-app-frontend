import { Component } from '@angular/core';
import { LucideAngularModule, Tag } from 'lucide-angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports: [LucideAngularModule],
})
export class OrderComponent {
  // Lucide icon cho component - khai báo đúng kiểu cho icon
  readonly TagIcon = Tag;
}
