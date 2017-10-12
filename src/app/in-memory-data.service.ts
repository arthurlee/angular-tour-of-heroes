import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const heroes = [
			// { id: 0,  name: 'Zero' },
			// { id: 11, name: 'Mr. Nice' },
			// { id: 12, name: 'Narco' },
			// { id: 13, name: 'Bombasto' },
			// { id: 14, name: 'Celeritas' },
			// { id: 15, name: 'Magneta' },
			// { id: 16, name: 'RubberMan' },
			// { id: 17, name: 'Dynama' },
			// { id: 18, name: 'Dr IQ' },
			// { id: 19, name: 'Magma' },
			// { id: 20, name: 'Tornado' }

			{ id: 0,  name: '刘邦' },
			{ id: 11, name: '项羽' },
			{ id: 12, name: '萧何' },
			{ id: 13, name: '张良' },
			{ id: 14, name: '范曾' },
			{ id: 15, name: '韩信' },
			{ id: 16, name: '樊哙' },
			{ id: 17, name: '陈胜' },
			{ id: 18, name: '吴广' },
			{ id: 19, name: '吕雉' },
			{ id: 20, name: '陈平' }
		];
		return {heroes};
	}
}
