import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTransformPipe'
})
export class DataTransformPipePipe implements PipeTransform {

  transform(value: any): any {
    if(value){
      let dataArray = value.split('-')
      let dia = dataArray[2].slice(0, 2);
       let mes = dataArray[1];
       let ano = dataArray[0];
       let dataFormatada = `${dia}-${mes}-${ano}`;
      return dataFormatada
    }
  }

}
