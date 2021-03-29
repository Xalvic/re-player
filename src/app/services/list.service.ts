import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private heads = new HttpHeaders();

  constructor(private http: HttpClient) { }

  listCards() { return this.http.get<any>('../../assets/data.json'); }

}
