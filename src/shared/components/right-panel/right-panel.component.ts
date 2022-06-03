import {Component, Input, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';

@Component({
    selector: 'sr-right-panel',
    templateUrl: './right-panel.component.html',
    styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

    @Input()
    background: boolean = true;
    @Input()
    profileOnly: boolean = false;

    constructor(
        public dashboardService: DashboardService
    ) {
    }

    ngOnInit(): void {
    }

}
