import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  message = "";

  constructor() { }

  addMessage(message: string){
    this.message = message;

    setTimeout(() => {
      this.clear();
    },4000)
  }

  clear(){
    this.message = "";
  }
}
