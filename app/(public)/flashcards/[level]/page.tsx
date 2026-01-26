
import type { Metadata } from 'next';
import FlashcardApp from '../_components/flashcard-app';
import PageHeader from '../../_components/page-header';

export const metadata: Metadata = {
    title: 'Flashcards | Renshyuu Nihongo',
    description: 'Practice Japanese vocabulary and kanji with flashcards.',
};

export default function FlashCardsPage() {
    return (
        <div className="">
            <PageHeader title="Flashcards" description="Master Japanese through spaced repetition." />
            <FlashcardApp />
        </div>
    );
}