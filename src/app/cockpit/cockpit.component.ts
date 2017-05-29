import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: 'cockpit.template.html',
    styleUrls: ['cockpit.style.scss']
})

export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput;
    constructor() {}

    ngOnInit() {

    }

    onAddServer(serverName: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: serverName.value,
            serverContent: this.serverContentInput.nativeElement.value
        });
    }

    onAddBlueprint(serverName: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: serverName.value,
            serverContent: this.serverContentInput.nativeElement.value
        });
    }
}
