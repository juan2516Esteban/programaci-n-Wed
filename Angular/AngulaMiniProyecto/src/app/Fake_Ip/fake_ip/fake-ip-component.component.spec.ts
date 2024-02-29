import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeIpComponentComponent } from './fake-ip-component.component';

describe('FakeIpComponentComponent', () => {
  let component: FakeIpComponentComponent;
  let fixture: ComponentFixture<FakeIpComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeIpComponentComponent]
    });
    fixture = TestBed.createComponent(FakeIpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
