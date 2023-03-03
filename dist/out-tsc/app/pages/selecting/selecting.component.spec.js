import { TestBed } from '@angular/core/testing';
import { SelectingComponent } from './selecting.component';
describe('SelectingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SelectingComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SelectingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=selecting.component.spec.js.map