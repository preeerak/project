import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './pages/home/home.component';
import { PreparingComponent } from './pages/preparing/preparing.component';
import { SourcingComponent } from './pages/sourcing/sourcing.component';
import { ScreeningComponent } from './pages/screening/screening.component';
import { SelectingComponent } from './pages/selecting/selecting.component';
import { HiringComponent } from './pages/hiring/hiring.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            PreparingComponent,
            SourcingComponent,
            ScreeningComponent,
            SelectingComponent,
            HiringComponent,
            OnboardingComponent,
            NotFoundComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatToolbarModule,
            MatSidenavModule,
            MatButtonModule,
            MatIconModule,
            MatDividerModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map