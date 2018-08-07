import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailAutocompleteComponent } from './client-detail-autocomplete.component';

describe('ClientDetailAutocompleteComponent', () => {
  let component: ClientDetailAutocompleteComponent;
  let fixture: ComponentFixture<ClientDetailAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
