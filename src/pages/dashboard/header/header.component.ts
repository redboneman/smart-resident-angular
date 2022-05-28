import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DashboardService} from '../../../shared/services/dashboard.service';

@Component({
    selector: 'sr-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    @Input()
    title: string | undefined;

    constructor(
        public dashboardService: DashboardService
    ) {
    }

    ngOnInit(): void {
    }

}
