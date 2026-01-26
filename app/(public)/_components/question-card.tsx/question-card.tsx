import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function QuestionCard({
	question,
	handleAnswer,
	userAnswer,
}: {
	question: any;
	handleAnswer: any;
	userAnswer: any;
}) {
	return (
		<Card className='rounded-xl shadow-lg p-8 mb-8'>
			<CardHeader>
				<CardTitle className='text-xl font-bold mb-6'>
					{question.question}
				</CardTitle>
			</CardHeader>

			<CardContent className='space-y-3'>
				{question.options.map((option, idx) => {
					const isSelected = userAnswer?.selectedOption === idx;

					return (
						<Button
							variant={'outline'}
							key={idx}
							onClick={() => handleAnswer(question.id, idx)}
							className={`
                                w-full
                                flex items-center justify-start gap-3 group
                                ${isSelected ? ' bg-primary/5' : 'border-slate-200'}
                            `}
						>
							<div
								className={`
                                w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0
                                ${isSelected ? ' bg-primary' : ''}`}
							>
								{isSelected && <div className='w-2 h-2 rounded-full' />}
							</div>
							<span className={`${isSelected ? 'font-semibold ' : ''}`}>{option}</span>
						</Button>
					);
				})}
			</CardContent>
		</Card>
	);
}
