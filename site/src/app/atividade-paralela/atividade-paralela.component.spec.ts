import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeParalelaComponent } from './atividade-paralela.component';

describe('AtividadeParalelaComponent', () => {
  let component: AtividadeParalelaComponent;
  let fixture: ComponentFixture<AtividadeParalelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeParalelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeParalelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
