import { Component } from '@angular/core';
import { Type } from 'src/_model/type';
import { Pokemon } from 'src/_model/pokemon'
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})

export class PokemonListComponent {
   
  public pokemons : Pokemon[] = [{
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    name: 'Bubasaur',
    number: 1,
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
    number: 2,
    name: 'Teste 2',
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
    number: 3,
    name: 'Teste x',
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    number: 4,
    name: 'Teste x',
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
    number: 5,
    name: 'Teste x',
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
    number: 6,
    name: 'Yves',
    types: [
      Type.Poison,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    number: 7,
    name: 'Teste x',
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png',
    name: 'Bubasaur',
    number: 8,
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png',
    number: 9,
    name: 'Teste 2',
    types: [
      Type.Grass,
      Type.Poison,
    ]
  },
  {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png',
    number: 10,
    name: 'Teste x',
    types: [
      Type.Grass,
      Type.Poison,
    ]
  }

];


}