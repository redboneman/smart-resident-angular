import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private translateService: TranslateService,
        private iconService: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
    }

    private safeURL = this.sanitizer.bypassSecurityTrustResourceUrl;

    ngOnInit(): void {
        this.initLocalization()
        this.initIconSet()
    }

    private initLocalization() {
        this.translateService.addLangs(['en', 'fr', 'de'])
        this.translateService.setDefaultLang('en')
        this.translateService.use('en')
    }

    private initIconSet() {
        this.iconService.addSvgIcon(
            'pass_eye',
            this.safeURL('assets/icons/pass_eye.svg')
        )
        this.iconService.addSvgIcon(
            'app_store',
            this.safeURL('assets/icons/app_store.svg')
        )
        this.iconService.addSvgIcon(
            'play_market',
            this.safeURL('assets/icons/play_market.svg')
        )
        this.iconService.addSvgIcon(
            'service_incidents',
            this.safeURL('assets/icons/services/service_incidents.svg')
        )
        this.iconService.addSvgIcon(
            'service_polls',
            this.safeURL('assets/icons/services/service_polls.svg')
        )
        this.iconService.addSvgIcon(
            'dashboard',
            this.safeURL('assets/icons/services/dashboard.svg')
        )
    }
}
