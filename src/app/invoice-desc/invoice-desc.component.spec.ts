import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDescComponent } from './invoice-desc.component';

describe('InvoiceDescComponent', () => {
  let component: InvoiceDescComponent;
  let fixture: ComponentFixture<InvoiceDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
