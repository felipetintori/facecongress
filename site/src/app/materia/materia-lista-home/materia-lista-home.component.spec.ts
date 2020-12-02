import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaListaHomeComponent } from './materia-lista-home.component';

describe('MateriaListaHomeComponent', () => {
  let component: MateriaListaHomeComponent;
  let fixture: ComponentFixture<MateriaListaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaListaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaListaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
