'use client';

import { use, useState } from 'react';
import { Check, Circle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavigationButton from './navigation-button';
import { QuestionCard } from '../question-card.tsx/question-card';
import { QuestionHeader } from './question-header';
import { QuestionResult } from './question-result';

// Types
interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer?: number;
}

interface Answer {
	questionId: number;
	selectedOption: number;
}

// Sample quiz data
const sampleQuiz: Question[] = [
	{
		id: 1,
		question: 'What is the capital of Vietnam?',
		options: ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hue'],
		correctAnswer: 1,
	},
	{
		id: 2,
		question: "Which programming language is known as the 'language of the web'?",
		options: ['Python', 'Java', 'JavaScript', 'C++'],
		correctAnswer: 2,
	},
	{
		id: 3,
		question: 'What does HTML stand for?',
		options: [
			'Hyper Text Markup Language',
			'High Tech Modern Language',
			'Home Tool Markup Language',
			'Hyperlinks and Text Markup Language',
		],
		correctAnswer: 0,
	},
	{
		id: 4,
		question: 'What is 2 + 2?',
		options: ['3', '4', '5', '6'],
		correctAnswer: 1,
	},
	{
		id: 5,
		question: 'Which planet is known as the Red Planet?',
		options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
		correctAnswer: 1,
	},
	{
		id: 6,
		question: 'What is the largest ocean on Earth?',
		options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
		correctAnswer: 3,
	},
	{
		id: 7,
		question: "Who wrote 'Romeo and Juliet'?",
		options: [
			'Charles Dickens',
			'William Shakespeare',
			'Jane Austen',
			'Mark Twain',
		],
		correctAnswer: 1,
	},
	{
		id: 8,
		question: 'What is the chemical symbol for gold?',
		options: ['Go', 'Gd', 'Au', 'Ag'],
		correctAnswer: 2,
	},
	{
		id: 9,
		question: 'How many continents are there?',
		options: ['5', '6', '7', '8'],
		correctAnswer: 2,
	},
	{
		id: 10,
		question: 'What is the smallest prime number?',
		options: ['0', '1', '2', '3'],
		correctAnswer: 2,
	},
];

const PracticeQuestion = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [answers, setAnswers] = useState<Answer[]>([]);
	const [showResults, setShowResults] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const questionsPerPage = 1;
	const totalPages = Math.ceil(sampleQuiz.length / questionsPerPage);

	const currentQuestions = sampleQuiz.slice(
		(currentPage - 1) * questionsPerPage,
		currentPage * questionsPerPage,
	);

	const isQuestionAnswered = (questionId: number) => {
		return answers.some((a) => a.questionId === questionId);
	};

	const getAnswer = (questionId: number) => {
		return answers.find((a) => a.questionId === questionId);
	};

	const handleAnswer = (questionId: number, optionIndex: number) => {
		setAnswers((prev) => {
			const existing = prev.filter((a) => a.questionId !== questionId);
			return [...existing, { questionId, selectedOption: optionIndex }];
		});
	};

	const goToPage = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleSubmit = () => {
		if (answers.length < sampleQuiz.length) {
			const confirm = window.confirm(
				`You have answered ${answers.length} out of ${sampleQuiz.length} questions. Submit anyway?`,
			);
			if (!confirm) return;
		}
		setShowResults(true);
	};

	const calculateScore = () => {
		let correct = 0;
		answers.forEach((answer) => {
			const question = sampleQuiz.find((q) => q.id === answer.questionId);
			if (question && question.correctAnswer === answer.selectedOption) {
				correct++;
			}
		});
		return correct;
	};

	const answeredCount = answers.length;
	const progress = (answeredCount / sampleQuiz.length) * 100;

	if (showResults) {
		const score = calculateScore();
		const percentage = ((score / sampleQuiz.length) * 100).toFixed(1);

		return (
			<QuestionResult
				sampleQuiz={sampleQuiz}
				setAnswers={setAnswers([])}
				setShowResults={setShowResults(false)}
				setCurrentPage={setCurrentPage(1)}
				score={score}
				percentage={percentage}
			/>
		);
	}

	return (
		<div className='flex'>
			{/* Sidebar */}
			<aside
				className={`
           shadow-lg transition-transform duration-300 z-20
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-64 overflow-y-auto
        `}
			>
				<div className=''>
					<div className='flex items-center justify-between mb-6'>
						<h2 className='text-lg font-bold'>Questions</h2>
						<button onClick={() => setSidebarOpen(false)} className=' p-1  rounded'>
							<ChevronLeft className='w-5 h-5' />
							sgaga
						</button>
					</div>

					{/* Question Grid */}
					<div className='grid grid-cols-5 gap-2'>
						{sampleQuiz.map((q, idx) => {
							const isAnswered = isQuestionAnswered(q.id);
							const isCurrent = currentPage === idx + 1;

							return (
								<button
									key={q.id}
									onClick={() => goToPage(idx + 1)}
									className={`
                      aspect-square rounded-lg font-semibold text-sm transition-all
                      ${
																							isCurrent
																								? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
																								: isAnswered
																									? 'bg-green-100 text-green-700 hover:bg-green-200'
																									: 'bg-slate-100 text-slate-600 hover:bg-slate-200'
																						}
                    `}
								>
									{isAnswered && !isCurrent && <Check className='w-4 h-4 mx-auto' />}
									{!isAnswered && !isCurrent && idx + 1}
									{isCurrent && idx + 1}
								</button>
							);
						})}
					</div>

					{/* Submit Button */}
					<Button
						onClick={handleSubmit}
						className='w-full mt-6 px-4 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition font-semibold'
					>
						Submit Quiz
					</Button>
				</div>
			</aside>

			{/* Main Content */}
			<div
				className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}
			>
				{/* Toggle Sidebar Button */}
				{!sidebarOpen && (
					<Button
						onClick={() => setSidebarOpen(true)}
						className='fixed top-4 left-4 z-10 p-2 rounded-lg shadow-lg transition'
					>
						<ChevronRight className='w-6 h-6' />
					</Button>
				)}

				<div>
					{/* Header */}
					<QuestionHeader
						currentPage={currentPage}
						totalPages={totalPages}
						answeredCount={answeredCount}
					/>

					{/* Question Card */}
					{currentQuestions.map((question) => {
						const userAnswer = getAnswer(question.id);

						return (
							<QuestionCard
								key={question.id}
								question={question}
								handleAnswer={handleAnswer}
								userAnswer={userAnswer}
							/>
						);
					})}

					{/* Navigation Button */}
					<NavigationButton
						currentPage={currentPage}
						totalPages={totalPages}
						goToPage={(currentPage) => goToPage(currentPage)}
						handleSubmit={handleSubmit}
					/>
				</div>
			</div>
		</div>
	);
};

export default PracticeQuestion;
