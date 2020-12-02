import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaSingleComponent } from './materia-single.component';

describe('MateriaSingleComponent', () => {
  let component: MateriaSingleComponent;
  let fixture: ComponentFixture<MateriaSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
