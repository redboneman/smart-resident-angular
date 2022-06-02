import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formatDate} from '../../utils';

@Component({
    selector: 'banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

    @Input()
    title: {
        count: number,
        type: string
    } = {
        count: 0,
        type: ''
    };
    @Input()
    tenant: string = '';
    @Input()
    action: string = '';
    @Input()
    actionType: string = '';
    @Input()
    address: string = '';
    @Input()
    date: string = '';
    @Input()
    buttonText: string | undefined;

    @Output()
    buttonClick: EventEmitter<any> = new EventEmitter<any>();

    public formatDate = formatDate;

    constructor() {
    }

    ngOnInit(): void {
    }

}
