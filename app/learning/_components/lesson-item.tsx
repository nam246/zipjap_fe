'use client';
import { Lesson } from '@/lib/types';

export default function LessonItem({
	children,
	lesson,
}: {
	children: React.ReactNode;
	lesson: Lesson;
}) {
	const grammar = grammars.filter((g) => g.lessonId === lesson.id);
	return (
		<Card className='group hover:shadow-lg transition-all duration-300 cursor-pointer'>
			<CardHeader>
				<CardTitle className='text-xl font-bold text-slate-900 flex items-center gap-1'>
					<BookMarked />
					Bài {lesson.lessonNumber}
				</CardTitle>
				<CardDescription>
					{lesson.source}
					<div className='font-medium flex items-center gap-1'>
						<GraduationCap className='w-4 h-4' />
						{grammar.length} mẫu ngữ pháp
					</div>
				</CardDescription>
				<CardAction className='flex items-center gap-2'>
					<Badge variant='outline' className={`${getLevelColor(lesson.level)}`}>
						{lesson.level}
					</Badge>
					<Button
						variant='outline'
						onClick={() =>
							toast('Item have been Bookmarked', {
								description: 'Sunday, December 03, 2023 at 9:00 AM',
								action: {
									label: 'Undo',
									onClick: () => console.log('Undo'),
								},
							})
						}
					>
						<Bookmark className='text-slate-400 hover:text-blue-500 transition-all' />
					</Button>
				</CardAction>
			</CardHeader>

			<CardContent>
				<div className='space-y-2'>
					{/* Danh sách các pattern ngữ pháp */}
					<ItemGroup className='grid grid-cols-4 gap-2'>
						{grammar.map((item, index) => (
							<GrammarItem grammar={item} index={index} key={index} />
						))}
					</ItemGroup>
				</div>
			</CardContent>

			<CardFooter>
				<Link
					className='text-slate-400 hover:text-blue-500 hover:translate-x-1 transition-all'
					href={`grammar/${lesson.id}?isLesson=true`}
				>
					Xem toàn bộ bài {lesson.lessonNumber} <ChevronRight className='inline' />
				</Link>
			</CardFooter>
		</Card>
	);
}
