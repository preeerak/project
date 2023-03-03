import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy } from '@ngneat/until-destroy';
let AppComponent = class AppComponent {
    constructor(observer, router) {
        this.observer = observer;
        this.router = router;
        this.title = 'project';
    }
    ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 800px)'])
            .subscribe((res) => {
            if (res.matches) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
            }
            else {
                this.sidenav.mode = 'side';
                this.sidenav.open();
            }
        });
    }
};
__decorate([
    ViewChild(MatSidenav)
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    UntilDestroy(),
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map