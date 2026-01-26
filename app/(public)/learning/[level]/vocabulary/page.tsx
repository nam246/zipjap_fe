import { getLessons, getVocabularies } from '@/lib/data';
import { Lesson, Level, Vocabulary } from '@/lib/types';

import PageHeader from '@/app/(public)/_components/page-header';
import LessonItem from '@/components/layout/learning/lesson-items';
import { VocabularyList } from '@/components/entities';

export default async function LearningVocabularyPage({
	params,
}: {
	params: Promise<{ level: Level }>;
}) {
	const { level } = await params;
	const [lessons, vocabularies]: [Lesson[], Vocabulary[]] = await Promise.all([
		getLessons(level),
		getVocabularies(),
	]);

	const vocabulariesByLessonId = (lessonId: string): Vocabulary[] => {
		return vocabularies.filter((v: Vocabulary) => v.lessonId === lessonId);
	};

	return (
		<>
			{/* Header */}
			<PageHeader
				title={`Từ vựng ${level}`}
				description='Từ vựng các cấp độ'
			/>

			<div className='space-y-4'>
				{lessons.length > 0 &&
					lessons.map((lesson, idx) => (
						<LessonItem lesson={lesson} key={idx}>
							<VocabularyList vocabularies={vocabulariesByLessonId(lesson.id)} />
						</LessonItem>
					))}
			</div>
		</>
	);
}
