import { getLessons } from '@/lib/data';
import { getVocabularies } from '@/lib/data';

import LearningHeader from '../../_components/learning-header';
import VocabularyItem from '../../_components/vocabulary-item';
import { BookMarked, GraduationCap } from 'lucide-react';
import { ItemGroup } from '@/components/ui/item';
import { LessonResponse, Level, Vocabulary } from '@/lib/types';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default async function LearningVocabularyPage({
	params,
}: {
	params: Promise<{ level: Level }>;
}) {
	const { level } = await params;
	const [lessonsData, vocabulariesData] = await Promise.all([
		getLessons(),
		getVocabularies(),
	]);

	const lessonByLevel = (): LessonResponse[] => {
		return lessonsData.filter((l: LessonResponse) => {
			return l.level === level.toUpperCase();
		});
	};

	const vocabulariesByLessonId = (lessonId: string): Vocabulary[] => {
		return vocabulariesData.filter((v: Vocabulary) => v.lessonId === lessonId);
	};

	return (
		<>
			{/* Header */}
			<LearningHeader
				title={`Từ vựng ${level}`}
				description='Từ vựng các cấp độ'
			/>

			<div className='space-y-4'>
				{lessonByLevel().length > 0 &&
					lessonByLevel().map((lesson, idx) => (
						<Card key={idx}>
							<CardHeader>
								<CardTitle className='text-xl font-bold text-slate-900 flex items-center gap-1'>
									<BookMarked />
									Bài {lesson.lessonTitle}
									<div>{lesson.level}</div>
								</CardTitle>
								<CardDescription>
									{lesson.source}
									<div className='font-medium flex items-center gap-1'>
										<GraduationCap className='w-4 h-4' />
										{vocabulariesByLessonId(lesson.id).length} từ vựng
									</div>
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ItemGroup className='grid grid-cols-4 gap-2'>
									{vocabulariesByLessonId(lesson.id).map((vocabulary, index) => (
										<VocabularyItem key={index} index={index} vocabulary={vocabulary} />
									))}
								</ItemGroup>
							</CardContent>
							<CardFooter></CardFooter>
						</Card>
					))}
			</div>
		</>
	);
}
