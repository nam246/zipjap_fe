import PracticeQuestion from '../../_components/practice-question/practice-question';
import { Level } from '@/lib/types';

export default async function PracticeVocabularyPage({
	params,
	searchParams,
}: {
	params: Promise<{ level: Level }>;
	searchParams: Promise<{ type: string }>;
}) {
	const { level } = await params;
	const { type } = await searchParams;

	const sampleQuiz = [
		{
			id: 1,
			question: 'What is the capital of Vietnam?',
			options: ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hue'],
			correctAnswer: 1,
		},
		{
			id: 2,
			question:
				"Which programming language is known as the 'language of the web'?",
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

	return (
		<>
			{/* <h1 className=''>{type}</h1> */}
			<PracticeQuestion />
		</>
	);
}
