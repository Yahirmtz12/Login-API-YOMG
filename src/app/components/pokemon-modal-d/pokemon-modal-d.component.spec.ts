import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModalDComponent } from './pokemon-modal-d.component';

describe('PokemonModalDComponent', () => {
  let component: PokemonModalDComponent;
  let fixture: ComponentFixture<PokemonModalDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonModalDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonModalDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
