import LearningHeader from '@/components/layout/learning/learning-header';

import { Lesson, Kanji, Level } from '@/lib/types';
import LessonItem from '@/components/layout/learning/lesson-items';
import { getLessons, getKanjis } from '@/lib/data';
import { KanjiList } from '@/components/entities';

export default async function LearningKanjiPage({
	params,
}: {
	params: Promise<{ level: Level }>;
}) {
	const { level } = await params;
	const [lessons, kanjis]: [Lesson[], Kanji[]] = await Promise.all([
		getLessons(level),
		getKanjis(),
	]);

	const kanjiByLessonId = (lessonId: string): Kanji[] => {
		return kanjis.filter((kanji) => kanji.lessonId === lessonId);
	};
	return (
		<>
			{/* Header */}
			<LearningHeader title={`Kanji ${level}`} description='Từ vựng các cấp độ' />

			<div className='space-y-4'>
				{lessons.length > 0 &&
					lessons.map((lesson, idx) => (
						<LessonItem lesson={lesson} key={idx}>
							<KanjiList kanjis={kanjiByLessonId(lesson.id)} />
						</LessonItem>
					))}
			</div>
		</>
	);
}
