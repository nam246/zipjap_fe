import UserSettings from '../_components/user-settings';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function SettingsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cài đặt tài khoản</CardTitle>
                <CardDescription>Quản lý các tùy chọn cá nhân của bạn</CardDescription>
            </CardHeader>
            <CardContent>
                <UserSettings />
            </CardContent>
        </Card>
    )
}