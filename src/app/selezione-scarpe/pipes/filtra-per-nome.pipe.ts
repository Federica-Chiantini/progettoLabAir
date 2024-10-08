import { Pipe, PipeTransform } from '@angular/core';
import { IScarpaNike } from '../../models/scarpe';

@Pipe({
  name: 'filtraPerNome'
})
export class FiltraPerNomePipe implements PipeTransform {

  transform(
    value: IScarpaNike[], 
    args : {key : string} ): IScarpaNike[] {
    return value.filter( scarpa => scarpa.nome.toLowerCase().trim().includes(args.key.toLowerCase())
    )
  }

}
