'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Brain, BookOpen, Layers, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// --- Types & Data ---

type Flashcard = {
    id: string;
    front: string;
    reading?: string;
    meaning: string;
    example?: string;
    exampleMeaning?: string;
};

type Deck = {
    id: string;
    title: string;
    description: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    type: 'Vocabulary' | 'Kanji' | 'Grammar';
    count: number;
    cards: Flashcard[];
};

const FLASHCARD_DECKS: Deck[] = [
    {
        id: 'n5-vocab-1',
        title: 'N5 Vocabulary - Basics',
        description: 'Essential daily words for beginners',
        level: 'N5',
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
        level: 'N5',
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
        level: 'N4',
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

// --- Components ---

export default function FlashcardApp() {
    const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

    if (selectedDeck) {
        return (
            <StudySession
                deck={selectedDeck}
                onExit={() => setSelectedDeck(null)}
            />
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Flashcards Library</h1>
                <p className="text-muted-foreground">Select a deck to start practicing your Japanese.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FLASHCARD_DECKS.map((deck) => (
                    <DeckCard
                        key={deck.id}
                        deck={deck}
                        onClick={() => setSelectedDeck(deck)}
                    />
                ))}
            </div>
        </div>
    );
}

function DeckCard({ deck, onClick }: { deck: Deck; onClick: () => void }) {
    const Icon = deck.type === 'Kanji' ? Brain : deck.type === 'Grammar' ? BookOpen : Layers;

    return (
        <Card
            className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-2 hover:border-primary/50"
            onClick={onClick}
        >
            <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                    <Badge variant={
                        deck.level === 'N5' ? 'default' :
                            deck.level === 'N4' ? 'secondary' : 'outline'
                    } className="mb-2">
                        {deck.level}
                    </Badge>
                    <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{deck.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{deck.description}</p>
                </div>

                <div className="pt-4 flex items-center justify-between text-sm text-muted-foreground border-t">
                    <span>{deck.count} cards</span>
                    <span className="font-medium text-primary group-hover:translate-x-1 transition-transform">Start &rarr;</span>
                </div>
            </div>
        </Card>
    );
}

function StudySession({ deck, onExit }: { deck: Deck; onExit: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

    // Preload next/prev if needed? Not strictly necessary for this simple version.

    const currentCard = deck.cards[currentIndex];
    // Calculate progress properly: (currentIndex) / total if working towards end, 
    // or (currentIndex + 1) / total to verify progress visualization.
    const progress = ((currentIndex + 1) / deck.count) * 100;

    const handleNext = () => {
        if (currentIndex < deck.cards.length - 1) {
            setDirection(1);
            setIsFlipped(false);
            // Small timeout to allow flip reset to be visually imperceptible if needed, 
            // but here we just switch card.
            setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setIsFlipped(false);
            setTimeout(() => setCurrentIndex(prev => prev - 1), 150);
        }
    };

    const handleReset = () => {
        setIsFlipped(false);
        setCurrentIndex(0);
        setDirection(0);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                if (!isFlipped && e.key === ' ') {
                    setIsFlipped(true);
                } else if (currentIndex < deck.count - 1) {
                    handleNext();
                } else if (currentIndex === deck.count - 1 && isFlipped && e.key === 'ArrowRight') {
                    handleReset();
                }
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                setIsFlipped(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isFlipped, deck.count]);

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <Button variant="ghost" onClick={onExit} className="gap-2 pl-0 hover:pl-2 transition-all">
                    <ChevronLeft className="w-4 h-4" /> Back to Decks
                </Button>
                <div className="flex flex-col items-end">
                    <span className="font-medium">{deck.title}</span>
                    <span className="text-xs text-muted-foreground">{currentIndex + 1} / {deck.count}</span>
                </div>
            </div>

            <Progress value={progress} className="h-2 transition-all duration-500" />

            {/* Card Area */}
            <div className="relative min-h-[400px] perspective-1000">
                <div
                    className={cn(
                        "w-full h-full absolute inset-0 transition-transform duration-500 transform-style-3d cursor-pointer shadow-xl rounded-2xl border bg-card",
                        isFlipped ? "rotate-y-180" : ""
                    )}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 bg-gradient-to-br from-background to-accent/20 rounded-2xl">
                        <Badge variant="outline" className="mb-8">Front</Badge>
                        <h2 className="text-6xl font-bold text-center mb-8">{currentCard.front}</h2>
                        <p className="text-muted-foreground animate-pulse text-sm mt-auto">Click to flip</p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 bg-card bg-gradient-to-bl from-background to-primary/5 rounded-2xl">
                        <Badge variant="outline" className="mb-8">Back</Badge>
                        <div className="text-center space-y-4 w-full">
                            {currentCard.reading && (
                                <p className="text-2xl text-primary font-medium">{currentCard.reading}</p>
                            )}
                            <h3 className="text-4xl font-bold mb-6">{currentCard.meaning}</h3>

                            {(currentCard.example) && (
                                <div className="mt-8 pt-6 border-t w-full text-left bg-muted/30 p-4 rounded-lg">
                                    <p className="text-lg mb-1 font-medium">{currentCard.example}</p>
                                    <p className="text-sm text-muted-foreground">{currentCard.exampleMeaning}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="w-12 h-12 rounded-full"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                    variant="outline"
                    className="h-12 px-8 gap-2 min-w-[140px]"
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <RotateCcw className="w-4 h-4" />
                    Flip
                </Button>

                <Button
                    variant={currentIndex === deck.count - 1 ? "secondary" : "default"}
                    size="icon"
                    onClick={currentIndex === deck.count - 1 ? handleReset : handleNext}
                    className="w-12 h-12 rounded-full"
                >
                    {currentIndex === deck.count - 1 ? (
                        <RotateCcw className="w-5 h-5" />
                    ) : (
                        <ChevronRight className="w-5 h-5" />
                    )}
                </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground pt-4">
                Keyboard: arrows to navigate • space/up/down to flip
            </div>
        </div>
    );
}
