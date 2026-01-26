import PageHeader from "../_components/page-header";
import FlashcardApp from "./_components/flashcard-app";
export default function FlashcardsListPage() {
    return (
        <div>
            <PageHeader title="Flashcards" description="List flashcards theo level." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1">
                </div>
            </div>
        </div>
    );
}