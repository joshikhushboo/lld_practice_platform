import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Problems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/problems")
      .then((res) => res.json())
      .then((data) => {
        setProblems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const difficultyStyle = (difficulty) => {
    if (difficulty === "Easy") {
      return "bg-green-100 text-green-700";
    }
    if (difficulty === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Design<span className="text-blue-400">Lab</span>
          </h1>

          <div className="flex gap-6 text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-blue-400 font-medium"
            >
              Problems
            </button>

            <button
              onClick={() => navigate("/history")}
              className="text-slate-300 hover:text-white"
            >
              My Attempts
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-900 text-white px-6 pb-16 pt-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-3">
            LLD PRACTICE PLATFORM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Master Low-Level Design by Building.
          </h2>

          <p className="text-slate-300 mt-5 max-w-2xl text-lg">
            Practice real-world system design problems, submit your approach,
            and get structured AI feedback to improve your design skills.
          </p>

          <div className="flex gap-8 mt-8 text-sm">
            <div>
              <p className="text-2xl font-bold">{problems.length}</p>
              <p className="text-slate-400">Problems</p>
            </div>

            <div>
              <p className="text-2xl font-bold">6</p>
              <p className="text-slate-400">Evaluation Criteria</p>
            </div>

            <div>
              <p className="text-2xl font-bold">AI</p>
              <p className="text-slate-400">Feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-7">
          <h3 className="text-2xl font-bold">Choose a Problem</h3>
          <p className="text-slate-500 mt-1">
            Pick a problem and start designing your solution.
          </p>
        </div>

        {loading ? (
          <p className="text-slate-500">Loading problems...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={problem._id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-slate-400">
                    0{index + 1}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyStyle(
                      problem.difficulty
                    )}`}
                  >
                    {problem.difficulty}
                  </span>
                </div>

                <h4 className="text-xl font-bold mt-4">
                  {problem.title}
                </h4>

                <p className="text-slate-500 text-sm leading-6 mt-3">
                  {problem.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                    Requirements
                  </p>

                  <p className="text-sm text-slate-600">
                    {problem.requirements?.length || 0} requirements to
                    consider
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigate(`/practice?problemId=${problem._id}`)
                  }
                  className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
                >
                  Start Practice →
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Problems;