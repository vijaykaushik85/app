import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnertopComponent } from './innertop.component';

describe('InnertopComponent', () => {
  let component: InnertopComponent;
  let fixture: ComponentFixture<InnertopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnertopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
