import { TestBed } from '@angular/core/testing';
import { HiringComponent } from './hiring.component';
describe('HiringComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HiringComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(HiringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hiring.component.spec.js.map