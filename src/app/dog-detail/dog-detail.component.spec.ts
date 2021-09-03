import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailComponent } from './dog-detail.component';
import {Dog} from "../models/dog";

describe('DogDetailComponent', () => {
  let component: DogDetailComponent;
  let fixture: ComponentFixture<DogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailComponent);
    component = fixture.componentInstance;
    component.dog = new Dog();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase likes of dog on click', () => {
    const buttonEl = fixture.nativeElement.querySelector('.likeBtn');
    const likes = fixture.nativeElement.querySelector('#likes');
    buttonEl.click()
    fixture.detectChanges();
    expect(component.likes).toEqual(1);
    expect(likes.textContent).toContain('1');
  })
});
