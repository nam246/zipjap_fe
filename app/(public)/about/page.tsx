import { Heart, Target, Lightbulb, Users, Mail, Github, Linkedin } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold">Về chúng tôi</h1>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Intro Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <span className="text-4xl text-white font-bold">👋</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Xin chào!</h2>
                        <p className="text-xl max-w-2xl mx-auto">
                            Tôi là người sáng tạo ra NihongoMaster - một ứng dụng học tiếng Nhật được tạo ra từ niềm đam mê và trải nghiệm thực tế của chính tôi.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Heart className="w-8 h-8 text-red-500" />
                        Câu chuyện của tôi
                    </h2>
                    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="leading-relaxed mb-4">
                                Hành trình học tiếng Nhật của tôi bắt đầu từ năm 2018, khi tôi quyết định tự học để theo đuổi ước mơ du học và làm việc tại Nhật Bản. Như nhiều người học khác, tôi đã trải qua không ít khó khăn: từ việc ghi nhớ hàng nghìn ký tự Kanji, phân biệt các âm thanh tương tự, đến việc hiểu được văn hóa và cách sử dụng ngôn ngữ trong từng ngữ cảnh cụ thể.
                            </p>
                            <p className="leading-relaxed mb-4">
                                Tôi đã thử rất nhiều phương pháp học khác nhau: sách giáo khoa truyền thống, các ứng dụng học tiếng Nhật phổ biến, flashcard giấy, xem anime có phụ đề, tham gia các nhóm học tập... Mỗi phương pháp đều có ưu và nhược điểm riêng. Tôi nhận ra rằng không có một giải pháp nào thực sự hoàn hảo và phù hợp với người học Việt Nam.
                            </p>
                            <p className="leading-relaxed mb-4">
                                Với nền tảng công nghệ và kinh nghiệm làm việc trong lĩnh vực phát triển phần mềm, tôi quyết định tự tay xây dựng một ứng dụng học tiếng Nhật mà tôi mong muốn có khi mới bắt đầu học - một công cụ thực sự hiểu được nỗi đau của người học, được thiết kế dành riêng cho người Việt, và tận dụng công nghệ để tối ưu hóa quá trình học tập.
                            </p>
                            <p className="leading-relaxed">
                                NihongoMaster ra đời từ những trải nghiệm thực tế đó. Đây không chỉ là một sản phẩm công nghệ, mà còn là tâm huyết, là mong muốn giúp đỡ những người đang đi trên con đường học tiếng Nhật như tôi đã từng.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Target className="w-8 h-8 text-blue-500" />
                        Mục tiêu của dự án
                    </h2>
                    <div className="space-y-6">
                        <GoalCard
                            number="01"
                            title="Làm cho việc học tiếng Nhật dễ tiếp cận hơn"
                            description="Tạo ra một ứng dụng miễn phí hoặc chi phí thấp, giúp mọi người Việt Nam có cơ hội học tiếng Nhật chất lượng cao mà không bị rào cản bởi chi phí. Học tiếng Nhật không nên là đặc quyền của số ít."
                            color="from-blue-500 to-cyan-500"
                        />
                        <GoalCard
                            number="02"
                            title="Tối ưu hóa thời gian học tập"
                            description="Áp dụng khoa học nhận thức và công nghệ AI để giúp người học ghi nhớ hiệu quả hơn, ôn tập đúng thời điểm, và không lãng phí thời gian vào những phương pháp không hiệu quả. Mỗi phút học đều có giá trị."
                            color="from-purple-500 to-pink-500"
                        />
                        <GoalCard
                            number="03"
                            title="Xây dựng cộng đồng học tập tích cực"
                            description="Kết nối những người có cùng đam mê học tiếng Nhật, tạo môi trường hỗ trợ lẫn nhau, chia sẻ kinh nghiệm, và cùng nhau duy trì động lực học tập lâu dài. Một mình đi nhanh, cùng nhau đi xa."
                            color="from-green-500 to-emerald-500"
                        />
                        <GoalCard
                            number="04"
                            title="Cập nhật và cải tiến liên tục"
                            description="Lắng nghe phản hồi từ cộng đồng người dùng, không ngừng cải thiện và bổ sung tính năng mới. Ứng dụng phát triển cùng với nhu cầu thực tế của người học, không ngừng lại ở một phiên bản hoàn hảo."
                            color="from-orange-500 to-red-500"
                        />
                    </div>
                </section>

                {/* Vision Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-yellow-500" />
                        Tầm nhìn
                    </h2>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
                        <p className="text-lg leading-relaxed mb-4">
                            Tôi mong muốn NihongoMaster trở thành người bạn đồng hành đáng tin cậy cho hàng triệu người Việt Nam trên hành trình chinh phục tiếng Nhật. Không chỉ là một công cụ học tập, mà là một cộng đồng nơi mọi người cùng nhau phát triển, chia sẻ ước mơ và hiện thực hóa mục tiêu của mình.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Trong tương lai, tôi hy vọng sẽ mở rộng ứng dụng với nhiều tính năng hơn: học qua trò chơi tương tác, luyện nói với AI, kết nối với giáo viên bản ngữ, và xây dựng một nền tảng toàn diện giúp người học không chỉ thành thạo ngôn ngữ mà còn hiểu sâu về văn hóa Nhật Bản.
                        </p>
                    </div>
                </section>

                {/* Community Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Users className="w-8 h-8 text-purple-500" />
                        Cộng đồng và sự đóng góp
                    </h2>
                    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            NihongoMaster không thể phát triển mà không có sự đóng góp và phản hồi từ cộng đồng người dùng. Mỗi ý kiến đóng góp, mỗi báo lỗi, mỗi lời khuyên đều vô cùng quý giá và giúp ứng dụng ngày càng hoàn thiện hơn.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nếu bạn là developer và muốn đóng góp vào dự án mã nguồn mở này, hoặc nếu bạn có ý tưởng muốn chia sẻ, đừng ngại liên hệ với tôi. Tôi luôn chào đón mọi sự hợp tác và góp ý xây dựng.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <ContactButton icon={<Mail />} text="Email" />
                            <ContactButton icon={<Github />} text="GitHub" />
                            <ContactButton icon={<Linkedin />} text="LinkedIn" />
                        </div>
                    </div>
                </section>

                {/* Thank You Section */}
                <section className="text-center">
                    <div className="bg-gray-100 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">Cảm ơn bạn!</h3>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            Cảm ơn bạn đã dành thời gian tìm hiểu về NihongoMaster và câu chuyện đằng sau ứng dụng này.
                            Hy vọng rằng ứng dụng sẽ giúp ích được cho hành trình học tiếng Nhật của bạn.
                            Chúc bạn học tập hiệu quả và sớm đạt được mục tiêu của mình!
                        </p>
                        <p className="text-xl font-semibold text-purple-600 mt-6">
                            頑張ってください！ (Ganbatte kudasai!)
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

function GoalCard({ number, title, description, color }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex gap-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                    {number}
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}

function ContactButton({ icon, text }) {
    return (
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium">
            <span className="w-5 h-5">{icon}</span>
            {text}
        </button>
    );
}