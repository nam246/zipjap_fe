
import type { Metadata } from 'next';
import FlashcardApp from '../_components/flashcard-app';
import PageHeader from '../../_components/page-header';
import { Level, Deck } from '@/lib/types';

export const metadata: Metadata = {
    title: 'Flashcards | Renshyuu Nihongo',
    description: 'Practice Japanese vocabulary and kanji with flashcards.',
};

const FLASHCARD_DECKS: Deck[] = [
    {
        id: 'n5-vocab-1',
        title: 'N5 Vocabulary - Basics',
        description: 'Essential daily words for beginners',
        level: Level.N5,
        type: 'Vocabulary',
        count: 10,
        cards: [
            { id: '1', front: '私', reading: 'watashi', meaning: 'I; me', example: '私は学生です。', exampleMeaning: 'I am a student.' },
            { id: '2', front: '猫', reading: 'neko', meaning: 'Cat', example: '猫が好きです。', exampleMeaning: 'I like cats.' },
            { id: '3', front: '犬', reading: 'inu', meaning: 'Dog', example: '犬はかわいいです。', exampleMeaning: 'Dogs are cute.' },
            { id: '4', front: '食べる', reading: 'taberu', meaning: 'To eat', example: 'パンを食べます。', exampleMeaning: 'I eat bread.' },
            { id: '5', front: '飲む', reading: 'nomu', meaning: 'To drink', example: '水を飲みます。', exampleMeaning: 'I drink water.' },
            { id: '6', front: '本', reading: 'hon', meaning: 'Book', example: '本を読みます。', exampleMeaning: 'I read a book.' },
            { id: '7', front: '学生', reading: 'gakusei', meaning: 'Student', example: '私は日本語の学生です。', exampleMeaning: 'I am a Japanese language student.' },
            { id: '8', front: '学校', reading: 'gakkou', meaning: 'School', example: '学校へ行きます。', exampleMeaning: 'I go to school.' },
            { id: '9', front: '先生', reading: 'sensei', meaning: 'Teacher', example: '田中先生は優しいです。', exampleMeaning: 'Mr. Tanaka is kind.' },
            { id: '10', front: '日本', reading: 'nihon', meaning: 'Japan', example: '日本に行きたいです。', exampleMeaning: 'I want to go to Japan.' },
        ]
    },
    {
        id: 'n5-kanji-1',
        title: 'N5 Kanji - Numbers & Time',
        description: 'Basic kanji for numbers and calendar',
        level: Level.N5,
        type: 'Kanji',
        count: 10,
        cards: [
            { id: 'k1', front: '一', reading: 'ichi / hito', meaning: 'One', example: '一つ (hitotsu)', exampleMeaning: 'One thing' },
            { id: 'k2', front: '二', reading: 'ni / futa', meaning: 'Two', example: '二月 (nigatsu)', exampleMeaning: 'February' },
            { id: 'k3', front: '三', reading: 'san / mi', meaning: 'Three', example: '三日 (mikka)', exampleMeaning: '3rd day of the month' },
            { id: 'k4', front: '四', reading: 'yon / shi', meaning: 'Four', example: '四月 (shigatsu)', exampleMeaning: 'April' },
            { id: 'k5', front: '五', reading: 'go / itsu', meaning: 'Five', example: '五円 (goen)', exampleMeaning: '5 yen' },
            { id: 'k6', front: '日', reading: 'nichi / hi', meaning: 'Day / Sun', example: '日曜日 (nichiyoubi)', exampleMeaning: 'Sunday' },
            { id: 'k7', front: '月', reading: 'getsu / tsuki', meaning: 'Month / Moon', example: '月曜日 (getsuyoubi)', exampleMeaning: 'Monday' },
            { id: 'k8', front: '火', reading: 'ka / hi', meaning: 'Fire', example: '火曜日 (kayoubi)', exampleMeaning: 'Tuesday' },
            { id: 'k9', front: '水', reading: 'sui / mizu', meaning: 'Water', example: '水曜日 (suiyoubi)', exampleMeaning: 'Wednesday' },
            { id: 'k10', front: '年', reading: 'nen / toshi', meaning: 'Year', example: '来年 (rainen)', exampleMeaning: 'Next year' },
        ]
    },
    {
        id: 'n4-gram-1',
        title: 'N4 Grammar - Verbs',
        description: 'Verb conjugations and helpers',
        level: Level.N4,
        type: 'Grammar',
        count: 5,
        cards: [
            { id: 'g1', front: '～てはいけません', reading: 'te wa ikemasen', meaning: 'Must not do (Prohibition)', example: 'ここで写真を撮ってはいけません。', exampleMeaning: 'You must not take photos here.' },
            { id: 'g2', front: '～なければなりません', reading: 'nakereba narimasen', meaning: 'Must do (Obligation)', example: '毎日薬を飲まなければなりません。', exampleMeaning: 'I must take medicine every day.' },
            { id: 'g3', front: '～てもいいです', reading: 'temo ii desu', meaning: 'May do / Is allowed to', example: '入ってもいいですか？', exampleMeaning: 'May I enter?' },
            { id: 'g4', front: '～たことがあります', reading: 'ta koto ga arimasu', meaning: 'Have done before (Experience)', example: '日本へ行ったことがあります。', exampleMeaning: 'I have been to Japan.' },
            { id: 'g5', front: '～たり～たりします', reading: 'tari ~ tari shimasu', meaning: 'Do things like A and B', example: '日曜日は本を読んだり、映画を見たりします。', exampleMeaning: 'On Sundays, I read books, watch movies, etc.' },
        ]
    }
];

export default async function FlashCardsPage({ params }: { params: Promise<{ level: Level }> }) {
    return (
        <div className="">
            <PageHeader title="Thư viện Flashcards" description="Tổng hợp các Flashcards theo cấp độ, kỹ năng và chủ đề" />
            <FlashcardApp decks={FLASHCARD_DECKS} />
        </div>
    );
}