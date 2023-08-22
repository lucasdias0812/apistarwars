import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmeDetalhePage } from './filme-detalhe.page';

describe('FilmeDetalhePage', () => {
  let component: FilmeDetalhePage;
  let fixture: ComponentFixture<FilmeDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilmeDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
