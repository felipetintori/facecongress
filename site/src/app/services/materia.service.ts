import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJleHAiOjE4NDQzNDA4OTksImlzcyI6ImJhY2tlbmR2bWNvbS5jb20uYnIiLCJhdWQiOiJiYWNrZW5kdm1jb20uY29tLmJyIn0.xc8REYYwK1WTMyZ8mAJMbTVxyXPJP159d7cDp4b5kPQ'
  })
};

@Injectable()
export class MateriaService {

  private url = 'https://www.odonto1.com/api/EventoMateria/';

  constructor(private http: HttpClient) {

  }

  listaHome(eventoId, quantidade) {
    return this.http.get(this.url + 'ListaHome/'
    + '?eventoId=' + eventoId + '&quantidade=' + quantidade, httpOptions);
  }

  getAtivo(id) {
    return this.http.get(this.url + 'GetAtivo/' + id, httpOptions);
  }

  listaAtivosSimples(eventoId) {
    return this.http.get(this.url + 'ListaAtivosSimples/' + eventoId, httpOptions);
  }

}
