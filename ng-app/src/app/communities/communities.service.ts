import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Community } from './community.model';


const BASE_URL = 'https://127.0.0.1:8443/api/groups/';

@Injectable()
export class CommunityService {

	constructor(private http: Http) { }

	
	getGroups(page: number) {
		return this.http.get(BASE_URL + "?page=" + page +"&size=3")
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	getGroup(id: number | string) {
		return this.http.get(BASE_URL + id)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	

	createGroup(community: Community) {
		return this.http.post(BASE_URL, community)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	deleteGroup(id: number | string) {
		return this.http.delete(BASE_URL + id)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	updatedGroup(id: number | string, community: Community){
		return this.http.put(BASE_URL + id,community)
            .map(response => response.json())
            .catch(error => this.handleError(error));
	}

	followGroup(id: number | string){
		return this.http.put(BASE_URL + id, null)
            .map(response => response.json())
            .catch(error => this.handleError(error));
	}

	
	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}