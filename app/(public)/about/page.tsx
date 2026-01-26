import React from 'react';
import { GraduationCap, Target, Lightbulb, BookOpen, Code, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Về đồ án</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Project Info */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white mb-8">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-10 h-10" />
              <h2 className="text-3xl font-bold">Đồ Án Tốt Nghiệp</h2>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Ứng dụng Web App để Học Tập và Ôn Luyện Tiếng Nhật
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-purple-100">
              <div>
                <p className="font-medium">Sinh viên thực hiện:</p>
                <p className="text-white">[Tên sinh viên]</p>
              </div>
              <div>
                <p className="font-medium">Mã số sinh viên:</p>
                <p className="text-white">[MSSV]</p>
              </div>
              <div>
                <p className="font-medium">Ngành học:</p>
                <p className="text-white">Công nghệ Thông tin</p>
              </div>
              <div>
                <p className="font-medium">Năm thực hiện:</p>
                <p className="text-white">2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tổng quan đồ án</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              Đồ án "Ứng dụng Web App để Học Tập và Ôn Luyện Tiếng Nhật" được phát triển nhằm giải quyết bài toán thực tế về nhu cầu học ngoại ngữ ngày càng tăng cao, đặc biệt là tiếng Nhật - một trong những ngôn ngữ được quan tâm hàng đầu tại Việt Nam.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thông qua việc ứng dụng các công nghệ web hiện đại kết hợp với các phương pháp sư phạm khoa học, đồ án hướng tới việc xây dựng một nền tảng học tập trực tuyến hiệu quả, tiện lợi và phù hợp với người học Việt Nam.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-500" />
            Vấn đề nghiên cứu
          </h2>
          <div className="space-y-4">
            <ProblemCard
              title="Thiếu công cụ học tập phù hợp"
              description="Các ứng dụng học tiếng Nhật hiện có phần lớn được phát triển cho thị trường quốc tế, ít có sự tùy chỉnh cho người học Việt Nam về mặt ngôn ngữ giải thích và phương pháp tiếp cận."
            />
            <ProblemCard
              title="Khó duy trì động lực học tập"
              description="Người học tự học thường gặp khó khăn trong việc duy trì tiến độ và động lực do thiếu sự giám sát, hướng dẫn và phản hồi kịp thời."
            />
            <ProblemCard
              title="Phương pháp ôn tập chưa hiệu quả"
              description="Nhiều người học không áp dụng phương pháp ôn tập khoa học, dẫn đến việc quên nhanh kiến thức đã học và lãng phí thời gian."
            />
            <ProblemCard
              title="Thiếu hệ thống đánh giá năng lực"
              description="Người học tự học khó xác định chính xác trình độ hiện tại và những điểm cần cải thiện để có kế hoạch học tập phù hợp."
            />
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-green-500" />
            Mục tiêu đồ án
          </h2>
          <div className="space-y-6">
            <ObjectiveCard
              number="01"
              title="Xây dựng hệ thống học tập toàn diện"
              description="Phát triển ứng dụng web hỗ trợ học viên từ cơ bản đến nâng cao, bao gồm đầy đủ các kỹ năng: từ vựng, Kanji, ngữ pháp, nghe, đọc hiểu theo chuẩn JLPT N5-N1."
              color="from-blue-500 to-cyan-500"
            />
            <ObjectiveCard
              number="02"
              title="Ứng dụng phương pháp học khoa học"
              description="Tích hợp thuật toán Spaced Repetition System (SRS) để tối ưu hóa quá trình ghi nhớ và ôn tập, giúp người học tiết kiệm thời gian và nâng cao hiệu quả."
              color="from-purple-500 to-pink-500"
            />
            <ObjectiveCard
              number="03"
              title="Cá nhân hóa trải nghiệm học tập"
              description="Xây dựng hệ thống đánh giá trình độ ban đầu và theo dõi tiến trình học tập, từ đó đề xuất lộ trình học phù hợp với từng cá nhân."
              color="from-green-500 to-emerald-500"
            />
            <ObjectiveCard
              number="04"
              title="Tạo môi trường học tương tác"
              description="Phát triển giao diện thân thiện, trực quan với các bài tập tương tác, game hóa để tăng sự hứng thú và duy trì động lực học tập lâu dài."
              color="from-orange-500 to-red-500"
            />
          </div>
        </section>

        {/* Scope */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Phạm vi đồ án</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ScopeCard
              title="Chức năng chính"
              items={[
                "Quản lý tài khoản người dùng",
                "Học từ vựng theo chủ đề và cấp độ JLPT",
                "Luyện viết và nhận diện Kanji",
                "Học ngữ pháp có hệ thống",
                "Ôn tập thông minh với Flashcard (SRS)",
                "Luyện nghe và đọc hiểu",
                "Thi thử JLPT",
                "Thống kê và theo dõi tiến độ học tập"
              ]}
            />
            <ScopeCard
              title="Công nghệ sử dụng"
              items={[
                "Frontend: Next.js, React, Tailwind CSS",
                "Backend: Node.js, Express.js",
                "Database: MongoDB/PostgreSQL",
                "Authentication: JWT, OAuth 2.0",
                "Deployment: Vercel/AWS",
                "Version Control: Git, GitHub",
                "API: RESTful API",
                "Testing: Jest, React Testing Library"
              ]}
            />
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Code className="w-8 h-8 text-purple-500" />
            Phương pháp thực hiện
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="space-y-6">
              <MethodStep
                step="1"
                title="Nghiên cứu lý thuyết và khảo sát"
                content="Nghiên cứu các phương pháp học ngôn ngữ hiện đại, đặc biệt là Spaced Repetition System. Khảo sát nhu cầu và thói quen học tập của người học tiếng Nhật tại Việt Nam."
              />
              <MethodStep
                step="2"
                title="Phân tích và thiết kế hệ thống"
                content="Xác định yêu cầu chức năng và phi chức năng. Thiết kế kiến trúc hệ thống, cơ sở dữ liệu, và giao diện người dùng (UI/UX Design)."
              />
              <MethodStep
                step="3"
                title="Phát triển ứng dụng"
                content="Xây dựng các module theo từng giai đoạn: Frontend, Backend, Database. Tích hợp các tính năng và API. Áp dụng mô hình Agile trong quá trình phát triển."
              />
              <MethodStep
                step="4"
                title="Kiểm thử và tối ưu"
                content="Thực hiện Unit Testing, Integration Testing và User Acceptance Testing. Tối ưu hiệu năng, bảo mật và trải nghiệm người dùng."
              />
              <MethodStep
                step="5"
                title="Triển khai và đánh giá"
                content="Deploy ứng dụng lên môi trường production. Thu thập phản hồi từ người dùng thực tế và đánh giá kết quả đạt được so với mục tiêu ban đầu."
              />
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            Kết quả kỳ vọng
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <ul className="space-y-4">
              <ResultItem text="Một ứng dụng web hoàn chỉnh, hoạt động ổn định và đáp ứng đầy đủ các chức năng đã đề ra" />
              <ResultItem text="Hệ thống có khả năng phục vụ đồng thời nhiều người dùng với hiệu năng tốt" />
              <ResultItem text="Giao diện thân thiện, dễ sử dụng, tương thích đa nền tảng (desktop, mobile, tablet)" />
              <ResultItem text="Thuật toán ôn tập thông minh hoạt động hiệu quả, được kiểm chứng qua thực tế sử dụng" />
              <ResultItem text="Tài liệu kỹ thuật đầy đủ: báo cáo đồ án, tài liệu hướng dẫn sử dụng, tài liệu API" />
              <ResultItem text="Đóng góp vào việc cải thiện phương pháp học tiếng Nhật cho cộng đồng người Việt" />
            </ul>
          </div>
        </section>

        {/* Significance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ý nghĩa của đồ án</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SignificanceCard
              title="Ý nghĩa khoa học"
              items={[
                "Áp dụng và kiểm chứng các lý thuyết học tập ngôn ngữ vào thực tế",
                "Nghiên cứu và triển khai thuật toán SRS trong bối cảnh học tiếng Nhật",
                "Đóng góp vào việc số hóa giáo dục và e-learning tại Việt Nam"
              ]}
            />
            <SignificanceCard
              title="Ý nghĩa thực tiễn"
              items={[
                "Cung cấp công cụ học tập miễn phí/chi phí thấp cho người học",
                "Giúp người học tiết kiệm thời gian và nâng cao hiệu quả học tập",
                "Tạo nền tảng cho việc phát triển các ứng dụng học ngoại ngữ khác"
              ]}
            />
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Lời cảm ơn</h3>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
            Em xin chân thành cảm ơn quý thầy/cô đã hướng dẫn, giúp đỡ em hoàn thành đồ án này. 
            Đồ án không chỉ giúp em củng cố kiến thức chuyên môn mà còn tạo ra một sản phẩm thực sự 
            có giá trị và ý nghĩa với cộng đồng.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Em cũng xin cảm ơn gia đình, bạn bè và những người dùng đầu tiên đã tin tưởng, 
            góp ý và ủng hộ em trong suốt quá trình thực hiện đồ án.
          </p>
        </section>
      </div>
    </div>
  );
}

function ProblemCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ObjectiveCard({ number, title, description, color }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex gap-6">
        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ScopeCard({ title, items }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-purple-600 mt-1">▪</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MethodStep({ step, title, content }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
        {step}
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function ResultItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function SignificanceCard({ title, items }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-blue-600 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}