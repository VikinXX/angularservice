import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsJson } from './comics-json';

describe('ComicsJson', () => {
  let component: ComicsJson;
  let fixture: ComponentFixture<ComicsJson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsJson],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsJson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
