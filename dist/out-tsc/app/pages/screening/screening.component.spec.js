import { TestBed } from '@angular/core/testing';
import { ScreeningComponent } from './screening.component';
describe('ScreeningComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ScreeningComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ScreeningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=screening.component.spec.js.map