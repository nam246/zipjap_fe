'use client';

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@/lib/auth-context';
import UserProfileCard from '../_components/user-profile-card';
import EditProfileForm from '../_components/edit-profile-form';
import UserStatistics from '../_components/user-statistics';
import UserSettings from '../_components/user-settings';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, BarChart3, Settings, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const UserPage = () => {
	const router = useRouter();
	const authContext = useContext(AuthContext);
	const [showEditForm, setShowEditForm] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Check if user is authenticated
		if (!authContext?.user) {
			router.push('/auth/login');
		} else {
			setLoading(false);
		}
	}, [authContext?.user, router]);

	if (loading || !authContext?.user) {
		return (
			<div className='flex items-center justify-center py-12'>
				<div className='text-center'>
					<div className='inline-block animate-spin'>
						<div className='h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full' />
					</div>
					<p className='mt-4 text-gray-600'>Đang tải...</p>
				</div>
			</div>
		);
	}

	const handleLogout = () => {
		authContext?.logout();
		router.push('/auth/login');
	};

	const mockUserData = {
		...authContext.user,
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
	};

	return (
		<div className='space-y-6'>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-3xl font-bold text-gray-900'>Hồ sơ cá nhân</h1>
					<p className='text-gray-600 mt-1'>Quản lý thông tin và cài đặt tài khoản của bạn</p>
				</div>
				<button
					onClick={handleLogout}
					className='flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors'
				>
					<LogOut className='w-4 h-4' />
					<span>Đăng xuất</span>
				</button>
			</div>

			{/* Profile Card */}
			<UserProfileCard
				user={mockUserData}
				onEditClick={() => setShowEditForm(true)}
			/>

			{/* Tabs */}
			<Tabs defaultValue='statistics' className='w-full'>
				<TabsList className='grid w-full grid-cols-3'>
					<TabsTrigger value='statistics' className='flex items-center gap-2'>
						<BarChart3 className='w-4 h-4' />
						<span className='hidden sm:inline'>Thống kê</span>
					</TabsTrigger>
					<TabsTrigger value='settings' className='flex items-center gap-2'>
						<Settings className='w-4 h-4' />
						<span className='hidden sm:inline'>Cài đặt</span>
					</TabsTrigger>
					<TabsTrigger value='activity' className='flex items-center gap-2'>
						<User className='w-4 h-4' />
						<span className='hidden sm:inline'>Hoạt động</span>
					</TabsTrigger>
				</TabsList>

				{/* Statistics Tab */}
				<TabsContent value='statistics' className='space-y-6'>
					<UserStatistics
						lessonsCompleted={24}
						vocabularyLearned={285}
						grammarPatterns={18}
						totalStudyHours={156}
						currentLevel='N5'
						streak={12}
					/>
				</TabsContent>

				{/* Settings Tab */}
				<TabsContent value='settings'>
					<Card>
						<CardHeader>
							<CardTitle>Cài đặt tài khoản</CardTitle>
							<CardDescription>
								Quản lý các tùy chọn cá nhân của bạn
							</CardDescription>
						</CardHeader>
						<CardContent>
							<UserSettings />
						</CardContent>
					</Card>
				</TabsContent>

				{/* Activity Tab */}
				<TabsContent value='activity'>
					<Card>
						<CardHeader>
							<CardTitle>Hoạt động gần đây</CardTitle>
							<CardDescription>
								Xem lịch sử hoạt động của bạn
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='space-y-4'>
								{[
									{
										title: 'Hoàn thành bài học: Động từ trong tiếng Nhật',
										time: '2 giờ trước',
										icon: '📚',
									},
									{
										title: 'Học 15 từ vựng mới',
										time: 'Hôm qua',
										icon: '📝',
									},
									{
										title: 'Hoàn thành bài kiểm tra: N5 Grammar',
										time: '3 ngày trước',
										icon: '✅',
									},
									{
										title: 'Đạt streak 7 ngày liên tiếp',
										time: 'Tuần trước',
										icon: '🔥',
									},
									{
										title: 'Hoàn thành lần đầu tiên 100 từ vựng',
										time: '2 tuần trước',
										icon: '🎉',
									},
								].map((activity, index) => (
									<div
										key={index}
										className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'
									>
										<span className='text-xl'>{activity.icon}</span>
										<div className='flex-1'>
											<p className='text-sm font-medium text-gray-900'>
												{activity.title}
											</p>
											<p className='text-xs text-gray-500 mt-1'>
												{activity.time}
											</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>

			{/* Edit Profile Modal */}
			{showEditForm && (
				<EditProfileForm
					user={mockUserData}
					onClose={() => setShowEditForm(false)}
					onSave={async (data) => {
						// Simulate API call
						await new Promise((resolve) => setTimeout(resolve, 500));
						console.log('Saved:', data);
					}}
				/>
			)}
		</div>
	);
};

export default UserPage;
