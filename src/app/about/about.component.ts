import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  constructor(
    private alertService: AlertService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('AboutComponent initialized');
  }

  /**
   * Hello Worldアラートを表示するメソッド
   */
  showHelloWorldAlert(): void {
    // AlertServiceを使用してアラートを表示
    this.alertService.showAlert('Hello World', this.cdr);
  }
}
