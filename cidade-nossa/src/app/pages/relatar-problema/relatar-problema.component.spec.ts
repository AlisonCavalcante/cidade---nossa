import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatarProblemaComponent } from './relatar-problema.component';

describe('RelatarProblemaComponent', () => {
  let component: RelatarProblemaComponent;
  let fixture: ComponentFixture<RelatarProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatarProblemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatarProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
