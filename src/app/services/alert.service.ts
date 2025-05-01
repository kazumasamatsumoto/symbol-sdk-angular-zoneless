import { Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  /**
   * 指定されたメッセージでアラートを表示します
   * @param message 表示するメッセージ
   * @param cdr 変更検出を手動でトリガーするためのChangeDetectorRef（Zone.jsなしの場合に必要）
   */
  showAlert(message: string, cdr?: ChangeDetectorRef): void {
    // アラートを表示
    window.alert(message);
    
    // Zone.jsなしの場合、変更検出を手動でトリガー
    if (cdr) {
      cdr.detectChanges();
    }
    
    console.log('アラートが表示されました:', message);
  }
}
