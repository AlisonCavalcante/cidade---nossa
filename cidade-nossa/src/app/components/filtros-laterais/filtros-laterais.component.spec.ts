import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosLateraisComponent } from './filtros-laterais.component';

describe('FiltrosLateraisComponent', () => {
  let component: FiltrosLateraisComponent;
  let fixture: ComponentFixture<FiltrosLateraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosLateraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosLateraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
