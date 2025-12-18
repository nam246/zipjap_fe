import { vocabularies } from "@/lib/mockData";

export default function LearningVocabularyPage() {
  return (
    <div>
      <h1>Learning Vocabulary </h1>
      <div>
        {vocabularies.map((vocabulary, index) => (
          <div key={index}>{vocabulary.id}</div>
        ))}
      </div>
    </div>
  );
}
