import { useState } from "react";
import { useSelector } from "react-redux";

import BaseCard from "../../../shared/components/cards/BaseCard";

const AskLeadership = () => {
  const [question, setQuestion] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  const questions = useSelector(
    (state) => state.leadership.data?.questions || [],
  );

  const handleSubmit = () => {
    if (!question.trim()) return;

    const newQuestion = {
      id: Date.now(),
      question,
      votes: 0,
      answered: false,
    };

    setSubmittedQuestions((prev) => [newQuestion, ...prev]);

    setQuestion("");
  };

  const allQuestions = [...submittedQuestions, ...questions];

  return (
    <BaseCard>
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">Ask Leadership</h2>
      </div>

      <div className="flex gap-3 mb-6">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 border rounded-xl px-4 py-3 outline-none"
        />

        <button
          onClick={handleSubmit}
          className="px-5 bg-indigo-600 text-white rounded-xl"
        >
          Submit
        </button>
      </div>

      <div className="space-y-4">
        {allQuestions.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-4 transition hover:shadow-md"
          >
            <div className="flex justify-between items-center">
              <p>{item.question}</p>

              <span className="text-indigo-600 font-medium">
                👍 {item.votes}
              </span>
            </div>

            <div className="mt-2">
              {item.answered ? (
                <span className="text-green-600 text-sm">
                  Answered
                </span>
              ) : (
                <span className="text-orange-500 text-sm">
                  Pending
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default AskLeadership;