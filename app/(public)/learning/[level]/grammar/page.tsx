import { Grammar, Lesson, Level } from '@/lib/types';
import { getLessons, getGrammars } from '@/lib/data';
import LessonItem from '@/components/layout/learning/lesson-items';
import LearningHeader from '@/components/layout/learning/learning-header';
import { GrammarList } from '@/components/entities';
import FilterBar from '../../_components/filter';

export default async function LearningGrammarPage({
	params,
}: {
	params: Promise<{ level: Level }>;
}) {
	const { level } = await params;
	const [lessons, grammars]: [Lesson[], Grammar[]] = await Promise.all([
		getLessons(level),
		getGrammars(),
	]);

	const grammarsByLessonId = (lessonId: string) => {
		return grammars.filter((grammar) => grammar.lessonId === lessonId);
	};

	return (
		<>
			{/* Header */}
			<LearningHeader
				title='Ngữ pháp tiếng Nhật'
				description='Học các mẫu ngữ pháp từ cơ bản đến nâng cao'
			/>

			{/* Danh sách bài học */}
			<div className='space-y-4'>
				{lessons.map((lesson, index) => (
					<LessonItem key={index} lesson={lesson}>
						<GrammarList grammars={grammarsByLessonId(lesson.id)} />
					</LessonItem>
				))}
			</div>
		</>
	);
}
