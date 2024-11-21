import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModalEComponent } from './pokemon-modal-e.component';

describe('PokemonModalEComponent', () => {
  let component: PokemonModalEComponent;
  let fixture: ComponentFixture<PokemonModalEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonModalEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonModalEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
