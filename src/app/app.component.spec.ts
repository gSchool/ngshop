import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {DogDetailComponent} from "./dog-detail/dog-detail.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DogListComponent, DogDetailComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should display component title`, () => {
    expect(html.querySelector('h1').textContent).toEqual(component.title);
  });

  it('should render dog list component', () => {
    expect(html.querySelector('dog-list')).toBeTruthy();
  });

  it('should render all dogs', () => {
    const el = fixture.debugElement.queryAll(By.directive(DogListComponent));
    expect(el.length).toEqual(1);
  });
});
