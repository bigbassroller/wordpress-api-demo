import { Injectable } from '@angular/core';
import { Http, Response, Headers,  RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';
import 'rxjs/add/operator/toPromise';





@Injectable()
export class UsersService {

	private usersUrl = "http://localhost/wp-json/wp/v2/";

	constructor(private http: Http) { }

	createAuthorizationHeader(headers: Headers) {
		headers.append('Authorization', 'Basic ' +
			btoa('localhost:localhost')); 
	}

	getUsers(): Observable<User[]> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

		return this.http.get(this.usersUrl + 'users', {
	      headers: headers
	    })
		.map((res: Response) => res.json());
	}  

    create(name: string): Promise<User> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

	    return this.http
	        .post(this.usersUrl + 'users', JSON.stringify({name: name}), {headers: headers})
	        .toPromise()
	        .then(res => res.json().data)
	        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
