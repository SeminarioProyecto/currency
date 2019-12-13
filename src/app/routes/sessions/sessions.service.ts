import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-token');

@Injectable()
export class SessionService {
    private urlback = 'https://currencyapiseminario.herokuapp.com/';
    // private urlback = 'http://localhost:8000/';

    usuarios: any[];

    constructor(private http: HttpClient) { }
    postUser(params): Observable<any> {
        /*  console.log(this.http.get('http://localhost:8000/currencyHistory?result=3')); */
        /* return this.http.get('http://ce1132f2.ngrok.io/currencyHistory/?result:3'); */
        return this.http.get(this.urlback + 'newUser/' + params.email + '/' + params.username + '/' + params.password + '/' + params.confirmPassword);
    }

    login(params): Observable<any> {
        return this.http.get(this.urlback + 'login/' + params.email + '/' + params.password);
    }
}
