'use client';

import { Card } from '@/components/ui/card';
import { X, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface EditProfileFormProps {
	user: {
		id: string;
		name: string;
		email: string;
		username: string;
	};
	onClose: () => void;
	onSave?: (data: {
		name: string;
		email: string;
		username: string;
	}) => Promise<void>;
}

const EditProfileForm = ({ user, onClose, onSave }: EditProfileFormProps) => {
	const [formData, setFormData] = useState({
		name: user.name,
		email: user.email,
		username: user.username,
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		setError('');
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		setSuccess('');

		try {
			// Validate form
			if (!formData.name.trim()) {
				setError('Vui lòng nhập tên');
				setLoading(false);
				return;
			}
			if (!formData.email.trim()) {
				setError('Vui lòng nhập email');
				setLoading(false);
				return;
			}
			if (!formData.username.trim()) {
				setError('Vui lòng nhập tên người dùng');
				setLoading(false);
				return;
			}

			if (onSave) {
				await onSave(formData);
				setSuccess('Cập nhật thông tin thành công!');
				setTimeout(() => {
					onClose();
				}, 1500);
			}
		} catch (err: any) {
			setError(err.message || 'Có lỗi xảy ra');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
			<Card className='w-full max-w-md p-6 mx-4'>
				{/* Header */}
				<div className='flex items-center justify-between mb-6'>
					<h2 className='text-xl font-bold text-gray-900'>Chỉnh sửa thông tin</h2>
					<button
						onClick={onClose}
						className='p-1 hover:bg-gray-100 rounded-lg transition-colors'
					>
						<X className='w-5 h-5 text-gray-600' />
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className='space-y-4'>
					{/* Error Message */}
					{error && (
						<div className='p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm'>
							{error}
						</div>
					)}

					{/* Success Message */}
					{success && (
						<div className='p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm'>
							{success}
						</div>
					)}

					{/* Name Input */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Tên
						</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							placeholder='Nhập tên của bạn'
							className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							disabled={loading}
						/>
					</div>

					{/* Email Input */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Email
						</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder='Nhập email của bạn'
							className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							disabled={loading}
						/>
					</div>

					{/* Username Input */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Tên người dùng
						</label>
						<input
							type='text'
							name='username'
							value={formData.username}
							onChange={handleChange}
							placeholder='Nhập tên người dùng'
							className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							disabled={loading}
						/>
						<p className='text-xs text-gray-500 mt-1'>
							Tên người dùng chỉ có thể chứa chữ cái, số và dấu gạch dưới
						</p>
					</div>

					{/* Buttons */}
					<div className='flex gap-3 pt-4'>
						<button
							type='button'
							onClick={onClose}
							className='flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'
							disabled={loading}
						>
							Hủy
						</button>
						<button
							type='submit'
							className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50'
							disabled={loading}
						>
							{loading && <Loader2 className='w-4 h-4 animate-spin' />}
							{loading ? 'Đang lưu...' : 'Lưu'}
						</button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default EditProfileForm;
