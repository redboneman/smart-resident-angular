import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'sr-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrls: ['./sub-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHeaderComponent implements OnInit {

    @Output()
    onBack: EventEmitter<any> = new EventEmitter<any>();
    @Input()
    backButton: boolean | undefined;
    @Input()
    title: string | undefined;
    @Input()
    types: string[] | undefined;
    @Input()
    type: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

}
