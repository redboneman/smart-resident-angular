import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import {DashboardService} from '../../shared/services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {

    constructor(
        public dashboardService: DashboardService
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

}
