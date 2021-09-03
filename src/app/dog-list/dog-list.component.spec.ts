import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DogListComponent } from './dog-list.component';
import { DogDetailComponent } from '../dog-detail/dog-detail.component';
import { By } from '@angular/platform-browser';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListComponent, DogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all dogs', () => {
    const el = fixture.debugElement.queryAll(By.directive(DogDetailComponent));
    expect(el.length).toEqual(100);
  });

  it('should display list of all dogs on click', () => {
    const allButton = html.querySelector('#allDogs');
    allButton.click();
    expect(component.viewFavorites).toBeFalse();
  });

  // This test requires test fakes. Uncomment if using fakes!
  // it('should display list of all favs on click', () => {
  //   const favsButton = html.querySelector('#favorites');
  //   favsButton.click();
  //   expect(component.viewFavorites).toBeTrue();
  // });

  it('should toggle list of dogs in view on click', () => {
    spyOn(component, 'loadDogs');
    const allButton = html.querySelector('#allDogs');
    allButton.click();
    expect(component.loadDogs).toHaveBeenCalled();
  });

  it('should render list of favorite dogs', () => {
    spyOn(component, 'loadFavorites');
    const favButton = html.querySelector('#favorites');
    favButton.click();
    expect(component.loadFavorites).toHaveBeenCalled();
  });
});
