import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<string> {
    return this.httpClient.get<string>('localhost:3000');
  }
}
