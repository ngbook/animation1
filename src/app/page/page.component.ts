import { Component, OnInit, Input } from '@angular/core';
import {
    trigger, state, style,
    animate, transition
} from '@angular/animations';

type SLIDE_STATE = 'in' | 'out';

@Component({
    selector: 'slide-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    animations: [
        trigger('slide', [
            state('in', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            state('out', style({
                transform: 'translateX(-100%)',
                opacity: 0
            })),
            transition('out => in', animate('500ms ease-in')),
            transition('in  => out', animate('500ms ease-out')),
        ]),
    ]
})
export class PageComponent {
    @Input()
    set toggle(show: boolean) {
        // console.log(show);
        if (show === this._shown) {
            return;
        }
        if (show) {
            this.state = 'in';
        } else {
            this.state = 'out';
        }
        this._shown = show;
    }
    state: SLIDE_STATE = 'out';
    private _shown = false;

    constructor() {
    }

}
