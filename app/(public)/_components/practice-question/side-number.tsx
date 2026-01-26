'use client';

import { Check, Circle, ChevronLeft, Flag, HelpCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Question {
	id: number;
	question: string;
	options: string[];
}

interface Answer {
	questionId: number;
	selectedOption: number;
}

interface SideNumberProps {
	questions: Question[];
	answers: Answer[];
	currentQuestionId: number;
	onSelect: (id: number) => void;
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
}

export function SideNumber({
	questions,
	answers,
	currentQuestionId,
	onSelect,
	isOpen,
	onClose,
	onSubmit
}: SideNumberProps) {
	const answeredCount = answers.length;
	const progress = Math.round((answeredCount / questions.length) * 100);

	return (
		<aside
			className={cn(
				"fixed inset-y-0 left-0 z-50 w-80 bg-background border-r shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col",
				isOpen ? "translate-x-0" : "-translate-x-full",
				"lg:translate-x-0 lg:static lg:shadow-none lg:z-auto"
			)}
		>
			<div className="p-4 border-b flex items-center justify-between bg-muted/30">
				<div className="flex items-center gap-2">
					<div className="bg-primary/10 p-2 rounded-lg">
						<FileText className="w-5 h-5 text-primary" />
					</div>
					<div>
						<h2 className="font-bold text-lg leading-tight">Overview</h2>
						<p className="text-xs text-muted-foreground">{answeredCount} of {questions.length} answered</p>
					</div>
				</div>
				<Button
					variant="ghost"
					size="icon"
					onClick={onClose}
					className="lg:hidden"
				>
					<ChevronLeft className="w-5 h-5" />
				</Button>
			</div>

			<div className="px-4 py-3 border-b bg-background/50 backdrop-blur-sm sticky top-0 z-10">
				<div className="flex justify-betweentext-sm mb-1.5 font-medium text-sm">
					<span>Progress</span>
					<span className="text-primary">{progress}%</span>
				</div>
				<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
					<div
						className="h-full bg-primary transition-all duration-500 ease-out"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			<ScrollArea className="flex-1 px-2 py-2">
				<div className="space-y-1">
					{questions.map((q, idx) => {
						const answer = answers.find(a => a.questionId === q.id);
						const isAnswered = !!answer;
						const isCurrent = currentQuestionId === q.id;

						return (
							<button
								key={q.id}
								onClick={() => onSelect(q.id)}
								className={cn(
									"w-full text-left p-3 rounded-lg transition-all duration-200 border border-transparent group relative overflow-hidden",
									isCurrent
										? "bg-primary/5 border-primary/20 shadow-sm"
										: "hover:bg-muted bg-background hover:border-border",
									isAnswered && !isCurrent ? "bg-muted/30" : ""
								)}
							>
								{/* Active Indicator Bar */}
								{isCurrent && (
									<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />
								)}

								<div className="flex items-start gap-3 pl-2">
									<div className={cn(
										"flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold border shrink-0 mt-0.5 transition-colors",
										isAnswered
											? "bg-green-100 text-green-700 border-green-200"
											: isCurrent
												? "bg-primary text-primary-foreground border-primary"
												: "bg-muted text-muted-foreground border-border"
									)}>
										{isAnswered ? <Check className="w-3.5 h-3.5" /> : idx + 1}
									</div>

									<div className="flex-1 min-w-0">
										<p className={cn(
											"text-sm font-medium leading-none mb-1.5 truncate",
											isCurrent ? "text-primary" : "text-foreground"
										)}>
											Question {idx + 1}
										</p>

										{answer ? (
											<div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 w-fit px-2 py-0.5 rounded-full border border-border/50">
												<span className="font-semibold text-primary/80">Selected:</span>
												<span className="truncate max-w-[120px]">
													{q.options[answer.selectedOption]}
												</span>
											</div>
										) : (
											<p className="text-xs text-muted-foreground italic">
												Not answered yet
											</p>
										)}
									</div>

									{isCurrent && (
										<Badge variant="secondary" className="text-[10px] px-1.5 h-5 pointer-events-none">
											Active
										</Badge>
									)}
								</div>
							</button>
						);
					})}
				</div>
			</ScrollArea>

			<div className="p-4 border-t bg-muted/10">
				<Button
					onClick={onSubmit}
					className="w-full bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md transition-all h-12 text-base font-semibold"
				>
					<Check className="w-4 h-4 mr-2" />
					Submit Quiz
				</Button>
			</div>
		</aside>
	);
}
