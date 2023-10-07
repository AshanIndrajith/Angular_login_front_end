import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APanelComponent } from './a-panel.component';

describe('APanelComponent', () => {
  let component: APanelComponent;
  let fixture: ComponentFixture<APanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APanelComponent]
    });
    fixture = TestBed.createComponent(APanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
