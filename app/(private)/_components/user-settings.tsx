'use client';

import { Card } from '@/components/ui/card';
import { Bell, Lock, Moon, Volume2 } from 'lucide-react';
import { useState } from 'react';

interface SettingsProps {
	onSave?: (settings: UserSettings) => Promise<void>;
}

interface UserSettings {
	notifications: boolean;
	emailUpdates: boolean;
	darkMode: boolean;
	soundEnabled: boolean;
}

const UserSettings = ({ onSave }: SettingsProps) => {
	const [settings, setSettings] = useState<UserSettings>({
		notifications: true,
		emailUpdates: false,
		darkMode: false,
		soundEnabled: true,
	});
	const [saving, setSaving] = useState(false);

	const handleToggle = async (key: keyof UserSettings) => {
		const updatedSettings = {
			...settings,
			[key]: !settings[key],
		};
		setSettings(updatedSettings);

		if (onSave) {
			setSaving(true);
			try {
				await onSave(updatedSettings);
			} catch (error) {
				// Revert on error
				setSettings(settings);
			} finally {
				setSaving(false);
			}
		}
	};

	const settingItems = [
		{
			id: 'notifications',
			label: 'Thông báo',
			description: 'Nhận thông báo về các hoạt động học tập',
			icon: Bell,
			color: 'text-blue-600',
			bgColor: 'bg-blue-100',
		},
		{
			id: 'emailUpdates',
			label: 'Cập nhật qua email',
			description: 'Nhận email về tiến độ học và bài học mới',
			icon: Mail,
			color: 'text-green-600',
			bgColor: 'bg-green-100',
		},
		{
			id: 'darkMode',
			label: 'Chế độ tối',
			description: 'Bật chế độ tối để bảo vệ mắt',
			icon: Moon,
			color: 'text-purple-600',
			bgColor: 'bg-purple-100',
		},
		{
			id: 'soundEnabled',
			label: 'Âm thanh',
			description: 'Bật âm thanh trong các bài tập',
			icon: Volume2,
			color: 'text-orange-600',
			bgColor: 'bg-orange-100',
		},
	];

	return (
		<div className='space-y-4'>
			<h3 className='text-lg font-semibold text-gray-900 mb-4'>Cài đặt</h3>

			{settingItems.map((item) => {
				const Icon = item.icon;
				const isEnabled = settings[item.id as keyof UserSettings];

				return (
					<Card key={item.id} className='p-4'>
						<div className='flex items-center justify-between'>
							<div className='flex items-start gap-4'>
								<div className={`${item.bgColor} p-3 rounded-lg`}>
									<Icon className={`w-5 h-5 ${item.color}`} />
								</div>
								<div>
									<p className='font-medium text-gray-900'>{item.label}</p>
									<p className='text-sm text-gray-600'>{item.description}</p>
								</div>
							</div>

							{/* Toggle Switch */}
							<button
								onClick={() =>
									handleToggle(item.id as keyof UserSettings)
								}
								disabled={saving}
								className={`relative w-12 h-7 rounded-full transition-colors ${
									isEnabled ? 'bg-blue-600' : 'bg-gray-300'
								} ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
							>
								<div
									className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
										isEnabled ? 'translate-x-5' : ''
									}`}
								/>
							</button>
						</div>
					</Card>
				);
			})}

			{/* Security Section */}
			<Card className='p-4 mt-6 bg-red-50 border border-red-200'>
				<div className='flex items-start gap-4'>
					<div className='bg-red-100 p-3 rounded-lg'>
						<Lock className='w-5 h-5 text-red-600' />
					</div>
					<div className='flex-1'>
						<p className='font-medium text-gray-900'>Thay đổi mật khẩu</p>
						<p className='text-sm text-gray-600 mb-3'>
							Cập nhật mật khẩu của bạn để bảo mật tài khoản
						</p>
						<button className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium'>
							Thay đổi mật khẩu
						</button>
					</div>
				</div>
			</Card>
		</div>
	);
};

// Re-export Mail icon
const Mail = ({ className }: { className?: string }) => (
	<svg
		className={className}
		fill='none'
		stroke='currentColor'
		viewBox='0 0 24 24'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
		/>
	</svg>
);

export default UserSettings;
