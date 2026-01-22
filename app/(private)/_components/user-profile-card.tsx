'use client';

import { Card } from '@/components/ui/card';
import { User, Mail, AtSign, Calendar, Edit2 } from 'lucide-react';
import { useState } from 'react';

interface UserProfileCardProps {
	user: {
		id: string;
		name: string;
		email: string;
		username: string;
		createdAt?: string;
	};
	onEditClick?: () => void;
}

const UserProfileCard = ({ user, onEditClick }: UserProfileCardProps) => {
	const joinDate = user.createdAt
		? new Date(user.createdAt).toLocaleDateString('vi-VN', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})
		: 'N/A';

	return (
		<Card className='p-6'>
			{/* Header */}
			<div className='flex items-start justify-between mb-6'>
				<div className='flex items-center gap-4'>
					{/* Avatar */}
					<div className='w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center'>
						<User className='w-10 h-10 text-white' />
					</div>

					{/* User Info */}
					<div>
						<h2 className='text-2xl font-bold text-gray-900'>{user.name}</h2>
						<p className='text-sm text-gray-600 mt-1'>
							@{user.username}
						</p>
					</div>
				</div>

				{/* Edit Button */}
				{onEditClick && (
					<button
						onClick={onEditClick}
						className='flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors'
					>
						<Edit2 className='w-4 h-4' />
						<span>Chỉnh sửa</span>
					</button>
				)}
			</div>

			{/* User Details */}
			<div className='space-y-4 pb-6 border-b border-gray-200'>
				{/* Email */}
				<div className='flex items-center gap-3'>
					<Mail className='w-5 h-5 text-gray-400' />
					<div>
						<p className='text-sm text-gray-600'>Email</p>
						<p className='text-sm font-medium text-gray-900'>{user.email}</p>
					</div>
				</div>

				{/* Username */}
				<div className='flex items-center gap-3'>
					<AtSign className='w-5 h-5 text-gray-400' />
					<div>
						<p className='text-sm text-gray-600'>Tên người dùng</p>
						<p className='text-sm font-medium text-gray-900'>{user.username}</p>
					</div>
				</div>

				{/* Join Date */}
				<div className='flex items-center gap-3'>
					<Calendar className='w-5 h-5 text-gray-400' />
					<div>
						<p className='text-sm text-gray-600'>Ngày tham gia</p>
						<p className='text-sm font-medium text-gray-900'>{joinDate}</p>
					</div>
				</div>
			</div>

			{/* Status Badge */}
			<div className='pt-4 flex items-center gap-2'>
				<div className='w-2 h-2 bg-green-500 rounded-full' />
				<span className='text-sm text-gray-600'>Tài khoản hoạt động</span>
			</div>
		</Card>
	);
};

export default UserProfileCard;
