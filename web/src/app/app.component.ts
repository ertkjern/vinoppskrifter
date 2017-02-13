import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.localization();
  }

  localization(): void {
    this.translate.addLangs(["nb"]);
    var browserLang = navigator.language;
    this.translate.use('nb');
  }
}