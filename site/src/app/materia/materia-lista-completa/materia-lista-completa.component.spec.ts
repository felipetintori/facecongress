import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaListaCompletaComponent } from './materia-lista-completa.component';

describe('MateriaListaCompletaComponent', () => {
  let component: MateriaListaCompletaComponent;
  let fixture: ComponentFixture<MateriaListaCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaListaCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaListaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
