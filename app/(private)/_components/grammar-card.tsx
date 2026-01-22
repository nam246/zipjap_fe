'use client';

import { BookmarkedButton } from '@/components/entities/bookmarked-button';
import { Card } from '@/components/ui/card';
import { Bookmark, Copy, Check, BookOpen } from 'lucide-react';
import { useState } from 'react';

export interface GrammarItem {
	id: string;
	pattern: string;
	structure: string;
	meaning: string;
	explanation: string;
	level: string;
	examples?: Array<{
		japanese: string;
		vietnamese: string;
	}>;
	bookmarked: boolean;
	createdAt?: string;
}

interface GrammarCardProps {
	item: GrammarItem;
	onToggleBookmark?: (id: string) => void;
	onRemove?: (id: string) => void;
}

const GrammarCard = ({
	item,
	onToggleBookmark,
	onRemove,
}: GrammarCardProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const getLevelColor = (level: string) => {
		switch (level) {
			case 'N5':
				return 'bg-blue-100 text-blue-800';
			case 'N4':
				return 'bg-green-100 text-green-800';
			case 'N3':
				return 'bg-yellow-100 text-yellow-800';
			case 'N2':
				return 'bg-orange-100 text-orange-800';
			case 'N1':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};

	return (
		<Card className='p-4 hover:shadow-lg transition-shadow'>
			{/* Header with level and bookmark */}
			<div className='flex items-start justify-between mb-3'>
				<span
					className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getLevelColor(
						item.level,
					)}`}
				>
					{item.level}
				</span>
				<BookmarkedButton
					item={item}
					onRemove={() => onRemove?.(item.id)}
					onToggleBookmark={() => onToggleBookmark?.(item.id)}
				/>
			</div>

			{/* Grammar pattern */}
			<div className='mb-3'>
				<div className='flex items-start gap-2 mb-1'>
					<BookOpen className='size-5 text-blue-600 mt-1 flex-shrink-0' />
					<div>
						<h3 className='text-lg font-bold text-gray-900'>{item.pattern}</h3>
						<p className='text-sm text-gray-600 mt-1'>Ý nghĩa: {item.meaning}</p>
					</div>
				</div>
			</div>

			{/* Structure */}
			<div className='mb-3 pb-3 border-b border-gray-200'>
				<p className='text-sm font-medium text-gray-700 mb-2'>Cấu trúc:</p>
				<div className='p-2 bg-gray-50 rounded text-sm font-mono text-gray-800 break-words'>
					{item.structure}
				</div>
			</div>

			{/* Explanation */}
			<div className='mb-3 pb-3 border-b border-gray-200'>
				<p className='text-sm font-medium text-gray-700 mb-2'>Giải thích:</p>
				<p className='text-sm text-gray-600'>{item.explanation}</p>
			</div>

			{/* Examples if available */}
			{item.examples && item.examples.length > 0 && (
				<div className='mb-3 pb-3 border-b border-gray-200'>
					<p className='text-sm font-medium text-gray-700 mb-2'>
						Ví dụ ({item.examples.length})
					</p>
					<div className='space-y-2'>
						{item.examples.slice(0, 2).map((example, idx) => (
							<div
								key={idx}
								className='text-sm p-2 bg-blue-50 rounded border border-blue-200'
							>
								<p className='font-medium text-gray-900'>{example.japanese}</p>
								<p className='text-gray-600'>{example.vietnamese}</p>
							</div>
						))}
						{item.examples.length > 2 && (
							<p className='text-xs text-gray-500'>
								+{item.examples.length - 2} ví dụ khác
							</p>
						)}
					</div>
				</div>
			)}

			{/* Actions */}
			<div className='flex gap-2'>
				<button
					onClick={() => handleCopy(item.pattern)}
					className='flex-1 flex items-center justify-center gap-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors'
				>
					{copied ? (
						<>
							<Check className='size-4' />
							<span>Đã sao chép</span>
						</>
					) : (
						<>
							<Copy className='size-4' />
							<span>Sao chép</span>
						</>
					)}
				</button>
			</div>
		</Card>
	);
};

export default GrammarCard;
