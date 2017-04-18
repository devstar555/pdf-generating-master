import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PdfService {

  constructor(private http: Http) { }

  generatepdf(newTask) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/createpdf', JSON.stringify(newTask), {headers: headers}).map(res => res.json);
  }

}
