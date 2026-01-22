import { getGrammarById } from '@/lib/data';
import DetailsNotFound from '../../../_components/details-not-found';

import {
	ArrowLeft,
	BookOpen,
	Lightbulb,
	MessageSquare,
	CheckCircle2,
	AlertCircle,
	Copy,
	Volume2,
} from 'lucide-react';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';

import { Grammar } from '@/lib/types';
import DetailsHeader from '../../../_components/details-header';
import Examples from '../../../_components/examples';

function GrammarPatternCard({ grammar }: { grammar: Grammar }) {
	return (
		<Card>
			<CardHeader className='border-b-2 pb-6'>
				<CardTitle className='text-2xl font-bold mb-1'>{grammar.pattern}</CardTitle>
				<CardDescription>
					<p className='font-medium'>{grammar.meaning}</p>
				</CardDescription>
			</CardHeader>

			<CardContent className='space-y-6'>
				{/* Cấu trúc */}
				<div>
					<div className='flex items-center gap-2 mb-3'>
						<BookOpen className='w-5 h-5' />
						<h3 className='font-bold text-lg'>Cấu trúc</h3>
					</div>
					<div className='p-4 rounded-md font-mono text-lg'>{grammar.structure}</div>
				</div>

				{/* Giải thích */}
				<div>
					<div className='flex items-center gap-2 mb-3'>
						<Lightbulb className='w-5 h-5' />
						<h3 className='font-bold text-lg'>Giải thích</h3>
					</div>
					<p className='leading-relaxed p-4 rounded-md border-l-2'>
						{grammar.explaination}
					</p>
				</div>

				{/* Tabs cho Examples và Notes */}
				<Tabs defaultValue='examples' className='w-full'>
					<TabsList className='grid w-full grid-cols-2'>
						<TabsTrigger value='examples'>
							Ví dụ ({grammar.examples.length || 0})
						</TabsTrigger>
						<TabsTrigger value='notes'>Ghi chú</TabsTrigger>
					</TabsList>

					{/* Ví dụ */}
					<TabsContent value='examples' className='space-y-4 mt-4'>
						<Examples examples={grammar.examples} />
					</TabsContent>

					{/* Ghi chú */}
					<TabsContent value='notes' className='space-y-4 mt-4'>
						{/* Usage Notes */}
						{grammar.notes && grammar.notes.length > 0 && (
							<div>
								<h4 className='font-bold text-slate-900 mb-3 flex items-center gap-2'>
									<CheckCircle2 className='w-5 h-5 text-green-500' />
									Lưu ý khi sử dụng
								</h4>
								{/* <ul className="space-y-2">
                  {grammar.notes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-green-50 p-3 rounded-lg border border-green-200"
                    >
                      <span className="text-green-600 font-bold">•</span>
                      <span className="text-slate-700">{note}</span>
                    </li>
                  ))}
                </ul> */}
							</div>
						)}

						{/* Common Mistakes */}
						{/* {grammar.commonMistakes && grammar.commonMistakes.length > 0 && (
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Lỗi thường gặp
                </h4>
                <ul className="space-y-2">
                  {grammar.commonMistakes.map((mistake, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border border-red-200"
                    >
                      <span className="text-red-600 font-bold">✕</span>
                      <span className="text-slate-700">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
						{/* General Notes */}
						{grammar.notes && (
							<Alert className='bg-slate-50'>
								<MessageSquare className='h-4 w-4' />
								<AlertDescription className='text-slate-700'>
									{grammar.notes}
								</AlertDescription>
							</Alert>
						)}
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}

export default async function GrammarDetails({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ isLesson: string }>;
}) {
	const { id } = await params;
	const { isLesson } = await searchParams;

	const grammar = await getGrammarById(id);

	if (!grammar) {
		return (
			<DetailsNotFound
				title='Không tìm thấy từ vựng'
				description='Từ vựng bạn đang tìm kiếm không tồn tại.'
			/>
		);
	}

	return (
		<div className='space-y-4'>
			{/* Header */}
			<DetailsHeader title='Chi tiết ngữ pháp' />

			{/* Content */}
			<div className='space-y-8'>
				<GrammarPatternCard grammar={grammar} />
			</div>
		</div>
	);
}
