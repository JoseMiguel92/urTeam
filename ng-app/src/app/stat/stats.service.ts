import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { HttpClient } from '../HttpClient/httpClient';
import {Stat} from './stat.model';
import { UserSportStats } from './userSportsStats.model';

const BASE_URL = 'https://localhost:8443/api/stats/';

@Injectable()
export class StatsService{

    constructor(private http: HttpClient){}

    getUserStats(nickname: string) {
		return this.http.get(BASE_URL+nickname)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

    createUserStats(nickname: string, sportName: string, userStat: Stat) {
		let url = BASE_URL + nickname +'/'+sportName;
		return this.http.post(url,userStat)
			.map(response =>
				response.json())
			.catch(error => this.handleError(error));
	}



    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}