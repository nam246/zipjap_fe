'use client';

import { Card } from '@/components/ui/card';
import { Bookmark, Copy, Check, Volume2 } from 'lucide-react';
import { useState } from 'react';

export interface KanjiItem {
	id: string;
	character: string;
	onyomi: string;
	kunyomi: string;
	meaning: string;
	level: string;
	strokeCount?: number;
	examples?: Array<{
		word: string;
		meaning: string;
	}>;
	bookmarked: boolean;
	createdAt?: string;
}

interface KanjiCardProps {
	item: KanjiItem;
	onToggleBookmark?: (id: string) => void;
	onRemove?: (id: string) => void;
}

const KanjiCard = ({
	item,
	onToggleBookmark,
	onRemove,
}: KanjiCardProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleSpeak = (text: string) => {
		if ('speechSynthesis' in window) {
			const utterance = new SpeechSynthesisUtterance(text);
			utterance.lang = 'ja-JP';
			speechSynthesis.speak(utterance);
		}
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
				<div className='flex gap-2 items-center'>
					<span
						className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getLevelColor(
							item.level
						)}`}
					>
						{item.level}
					</span>
					{item.strokeCount && (
						<span className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded'>
							{item.strokeCount} nét
						</span>
					)}
				</div>
				<button
					onClick={() => {
						onToggleBookmark?.(item.id);
						onRemove?.(item.id);
					}}
					className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
					title={item.bookmarked ? 'Bỏ bookmark' : 'Thêm bookmark'}
				>
					{item.bookmarked ? (
						<Bookmark className='size-5 fill-yellow-400 text-yellow-500' />
					) : (
						<Bookmark className='size-5 text-gray-400' />
					)}
				</button>
			</div>

			{/* Kanji character display */}
			<div className='mb-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg text-center'>
				<div className='flex items-center justify-between'>
					<div className='flex-1'>
						<p className='text-5xl font-bold text-gray-900 mb-2'>
							{item.character}
						</p>
						<p className='text-sm text-gray-600'>Ý nghĩa: {item.meaning}</p>
					</div>
					<button
						onClick={() => handleSpeak(item.character)}
						className='p-3 hover:bg-blue-200 rounded-lg transition-colors'
						title='Phát âm'
					>
						<Volume2 className='size-6 text-blue-600' />
					</button>
				</div>
			</div>

			{/* Onyomi and Kunyomi */}
			<div className='mb-3 pb-3 border-b border-gray-200'>
				<div className='grid grid-cols-2 gap-3'>
					<div>
						<p className='text-xs font-medium text-gray-600 uppercase'>Âm On</p>
						<p className='text-sm font-semibold text-gray-900'>
							{item.onyomi || 'N/A'}
						</p>
					</div>
					<div>
						<p className='text-xs font-medium text-gray-600 uppercase'>Âm Kun</p>
						<p className='text-sm font-semibold text-gray-900'>
							{item.kunyomi || 'N/A'}
						</p>
					</div>
				</div>
			</div>

			{/* Examples if available */}
			{item.examples && item.examples.length > 0 && (
				<div className='mb-3 pb-3 border-b border-gray-200'>
					<p className='text-sm font-medium text-gray-700 mb-2'>
						Từ vựng sử dụng ({item.examples.length})
					</p>
					<div className='space-y-2'>
						{item.examples.slice(0, 2).map((example, idx) => (
							<div
								key={idx}
								className='text-sm p-2 bg-green-50 rounded border border-green-200'
							>
								<p className='font-medium text-gray-900'>{example.word}</p>
								<p className='text-gray-600'>{example.meaning}</p>
							</div>
						))}
						{item.examples.length > 2 && (
							<p className='text-xs text-gray-500'>
								+{item.examples.length - 2} từ khác
							</p>
						)}
					</div>
				</div>
			)}

			{/* Actions */}
			<div className='flex gap-2'>
				<button
					onClick={() => handleCopy(item.character)}
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
				<button
					onClick={() => handleSpeak(item.character)}
					className='flex items-center justify-center gap-1 px-3 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors'
				>
					<Volume2 className='size-4' />
				</button>
			</div>
		</Card>
	);
};

export default KanjiCard;
