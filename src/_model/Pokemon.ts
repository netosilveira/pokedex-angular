
import { Type } from './Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function getPokemonName(pokemon : Pokemon) : string{
    return pokemon.name;
}

export function getPokemonNumber(pokemon: Pokemon): string {
    return formattingZero(pokemon.number, 3);
  }

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`;
}

export function formattingZero(number: number | string, size: number): string {
  let string = String(number);

  while (string.length < (size || 2)) {
    string = '0' + string;
  }

  return string;
}
