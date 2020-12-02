import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // tslint:disable-next-line:max-line-length
    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJleHAiOjE4NDQzNDA4OTksImlzcyI6ImJhY2tlbmR2bWNvbS5jb20uYnIiLCJhdWQiOiJiYWNrZW5kdm1jb20uY29tLmJyIn0.xc8REYYwK1WTMyZ8mAJMbTVxyXPJP159d7cDp4b5kPQ'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProgramacaoService {

   private url = 'https://www.odonto1.com/api/Programacao/';
  // private url = 'http://localhost:56869/api/Programacao/';
  constructor(private http: HttpClient) { }

  getAccordionDia(produtoId, dia, tipo) {
    return this.http.get(this.url + 'listaAccordionDia?produtoId=' + produtoId + '&dia=' + dia + '&tipo=' + tipo, httpOptions);
  }

  getMinistradorEvento(produtoId) {
    return this.http.get(this.url + 'listaMinistradorEvento/' + produtoId, httpOptions);
  }

  getMinistrador(id) {
    return this.http.get(this.url + 'GetMinistradorProgramacao/' + id, httpOptions);
  }

  getProgramacao(id) {
    return this.http.get(this.url + id);
  }
}
