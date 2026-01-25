import { Field, FieldLabel } from '@/components/ui/field';
import { Progress } from '@/components/ui/progress';

export function QuestionHeader({
	currentPage,
	totalPages,
	answeredCount,
}: {
	currentPage: number;
	totalPages: number;
	answeredCount: number;
}) {
	return (
		<Field>
			<FieldLabel htmlFor='progress-upload'>
				<span>
					Question {currentPage} of {totalPages}
				</span>
				<span className='ml-auto'>{answeredCount} answered</span>
			</FieldLabel>
			<Progress value={(currentPage / totalPages) * 100} />
		</Field>
	);
}
