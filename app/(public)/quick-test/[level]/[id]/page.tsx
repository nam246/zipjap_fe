import { Level } from "@/lib/types";
import PracticeQuestion from '../../../_components/practice-question/practice-question';

export default async function QuickTestDetailPage({ params }: { params: Promise<{ level: Level; id: string }> }) {
    return (
        <PracticeQuestion />
    )
}