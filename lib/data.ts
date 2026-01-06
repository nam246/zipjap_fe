import { Lesson, Level, Vocabulary } from "./types";

// Nên đổi tên thành data-server. maybe?
// Để data-client cho client components only
const API_URL = process.env.API_URL

export async function getLessons() {
  try {
    const res = await fetch(`${API_URL}/lesson`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
	throw error
  }
}

export async function getLessonsByLevel(level: Level): Promise<Lesson[]> {
	try {
		const res = await fetch(`${API_URL}/lesson`)
		const data = await res.json();
		if (data.length < 0) {
			return []
		}

		return data.filter((d: Lesson) => d.level === level)

	} catch (error) {
		console.log(error);
		throw error
	}
}

export async function getVocabularies(): Promise<Vocabulary[]> {
  try {
    const res = await fetch(`${API_URL}/vocabulary`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
	throw error
  }
}

export async function getVocabularyById(id: string): Promise<Vocabulary> {
  try {
    const res = await fetch(`${API_URL}/vocabulary/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
	throw error
  }
}