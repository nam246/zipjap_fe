import { Smartphone, Monitor, BookOpen, CheckCircle, PlayCircle } from 'lucide-react';

export default function InfoPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Thông tin ứng dụng</h1>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* About Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Về ứng dụng</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        NihongoMaster là ứng dụng học và ôn tập tiếng Nhật toàn diện, được thiết kế để giúp người học Việt Nam
                        tiếp cận và thành thạo tiếng Nhật một cách hiệu quả. Ứng dụng cung cấp đầy đủ các công cụ cần thiết
                        từ cơ bản đến nâng cao, phù hợp cho mọi trình độ từ người mới bắt đầu đến người chuẩn bị thi JLPT.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Với phương pháp học khoa học kết hợp công nghệ AI, ứng dụng giúp tối ưu hóa thời gian học tập
                        và đảm bảo bạn ghi nhớ kiến thức lâu dài thông qua hệ thống ôn tập thông minh.
                    </p>
                </section>

                {/* What Can Do */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ứng dụng có thể làm gì?</h2>

                    <div className="space-y-6">
                        <FeatureItem
                            title="Học bảng chữ cái Hiragana & Katakana"
                            description="Hệ thống học bảng chữ cái Nhật từ cơ bản với hướng dẫn viết, phát âm chuẩn và bài tập luyện tập tương tác."
                        />

                        <FeatureItem
                            title="Học từ vựng theo chủ đề"
                            description="Hơn 50,000 từ vựng được phân loại theo chủ đề, cấp độ JLPT (N5-N1), kèm theo ví dụ câu, hình ảnh minh họa và âm thanh phát âm."
                        />

                        <FeatureItem
                            title="Luyện viết và nhận diện Kanji"
                            description="Học 2,000+ chữ Kanji với hướng dẫn nét viết từng bước, âm Hán-Việt, âm On-Kun, và các từ ghép thông dụng."
                        />

                        <FeatureItem
                            title="Học ngữ pháp có hệ thống"
                            description="Các mẫu câu ngữ pháp được giải thích chi tiết bằng tiếng Việt, kèm ví dụ thực tế và bài tập vận dụng ngay."
                        />

                        <FeatureItem
                            title="Ôn tập thông minh với Flashcard"
                            description="Hệ thống flashcard tự động sử dụng thuật toán lặp lại ngắt quãng (Spaced Repetition), ưu tiên ôn tập những nội dung bạn hay quên."
                        />

                        <FeatureItem
                            title="Luyện nghe với âm thanh thực tế"
                            description="Hàng trăm bài luyện nghe từ đơn giản đến phức tạp, giúp bạn làm quen với tốc độ nói tự nhiên của người Nhật."
                        />

                        <FeatureItem
                            title="Thi thử JLPT đầy đủ 4 kỹ năng"
                            description="Bộ đề thi thử JLPT đầy đủ (Chữ - Từ vựng, Ngữ pháp - Đọc hiểu, Nghe) với chấm điểm tự động và giải thích đáp án chi tiết."
                        />

                        <FeatureItem
                            title="Theo dõi tiến trình học tập"
                            description="Thống kê chi tiết về số từ đã học, điểm số, thời gian học mỗi ngày và biểu đồ tiến bộ qua từng tuần."
                        />
                    </div>
                </section>

                {/* How to Use */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Cách sử dụng ứng dụng</h2>

                    <div className="space-y-8">
                        <StepItem
                            number="1"
                            title="Tải và cài đặt ứng dụng"
                            description="Tải ứng dụng NihongoMaster từ App Store (iOS) hoặc Google Play (Android). Ứng dụng cũng có phiên bản web tại website chính thức để sử dụng trên máy tính."
                        />

                        <StepItem
                            number="2"
                            title="Tạo tài khoản và đánh giá trình độ"
                            description="Đăng ký tài khoản miễn phí bằng email hoặc tài khoản Google/Facebook. Làm bài test đầu vào ngắn (5-10 phút) để hệ thống xác định trình độ hiện tại của bạn và đề xuất lộ trình học phù hợp."
                        />

                        <StepItem
                            number="3"
                            title="Chọn mục tiêu học tập"
                            description="Xác định mục tiêu của bạn: học giao tiếp cơ bản, chuẩn bị thi JLPT cấp độ nào, hoặc nâng cao kỹ năng chuyên sâu. Hệ thống sẽ tạo lộ trình học tùy chỉnh riêng cho bạn."
                        />

                        <StepItem
                            number="4"
                            title="Học theo lộ trình đề xuất"
                            description="Mỗi ngày, ứng dụng sẽ gợi ý các bài học phù hợp. Bạn học từ vựng mới, ngữ pháp, luyện nghe và làm bài tập. Mỗi bài học kéo dài 10-15 phút, dễ dàng sắp xếp vào lịch trình hàng ngày."
                        />

                        <StepItem
                            number="5"
                            title="Ôn tập đều đặn với Flashcard"
                            description="Sau khi học xong, ứng dụng sẽ tự động tạo flashcard cho nội dung đã học. Mỗi ngày dành 5-10 phút ôn tập flashcard để củng cố kiến thức lâu dài."
                        />

                        <StepItem
                            number="6"
                            title="Kiểm tra tiến độ định kỳ"
                            description="Cuối mỗi tuần/tháng, làm bài kiểm tra tổng hợp để đánh giá tiến bộ. Ứng dụng sẽ phân tích điểm mạnh, điểm yếu và đưa ra lời khuyên cải thiện cụ thể."
                        />
                    </div>
                </section>

                {/* Platform */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Nền tảng hỗ trợ</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <PlatformCard
                            icon={<Smartphone className="w-8 h-8" />}
                            title="Mobile App"
                            description="iOS 13.0+ và Android 8.0+"
                            features={["Học offline", "Thông báo nhắc nhở", "Đồng bộ đám mây"]}
                        />
                        <PlatformCard
                            icon={<Monitor className="w-8 h-8" />}
                            title="Web App"
                            description="Tất cả trình duyệt hiện đại"
                            features={["Màn hình lớn", "Gõ Kanji nhanh", "Không cần cài đặt"]}
                        />
                    </div>
                </section>

                {/* Tips */}
                <section className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <PlayCircle className="w-6 h-6" />
                        Mẹo sử dụng hiệu quả
                    </h3>
                    <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>Học đều đặn mỗi ngày 15-30 phút hiệu quả hơn học dồn vào cuối tuần</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>Bật thông báo nhắc nhở để không bỏ lỡ buổi học hàng ngày</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>Kết hợp học trên cả điện thoại và máy tính để đa dạng trải nghiệm</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>Tham gia cộng đồng học viên để trao đổi kinh nghiệm và duy trì động lực</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
    )
}

function FeatureItem({ title, description }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function StepItem({ number, title, description }) {
    return (
        <div className="flex gap-6">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {number}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function PlatformCard({ icon, title, description, features }) {
    return (
        <div className="rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-600">{icon}</div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}