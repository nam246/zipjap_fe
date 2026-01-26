'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import UserProfileCard from '../_components/user-profile-card';
import EditProfileForm from '../_components/edit-profile-form';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
	const router = useRouter();
	const { user, logout, isLoading } = useAuth();
	const [showEditForm, setShowEditForm] = useState(false);

	return (
		<div className='space-y-6'>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-3xl font-bold text-gray-900'>Hồ sơ cá nhân</h1>
					<p className='text-gray-600 mt-1'>
						Quản lý thông tin và cài đặt tài khoản của bạn
					</p>
				</div>
			</div>

			{/* Profile Card */}
			<UserProfileCard
				user={user}
				onEditClick={() => setShowEditForm(true)}
			/>

			{/* Edit Profile Modal */}
			<Sheet open={showEditForm} onOpenChange={setShowEditForm}>
				<SheetContent className='max-w-md'>
					<EditProfileForm
						user={user}
						onClose={() => setShowEditForm(false)}
						onSave={async (data) => {
							// Simulate API call
							await new Promise((resolve) => setTimeout(resolve, 500));
							console.log('Saved:', data);
							setShowEditForm(false);
						}}
					/>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default ProfilePage;
