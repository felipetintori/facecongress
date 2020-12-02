import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInternasComponent } from './menu-internas.component';

describe('MenuInternasComponent', () => {
  let component: MenuInternasComponent;
  let fixture: ComponentFixture<MenuInternasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInternasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
