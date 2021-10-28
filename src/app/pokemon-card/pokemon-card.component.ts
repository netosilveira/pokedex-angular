import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon! : Pokemon;

  public formattingZero(number : number | string, size : number) : string{
    let string = String(number);

    while(string.length < (size || 2)){
      string = '0' + string;
    }

    return string;
  }
}
