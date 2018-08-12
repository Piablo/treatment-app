import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewNewTPComponent } from './treeview-new-tp.component';

describe('TreeviewNewTPComponent', () => {
  let component: TreeviewNewTPComponent;
  let fixture: ComponentFixture<TreeviewNewTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeviewNewTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewNewTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
