import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionpageComponent } from './petitionpage.component';

describe('PetitionpageComponent', () => {
  let component: PetitionpageComponent;
  let fixture: ComponentFixture<PetitionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
