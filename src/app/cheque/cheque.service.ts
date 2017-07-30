import {Injectable} from '@angular/core';
import {Headers, Response, Http} from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChequeService {
    constructor (private http: Http){

    }

    url:string = '/api/cheque/convert'

    getChequeInWords(val: string):Observable<string> {
        return this.http.get(this.url + "?amount=" + val)
            .map( data => data.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.statusText || 'Server error');
    }
}
