import { Component, OnInit } from '@angular/core';

@Component({
    providers: [],
    selector: 'main-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
    constructor() { }

    year = new Date().getUTCFullYear();

    ngOnInit() { }
}