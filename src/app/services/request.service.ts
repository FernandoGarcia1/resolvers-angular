import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  getCharacters(){
    const URL = 'https://rickandmortyapi.com/api/character';
    return this.http.get(URL);
  }

  getCharacter(name : string){
    const URL = `https://rickandmortyapi.com/api/character/?name=${name}`
    return this.http.get(URL);
  }
}
