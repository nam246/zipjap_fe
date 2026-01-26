import PracticeQuestion from '../../_components/practice-question/practice-question';
import { Level } from '@/lib/types';

// Tổng hợp các câu hỏi tùy chọn theo cấp độ JLPT?
// Kiểu 1 đề thi JLPT thường có nhiều loại câu hỏi, thì random ra cỡ 10 câu

type QuizType = {
    vocabulary: string; // Trả lời các câu hỏi từ vựng trong đề thi jlpt
    grammar: string; // Trả lời các câu hỏi ngữ pháp trong đề thi jlpt
    kanji: string; // trả lời các câu hỏi kanji
    reading: string; // trả lời các bài đọc
    listening: string; // trả lời các bài nghe
}

export default async function QuickTestListPage({
    searchParams,
}: {
    searchParams: Promise<{ level: Level, type: QuizType }>;
}) {
    const { level, type } = await searchParams;

    return (
        <>
            {/* <h1 className=''>{type}</h1> */}
            <PracticeQuestion />
        </>
    );
}