import React, { useState } from 'react';
import { BookOpen, User, Search, Brain, Award, BarChart, HelpCircle, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

export default function InfoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Hướng dẫn sử dụng</h1>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Intro */}
                <section className="mb-12">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
                        <h2 className="text-3xl font-bold mb-4">Chào mừng bạn đến với NihongoMaster!</h2>
                        <p className="text-lg text-purple-100">
                            Hướng dẫn này sẽ giúp bạn nắm vững cách sử dụng tất cả các tính năng của ứng dụng
                            để tối ưu hóa quá trình học tiếng Nhật của bạn.
                        </p>
                    </div>
                </section>

                {/* Quick Start */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Bắt đầu nhanh</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <QuickStartCard
                            number="1"
                            title="Đăng ký tài khoản"
                            description="Tạo tài khoản miễn phí trong 30 giây"
                        />
                        <QuickStartCard
                            number="2"
                            title="Làm bài test đầu vào"
                            description="Xác định trình độ hiện tại của bạn"
                        />
                        <QuickStartCard
                            number="3"
                            title="Bắt đầu học"
                            description="Theo lộ trình được đề xuất riêng"
                        />
                    </div>
                </section>

                {/* Feature Guides */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Hướng dẫn chi tiết các tính năng</h2>
                    <div className="space-y-6">
                        <FeatureGuide
                            icon={<User className="w-6 h-6" />}
                            title="1. Quản lý tài khoản"
                            color="from-blue-500 to-cyan-500"
                            steps={[
                                {
                                    title: "Đăng ký tài khoản",
                                    content: "Nhấp vào nút 'Đăng ký' ở góc trên bên phải. Điền email, mật khẩu hoặc đăng ký nhanh bằng Google/Facebook. Xác nhận email để kích hoạt tài khoản."
                                },
                                {
                                    title: "Cập nhật thông tin cá nhân",
                                    content: "Vào 'Cài đặt' > 'Hồ sơ'. Cập nhật ảnh đại diện, tên hiển thị, mục tiêu học tập. Thông tin này giúp cá nhân hóa trải nghiệm học tập của bạn."
                                },
                                {
                                    title: "Thiết lập nhắc nhở",
                                    content: "Vào 'Cài đặt' > 'Thông báo'. Chọn thời gian bạn muốn nhận nhắc nhở học tập hàng ngày. Bật/tắt thông báo theo ý muốn."
                                }
                            ]}
                        />

                        <FeatureGuide
                            icon={<BookOpen className="w-6 h-6" />}
                            title="2. Học từ vựng"
                            color="from-purple-500 to-pink-500"
                            steps={[
                                {
                                    title: "Chọn chủ đề hoặc cấp độ",
                                    content: "Vào tab 'Từ vựng'. Chọn học theo chủ đề (gia đình, du lịch, công việc...) hoặc theo cấp độ JLPT (N5-N1). Mỗi bài học có 10-20 từ mới."
                                },
                                {
                                    title: "Học từ mới",
                                    content: "Mỗi từ hiển thị với: Kanji/Hiragana, nghĩa tiếng Việt, ví dụ câu, hình ảnh minh họa. Nhấn icon loa để nghe phát âm. Đánh dấu sao nếu từ khó cần ôn thêm."
                                },
                                {
                                    title: "Làm bài tập củng cố",
                                    content: "Sau khi học xong, làm 3 dạng bài tập: Điền từ vào chỗ trống, Nối từ với nghĩa, Nghe và chọn từ đúng. Đạt 80% trở lên để hoàn thành bài."
                                },
                                {
                                    title: "Xem tiến độ",
                                    content: "Theo dõi số từ đã học, độ chính xác và từ cần ôn lại trong phần 'Thống kê từ vựng'."
                                }
                            ]}
                        />

                        <FeatureGuide
                            icon={<Search className="w-6 h-6" />}
                            title="3. Luyện Kanji"
                            color="from-green-500 to-emerald-500"
                            steps={[
                                {
                                    title: "Chọn Kanji để học",
                                    content: "Vào tab 'Kanji'. Chọn theo cấp độ JLPT hoặc tìm kiếm Kanji cụ thể. Mỗi Kanji hiển thị đầy đủ thông tin: Nét viết, âm On-Kun, ý nghĩa, các từ ghép."
                                },
                                {
                                    title: "Học nét viết",
                                    content: "Xem animation hướng dẫn viết từng nét. Luyện viết trực tiếp trên màn hình (dùng chuột hoặc chạm). Hệ thống sẽ nhận diện và chấm điểm độ chính xác."
                                },
                                {
                                    title: "Ghi nhớ bộ thủ",
                                    content: "Mỗi Kanji được phân tích bộ thủ và cấu tạo. Học theo nhóm bộ thủ giúp ghi nhớ nhanh hơn và hiểu sâu về cấu trúc Kanji."
                                },
                                {
                                    title: "Test nhận diện",
                                    content: "Làm bài test: Nhìn Kanji đoán âm đọc, Nghe âm chọn Kanji đúng, Viết Kanji từ gợi ý. Luyện tập đều đặn để thành thạo."
                                }
                            ]}
                        />

                        <FeatureGuide
                            icon={<Brain className="w-6 h-6" />}
                            title="4. Ôn tập với Flashcard"
                            color="from-orange-500 to-red-500"
                            steps={[
                                {
                                    title: "Flashcard tự động được tạo",
                                    content: "Sau mỗi bài học, flashcard tự động được tạo cho nội dung bạn đã học. Không cần tự tạo flashcard thủ công."
                                },
                                {
                                    title: "Hệ thống SRS thông minh",
                                    content: "Ứng dụng sử dụng thuật toán Spaced Repetition: Từ khó xuất hiện thường xuyên hơn, Từ dễ xuất hiện ít dần theo thời gian. Tự động tối ưu lịch ôn tập."
                                },
                                {
                                    title: "Ôn tập hàng ngày",
                                    content: "Vào tab 'Ôn tập'. Xem số flashcard cần ôn hôm nay (thường 20-50 thẻ). Xem mặt trước, suy nghĩ đáp án, lật thẻ kiểm tra. Đánh giá độ khó: Dễ/Trung bình/Khó."
                                },
                                {
                                    title: "Tùy chỉnh ôn tập",
                                    content: "Có thể ôn theo: Tất cả nội dung, Chỉ từ vựng, Chỉ Kanji, Chỉ ngữ pháp, Các thẻ đã đánh dấu sao. Điều chỉnh số thẻ ôn mỗi ngày trong Cài đặt."
                                }
                            ]}
                        />

                        <FeatureGuide
                            icon={<Award className="w-6 h-6" />}
                            title="5. Luyện thi JLPT"
                            color="from-pink-500 to-rose-500"
                            steps={[
                                {
                                    title: "Chọn cấp độ thi",
                                    content: "Vào tab 'Luyện thi'. Chọn cấp độ JLPT bạn muốn thi (N5, N4, N3, N2, N1). Xem cấu trúc đề thi và yêu cầu của từng cấp."
                                },
                                {
                                    title: "Luyện theo từng phần",
                                    content: "Luyện riêng từng kỹ năng: Moji (Chữ) & Goi (Từ vựng) - 25-30 phút, Bunpou (Ngữ pháp) & Dokkai (Đọc) - 50-70 phút, Choukai (Nghe) - 30-55 phút. Có đáp án và giải thích chi tiết."
                                },
                                {
                                    title: "Làm đề thi thử",
                                    content: "Chọn 'Thi thử đầy đủ'. Làm bài trong thời gian quy định như thi thật. Hệ thống tự động chấm điểm và xếp loại Pass/Fail theo chuẩn JLPT."
                                },
                                {
                                    title: "Phân tích kết quả",
                                    content: "Sau mỗi bài thi, xem báo cáo chi tiết: Điểm từng phần, Câu đúng/sai, Phần cần cải thiện, Đề xuất lộ trình ôn tập. Lưu lại để theo dõi tiến bộ."
                                }
                            ]}
                        />

                        <FeatureGuide
                            icon={<BarChart className="w-6 h-6" />}
                            title="6. Theo dõi tiến độ"
                            color="from-indigo-500 to-purple-500"
                            steps={[
                                {
                                    title: "Dashboard tổng quan",
                                    content: "Vào tab 'Thống kê'. Xem overview: Số ngày học liên tục (streak), Tổng từ vựng đã học, Tổng Kanji đã nhớ, Điểm thi thử cao nhất. Biểu đồ tiến độ theo tuần/tháng."
                                },
                                {
                                    title: "Thống kê chi tiết",
                                    content: "Xem báo cáo chi tiết theo: Thời gian học mỗi ngày, Độ chính xác từng kỹ năng, Tốc độ tiến bộ so với mục tiêu, Xếp hạng trong cộng đồng (nếu bật)."
                                },
                                {
                                    title: "Đặt mục tiêu",
                                    content: "Thiết lập mục tiêu cụ thể: Học X từ mới/tuần, Ôn X flashcard/ngày, Đạt N3 trong 6 tháng. Ứng dụng nhắc nhở và hỗ trợ bạn đạt mục tiêu."
                                },
                                {
                                    title: "Lịch sử học tập",
                                    content: "Xem lại tất cả bài học đã hoàn thành, bài thi đã làm, thành tích đã đạt. Export báo cáo PDF để lưu trữ hoặc chia sẻ."
                                }
                            ]}
                        />
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <HelpCircle className="w-8 h-8 text-blue-500" />
                        Câu hỏi thường gặp (FAQ)
                    </h2>
                    <div className="space-y-4">
                        <FAQItem
                            question="Tôi nên học mỗi ngày bao nhiêu phút?"
                            answer="Khuyến nghị học 20-30 phút/ngày cho người mới bắt đầu, 30-60 phút/ngày cho trung cấp. Quan trọng là học đều đặn hơn là học dồn. Hệ thống sẽ tự điều chỉnh khối lượng phù hợp với tiến độ của bạn."
                        />
                        <FAQItem
                            question="Làm sao để tải xuống nội dung học offline?"
                            answer="Vào 'Cài đặt' > 'Tải xuống'. Chọn các bài học bạn muốn tải về. Nội dung đã tải có thể học offline, hệ thống sẽ đồng bộ khi có kết nối internet trở lại."
                        />
                        <FAQItem
                            question="Tôi quên mật khẩu, làm sao để khôi phục?"
                            answer="Nhấn 'Quên mật khẩu' ở trang đăng nhập. Nhập email đã đăng ký. Kiểm tra email và làm theo hướng dẫn để đặt lại mật khẩu mới."
                        />
                        <FAQItem
                            question="Dữ liệu học tập có được đồng bộ giữa các thiết bị không?"
                            answer="Có! Tiến độ học tập tự động được đồng bộ trên tất cả thiết bị khi bạn đăng nhập cùng một tài khoản. Bạn có thể học trên điện thoại, sau đó tiếp tục trên máy tính mà không mất dữ liệu."
                        />
                        <FAQItem
                            question="Làm thế nào để báo cáo lỗi hoặc đề xuất tính năng mới?"
                            answer="Vào 'Cài đặt' > 'Phản hồi & Hỗ trợ'. Chọn 'Báo lỗi' hoặc 'Đề xuất tính năng'. Mô tả chi tiết vấn đề hoặc ý tưởng của bạn. Chúng tôi sẽ xem xét và phản hồi trong vòng 48 giờ."
                        />
                        <FAQItem
                            question="Tôi có thể thay đổi mục tiêu học tập giữa chừng không?"
                            answer="Hoàn toàn được! Vào 'Cài đặt' > 'Mục tiêu học tập'. Chọn mục tiêu mới (ví dụ: chuyển từ giao tiếp sang chuẩn bị thi JLPT). Hệ thống sẽ điều chỉnh lộ trình học cho phù hợp."
                        />
                        <FAQItem
                            question="Ứng dụng có miễn phí hoàn toàn không?"
                            answer="Ứng dụng có phiên bản miễn phí với đầy đủ tính năng cơ bản. Phiên bản Premium cung cấp thêm: Không giới hạn bài học, Tải offline không giới hạn, Phân tích AI nâng cao, Ưu tiên hỗ trợ."
                        />
                        <FAQItem
                            question="Làm sao biết mình đã sẵn sàng để thi JLPT?"
                            answer="Làm đề thi thử đầy đủ. Nếu đạt 60%+ (chuẩn Pass) ổn định qua 3-5 lần thi thử, bạn đã sẵn sàng. Ứng dụng cũng có chức năng 'Đánh giá sẵn sàng' đưa ra khuyến nghị cụ thể."
                        />
                    </div>
                </section>

                {/* Tips */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-yellow-500" />
                        Mẹo học hiệu quả
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <TipCard
                            title="Học đều đặn mỗi ngày"
                            description="15 phút/ngày tốt hơn 2 giờ/cuối tuần. Não ghi nhớ tốt hơn khi tiếp xúc thường xuyên với kiến thức mới."
                            color="bg-blue-50 border-blue-200"
                        />
                        <TipCard
                            title="Ưu tiên ôn tập flashcard"
                            description="Dành 5-10 phút đầu mỗi buổi học để ôn flashcard. Đây là cách hiệu quả nhất để giữ kiến thức lâu dài."
                            color="bg-purple-50 border-purple-200"
                        />
                        <TipCard
                            title="Đừng ngại sai"
                            description="Sai là phần của quá trình học. Hệ thống sẽ giúp bạn ôn lại những điểm yếu. Càng sai nhiều, càng học được nhiều."
                            color="bg-green-50 border-green-200"
                        />
                        <TipCard
                            title="Kết hợp nhiều kỹ năng"
                            description="Đừng chỉ học từ vựng. Kết hợp học Kanji, ngữ pháp, nghe để phát triển toàn diện và không nhàm chán."
                            color="bg-orange-50 border-orange-200"
                        />
                        <TipCard
                            title="Tham gia cộng đồng"
                            description="Chia sẻ tiến độ, đặt câu hỏi, học hỏi từ người khác. Cộng đồng giúp duy trì động lực học tập lâu dài."
                            color="bg-pink-50 border-pink-200"
                        />
                        <TipCard
                            title="Đặt mục tiêu ngắn hạn"
                            description="Thay vì 'Đạt N2 trong 1 năm', hãy đặt 'Học 50 từ tuần này'. Mục tiêu nhỏ dễ đạt hơn và tạo cảm giác thành tựu."
                            color="bg-indigo-50 border-indigo-200"
                        />
                    </div>
                </section>

                {/* Support */}
                <section className="bg-gray-100 rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cần hỗ trợ thêm?</h3>
                    <p className="text-gray-700 mb-6">
                        Nếu bạn gặp vấn đề hoặc có câu hỏi chưa được giải đáp, đừng ngại liên hệ với chúng tôi.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                            Gửi yêu cầu hỗ trợ
                        </button>
                        <button className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-purple-600 transition-colors font-medium">
                            Xem video hướng dẫn
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

function QuickStartCard({ number, title, description }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 font-bold text-xl">
                {number}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

function FeatureGuide({ icon, title, color, steps }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center text-white`}>
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-left">{title}</h3>
                </div>
                {isOpen ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
            </button>

            {isOpen && (
                <div className="px-6 pb-6 space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-semibold text-sm">
                                {index + 1}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{step.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
            >
                <h3 className="font-semibold text-gray-900 pr-4">{question}</h3>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
            </button>

            {isOpen && (
                <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}

function TipCard({ title, description, color }) {
    return (
        <div className={`rounded-lg p-6 border-2 ${color}`}>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>
    );
}