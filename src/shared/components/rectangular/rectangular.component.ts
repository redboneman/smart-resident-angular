import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'rectangular-item',
    templateUrl: './rectangular.component.html',
    styleUrls: ['./rectangular.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RectangularComponent implements OnInit {

    @Input()
    title: string = '';
    @Input()
    date: string = '';
    @Input()
    description: string = '';
    @Input()
    type: 'statistics' | 'action' | undefined;
    @Input()
    actionText: string = '';
    @Input()
    actionLink: string | undefined;
    @Input()
    isActive: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
