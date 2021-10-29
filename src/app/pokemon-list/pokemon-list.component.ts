import { Component } from '@angular/core';
import { Type } from '../../_model/Type';
import { Pokemon } from '../../_model/Pokemon';
import { PokemonService } from 'src/_services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})

export class PokemonListComponent {
   
  public pokemons : Pokemon[] = [];

  constructor(
    public pokemonService : PokemonService,
  ){

  }

}