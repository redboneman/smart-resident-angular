import {Injectable} from '@angular/core';

interface DashboardServiceItem {
    key: string,
    icon: string,
    badge?: boolean,
    active?: boolean
}

@Injectable()
export class DashboardService {

    public navigationOpened = false;

    public services: DashboardServiceItem[] = [
        {
            key: 'incidents',
            icon: 'service_incidents',
            badge: true
        },
        {
            key: 'polls',
            icon: 'service_polls'
        },
        {
            key: 'polls',
            icon: 'service_polls'
        },
        {
            key: 'polls',
            icon: 'service_polls'
        },
        {
            key: 'polls',
            icon: 'service_polls'
        },
        {
            key: 'polls',
            icon: 'service_polls'
        },
        {
            key: 'polls',
            icon: 'service_polls'
        }
    ];

    public markIncidents() {
        const service = this.services.find(item => item.key === 'incidents')
        if (!service) return;
        service.badge = !service.badge;
    }

    public toggleNavigation() {
        this.navigationOpened = !this.navigationOpened;
    }

}
