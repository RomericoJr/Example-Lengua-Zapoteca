import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramaSistemaComponent } from './diagrama-sistema.component';

describe('DiagramaSistemaComponent', () => {
  let component: DiagramaSistemaComponent;
  let fixture: ComponentFixture<DiagramaSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramaSistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
