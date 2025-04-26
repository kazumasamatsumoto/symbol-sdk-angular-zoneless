import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'symbol-sdk-angular-zoneless';

  constructor(private cdr: ChangeDetectorRef) {}

  // 変更検出を手動でトリガーする例
  updateTitle(newTitle: string): void {
    this.title = newTitle;
    // Zone.jsなしの場合、変更を反映するために手動で変更検出をトリガーする必要がある
    this.cdr.detectChanges();
  }
}
