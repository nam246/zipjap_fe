import { BASE_URL_API } from '@/lib/constant';

export async function getLessons() {
	try {
		const res = await fetch(`${BASE_URL_API}/lesson`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getVocabularies() {
	try {
		const res = await fetch(`${BASE_URL_API}/vocabulary`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
