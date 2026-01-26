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

	return (
		<>
			{/* <h1 className=''>{type}</h1> */}
			<PracticeQuestion />
		</>
	);
}
