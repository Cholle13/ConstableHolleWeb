import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KenComponent } from './ken.component';

describe('KenComponent', () => {
  let component: KenComponent;
  let fixture: ComponentFixture<KenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
