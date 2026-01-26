import { Check } from 'lucide-react';

export function QuestionResult({
	sampleQuiz,
	setAnswers,
	setShowResults,
	setCurrentPage,
	percentage,
	score,
}: {
	sampleQuiz: any;
	setAnswers: any;
	setShowResults: any;
	setCurrentPage: any;
	percentage: any;
	score: any;
}) {
	return (
		<div className='min-h-screen p-8'>
			<div className='max-w-2xl mx-auto rounded-lg shadow-lg p-8'>
				<div className='text-center'>
					<div className='w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center'>
						<Check className='w-12 h-12 text-green-600' />
					</div>
					<h1 className='text-3xl font-bold mb-4'>Quiz Complete!</h1>
					<p className='text-6xl font-bold text-primary mb-4'>{percentage}%</p>
					<p className='text-xl mb-8'>
						You got {score} out of {sampleQuiz.length} questions correct
					</p>
					<button
						onClick={() => {
							setAnswers([]);
							setShowResults(false);
							setCurrentPage(1);
						}}
						className='px-6 py-3 rounded-lg hover:bg-primary/90 transition'
					>
						Retake Quiz
					</button>
				</div>
			</div>
		</div>
	);
}
