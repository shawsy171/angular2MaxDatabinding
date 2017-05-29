import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.template.html',
    styleUrls: ['./server-element.style.scss'],
    encapsulation: ViewEncapsulation.Emulated // None and Native - change control of the css for a component
})

export class ServerElementComponent implements OnInit {
    @Input('srvElement') element: {type: string, name: string, content: string};

    constructor() {}
    ngOnInit() {

    }
}
