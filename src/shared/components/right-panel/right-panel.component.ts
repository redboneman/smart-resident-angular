import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'sr-right-panel',
    templateUrl: './right-panel.component.html',
    styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit, OnDestroy {

    @Input()
    background: boolean = true;
    @Input()
    profileOnly: boolean = false;

    private profileOnlySubscriber: Subscription | undefined;

    constructor(
        public dashboardService: DashboardService
    ) {
    }

    ngOnInit() {
        this.profileOnlySubscriber = this.dashboardService.rightPanelObserver
            .subscribe(() => {
                if (this.profileOnly) {
                    this.dashboardService.rightPanelOpened = false;
                }
            });
    }

    ngOnDestroy() {
        this.profileOnlySubscriber?.unsubscribe();
    }

}
