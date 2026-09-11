import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
function Feedback() {
  const [searchParams] = useSearchParams();
  const attemptId = searchParams.get("attemptId");
  const navigate = useNavigate();

  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/evaluations/${attemptId}`)
      .then((response) => response.json())
      .then((data) => {
        setEvaluation(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch evaluation:", error);
        setLoading(false);
      });
  }, [attemptId]);

  if (loading) {
    return <div className="p-10">Loading feedback...</div>;
  }

  if (!evaluation) {
    return <div className="p-10">No evaluation found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">
          Your LLD Feedback
        </h1>

        <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Overall Score
          </h2>

          <p className="mt-2 text-4xl font-bold">
            {evaluation.overallScore}/10
          </p>

          <p className="mt-4 text-gray-600">
            {evaluation.summary}
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {evaluation.criteria?.map((criterion, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {criterion.name}
                </h2>

                <span className="font-bold">
                  {criterion.score}/10
                </span>
              </div>

              <p className="mt-4">
                <strong>Evidence:</strong> {criterion.evidence}
              </p>

              <p className="mt-2 text-gray-600">
                <strong>Concern:</strong> {criterion.concern}
              </p>

              <p className="mt-2 text-gray-600">
                <strong>Suggestion:</strong> {criterion.suggestion}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Confidence: {criterion.confidence}
              </p>
            </div>
                    ))}
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
        >
          Try Another Problem
        </button>
      </div>
    </div>
  );
}

export default Feedback;