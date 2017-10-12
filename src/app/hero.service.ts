import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';

@Injectable()
export class HeroService {

	private heroesUrl = 'api/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]> {
		// return Promise.resolve(HEROES);

		//
		// 很奇怪的是，response的 json()方法返回的数据里面没有 data 对象
		//
		// from README.md of angular-in-memory-web-api 0.5.0
		// As of v0.5.0 (5 October 2017), the dataEncapsulation configuration default changed from false to true.
		// The HTTP response body holds the data values directly rather than an object that encapsulates those values,
		// {data: ...}. This is a breaking change that affects almost all existing apps!

		return this.http.get(this.heroesUrl)
			.toPromise()
			// .then(response => response.json().data as Hero[])
			.then(response => response.json() as Hero[])
			.catch(this.handleError);
	}

	handleError(error: any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// 模拟慢速网络的情况
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	getHero(id: number): Promise<Hero> {
		// return this.getHeroes()
		// 	.then(heroes => heroes.find(hero => hero.id === id));

		const url = `${this.heroesUrl}/${id}`;

		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Hero)
			.catch(this.handleError);
	}

	update(hero: Hero): Promise<Hero> {
		const url = `${this.heroesUrl}/${hero.id}`;

		return this.http
			.put(url, JSON.stringify(hero), {headers: this.headers})
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}

	create(name: String): Promise<Hero> {
		return this.http
			.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Hero)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http
			.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => url)
			.catch(this.handleError);
	}
}
