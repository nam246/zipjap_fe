'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Plus, Save, X } from 'lucide-react';

interface VocabularyFormData {
	word: string;
	kana: string;
	romaji: string;
	meaning: string;
	wordType: string;
	level: string;
	mediaFile: File | null;
	mediaPreview: string;
	examples: Array<{ japanese: string; vietnamese: string }>;
}

const AddVocabularyPage = () => {
	const [formData, setFormData] = useState<VocabularyFormData>({
		word: '',
		kana: '',
		romaji: '',
		meaning: '',
		wordType: 'noun',
		level: 'N5',
		mediaFile: null,
		mediaPreview: '',
		examples: [{ japanese: '', vietnamese: '' }],
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		setError('');
	};

	const handleExampleChange = (
		index: number,
		field: 'japanese' | 'vietnamese',
		value: string,
	) => {
		const newExamples = [...formData.examples];
		newExamples[index] = {
			...newExamples[index],
			[field]: value,
		};
		setFormData((prev) => ({
			...prev,
			examples: newExamples,
		}));
	};

	const addExample = () => {
		setFormData((prev) => ({
			...prev,
			examples: [...prev.examples, { japanese: '', vietnamese: '' }],
		}));
	};

	const removeExample = (index: number) => {
		setFormData((prev) => ({
			...prev,
			examples: prev.examples.filter((_, i) => i !== index),
		}));
	};

	const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setFormData((prev) => ({
					...prev,
					mediaFile: file,
					mediaPreview: reader.result as string,
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const removeMedia = () => {
		setFormData((prev) => ({
			...prev,
			mediaFile: null,
			mediaPreview: '',
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		setSuccess('');

		try {
			// Validate
			if (!formData.word.trim()) {
				throw new Error('Vui lòng nhập từ tiếng Nhật');
			}
			if (!formData.meaning.trim()) {
				throw new Error('Vui lòng nhập ý nghĩa');
			}

			// TODO: Call API to save vocabulary
			console.log('Saving vocabulary:', formData);

			setSuccess('Thêm từ vựng thành công!');
			// Reset form
			setFormData({
				word: '',
				kana: '',
				romaji: '',
				meaning: '',
				wordType: 'noun',
				level: 'N5',
				mediaFile: null,
				mediaPreview: '',
				examples: [{ japanese: '', vietnamese: '' }],
			});
		} catch (err: any) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='space-y-6'>
			{/* Header */}
			<div>
				<h1 className='text-3xl font-bold text-gray-900'>Thêm từ vựng mới</h1>
				<p className='text-gray-600 mt-1'>
					Tạo từ vựng mới để bổ sung vào thư viện học tập
				</p>
			</div>

			<form onSubmit={handleSubmit} className='space-y-6'>
				{/* Messages */}
				{error && (
					<div className='p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg'>
						{error}
					</div>
				)}
				{success && (
					<div className='p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg'>
						{success}
					</div>
				)}

				{/* Basic Info */}
				<Card className='p-6'>
					<h2 className='text-lg font-semibold text-gray-900 mb-4'>
						Thông tin cơ bản
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* Japanese Word */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Từ tiếng Nhật *
							</label>
							<input
								type='text'
								name='word'
								value={formData.word}
								onChange={handleInputChange}
								placeholder='例：日本'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							/>
						</div>

						{/* Kana */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Kana
							</label>
							<input
								type='text'
								name='kana'
								value={formData.kana}
								onChange={handleInputChange}
								placeholder='例：にほん'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							/>
						</div>

						{/* Romaji */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Romaji
							</label>
							<input
								type='text'
								name='romaji'
								value={formData.romaji}
								onChange={handleInputChange}
								placeholder='例：nihon'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							/>
						</div>

						{/* Meaning */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Ý nghĩa *
							</label>
							<input
								type='text'
								name='meaning'
								value={formData.meaning}
								onChange={handleInputChange}
								placeholder='Ý nghĩa tiếng Việt'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							/>
						</div>

						{/* Word Type */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Loại từ
							</label>
							<select
								name='wordType'
								value={formData.wordType}
								onChange={handleInputChange}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							>
								<option value='noun'>Danh từ</option>
								<option value='verb'>Động từ</option>
								<option value='adjective'>Tính từ</option>
								<option value='adverb'>Trạng từ</option>
								<option value='other'>Khác</option>
							</select>
						</div>

						{/* Level */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Trình độ
							</label>
							<select
								name='level'
								value={formData.level}
								onChange={handleInputChange}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							>
								<option value='N5'>N5</option>
								<option value='N4'>N4</option>
								<option value='N3'>N3</option>
								<option value='N2'>N2</option>
								<option value='N1'>N1</option>
							</select>
						</div>
					</div>
				</Card>
				{/* Media Upload */}
				<Card className='p-6'>
					<h2 className='text-lg font-semibold text-gray-900 mb-4'>
						Hình ảnh minh họa
					</h2>

					<div className='space-y-4'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Tải lên hình ảnh
							</label>
							<input
								type='file'
								accept='image/*'
								onChange={handleMediaChange}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							/>
							<p className='text-xs text-gray-500 mt-1'>
								Ỗng hỗ trợ: JPG, PNG, GIF (Tối đa 5MB)
							</p>
						</div>

						{formData.mediaPreview && (
							<div className='relative inline-block'>
								<img
									src={formData.mediaPreview}
									alt='Preview'
									className='max-w-xs h-auto rounded-lg border border-gray-300'
								/>
								<button
									type='button'
									onClick={removeMedia}
									className='absolute -top-2 -right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors'
								>
									<X className='w-4 h-4' />
								</button>
							</div>
						)}
					</div>
				</Card>
				{/* Examples */}
				<Card className='p-6'>
					<div className='flex items-center justify-between mb-4'>
						<h2 className='text-lg font-semibold text-gray-900'>Ví dụ</h2>
						<button
							type='button'
							onClick={addExample}
							className='flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg transition-colors'
						>
							<Plus className='w-4 h-4' />
							Thêm ví dụ
						</button>
					</div>

					<div className='space-y-4'>
						{formData.examples.map((example, index) => (
							<div key={index} className='p-4 border border-gray-200 rounded-lg'>
								<div className='flex items-center justify-between mb-3'>
									<p className='text-sm font-medium text-gray-700'>Ví dụ {index + 1}</p>
									{formData.examples.length > 1 && (
										<button
											type='button'
											onClick={() => removeExample(index)}
											className='p-1 hover:bg-red-100 rounded transition-colors'
										>
											<X className='w-4 h-4 text-red-600' />
										</button>
									)}
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
									<input
										type='text'
										value={example.japanese}
										onChange={(e) =>
											handleExampleChange(index, 'japanese', e.target.value)
										}
										placeholder='Câu tiếng Nhật'
										className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
										disabled={loading}
									/>
									<input
										type='text'
										value={example.vietnamese}
										onChange={(e) =>
											handleExampleChange(index, 'vietnamese', e.target.value)
										}
										placeholder='Dịch tiếng Việt'
										className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
										disabled={loading}
									/>
								</div>
							</div>
						))}
					</div>
				</Card>

				{/* Submit Button */}
				<div className='flex gap-3'>
					<button
						type='submit'
						disabled={loading}
						className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium'
					>
						<Save className='w-4 h-4' />
						{loading ? 'Đang lưu...' : 'Lưu từ vựng'}
					</button>
					<button
						type='button'
						className='px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium'
					>
						Hủy
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddVocabularyPage;
