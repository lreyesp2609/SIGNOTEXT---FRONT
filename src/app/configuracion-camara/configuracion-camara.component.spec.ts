import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionCamaraComponent } from './configuracion-camara.component';

describe('ConfiguracionCamaraComponent', () => {
  let component: ConfiguracionCamaraComponent;
  let fixture: ComponentFixture<ConfiguracionCamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionCamaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
