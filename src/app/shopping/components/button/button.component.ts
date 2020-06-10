import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
        <button
            #buttonRef
            [disabled]="disabled"
            type= "button"
            class="button"
            [class.button__primary]="true">
            <ng-content></ng-content>
        </button>
    `,
    styleUrls: ['./button.component.scss']
  })
export class ButtonComponent implements OnInit {
    @ViewChild('buttonRef') buttonRef?: ElementRef;
    @Input() disabled = false;
    @Input() focus = false;

    ngOnInit(): void {
        if (this.focus) {
            setTimeout(() => this.buttonRef && this.buttonRef.nativeElement.focus());
        }
    }
}
