import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaComponent } from './persona-component';

describe('PersonaComponent', () => {
  let component: PersonaComponent;
  let fixture: ComponentFixture<PersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
