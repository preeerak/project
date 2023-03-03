import { TestBed } from '@angular/core/testing';
import { SourcingComponent } from './sourcing.component';
describe('SourcingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SourcingComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SourcingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sourcing.component.spec.js.map