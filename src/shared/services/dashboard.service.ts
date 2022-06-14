import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

interface DashboardServiceItem {
    key: string,
    icon: string,
    badge?: boolean,
    active?: boolean
}

@Injectable()
export class DashboardService {

    public navigationOpened = false;
    public rightPanelOpened = false;

    public rightPanelObserver = new Subject<any>();

    public services: DashboardServiceItem[] = [
        {
            key: 'interventions',
            icon: 'service_interventions',
            badge: true
        },
        {
            key: 'polls',
            icon: 'service_polls'
        },
        {
            key: 'tenants',
            icon: 'service_tenants'
        },
        {
            key: 'pointsManagement',
            icon: 'service_points'
        },
        {
            key: 'accounts',
            icon: 'service_accounts'
        },
        {
            key: 'collaborative',
            icon: 'service_collaborative'
        },
        {
            key: 'phoneBook',
            icon: 'service_phone_book'
        },
        {
            key: 'advertisement',
            icon: 'service_advertisement'
        },
        {
            key: 'leases',
            icon: 'service_leases'
        },
        {
            key: 'operations',
            icon: 'service_operations'
        },
    ];

    public toggleNavigation() {
        this.navigationOpened = !this.navigationOpened;
    }

    public toggleRightPanel() {
        this.rightPanelOpened = !this.rightPanelOpened;
        this.rightPanelObserver.next(null);
    }

}
