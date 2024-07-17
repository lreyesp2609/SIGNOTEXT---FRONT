import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiccionarioGestosComponent } from './diccionario-gestos.component';

describe('DiccionarioGestosComponent', () => {
  let component: DiccionarioGestosComponent;
  let fixture: ComponentFixture<DiccionarioGestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiccionarioGestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiccionarioGestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
