import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function History() {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/history")
      .then((res) => res.json())
      .then((data) => setAttempts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Attempt History</h1>

        <div className="mt-8 space-y-4">
          {attempts.map((attempt) => (
            <div
              key={attempt._id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-semibold">
                {attempt.problemId?.title}
              </h2>

              <p className="mt-2 text-gray-600">
                Difficulty: {attempt.problemId?.difficulty}
              </p>

              <p className="mt-2 font-medium">
                Status: {attempt.status}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Attempt #{attempt.attemptNumber}
              </p>

              {attempt.status === "COMPLETED" && (
                <Link
                  to={`/feedback?attemptId=${attempt._id}`}
                  className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white"
                >
                  View Feedback
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;