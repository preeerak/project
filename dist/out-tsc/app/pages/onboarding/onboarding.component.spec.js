import { TestBed } from '@angular/core/testing';
import { OnboardingComponent } from './onboarding.component';
describe('OnboardingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OnboardingComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OnboardingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=onboarding.component.spec.js.map