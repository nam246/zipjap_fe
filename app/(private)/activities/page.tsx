import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';


export default function ActivitiesPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Hoạt động gần đây</CardTitle>
                <CardDescription>Xem lịch sử hoạt động của bạn</CardDescription>
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
                                <p className='text-sm font-medium text-gray-900'>{activity.title}</p>
                                <p className='text-xs text-gray-500 mt-1'>{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}