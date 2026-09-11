import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Practice() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const problemId = searchParams.get("problemId");

  const [form, setForm] = useState({
    requirements: "",
    classes: "",
    responsibilities: "",
    relationships: "",
    explanation: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const attemptResponse = await fetch(
        "http://localhost:5000/api/attempts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            problemId,
          }),
        }
      );

      const attempt = await attemptResponse.json();

      const submissionResponse = await fetch(
        "http://localhost:5000/api/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            attemptId: attempt._id,
            ...form,
          }),
        }
      );

      if (!submissionResponse.ok) {
        throw new Error("Submission failed");
      }

      navigate(`/feedback?attemptId=${attempt._id}`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while submitting.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-slate-200 rounded-xl p-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="text-xl font-bold"
          >
            Design<span className="text-blue-400">Lab</span>
          </button>

          <button
            onClick={() => navigate("/history")}
            className="text-slate-300 hover:text-white text-sm"
          >
            My Attempts
          </button>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-7">
          <p className="text-blue-600 text-sm font-semibold">
            LLD PRACTICE
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Parking Lot System
          </h1>

          <p className="text-slate-500 mt-2">
            Design the classes, responsibilities and relationships for a
            parking lot system.
          </p>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Problem Context */}
          <aside className="lg:col-span-1">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sticky top-6">
              <p className="text-blue-400 text-sm font-semibold">
                YOUR TASK
              </p>

              <h2 className="text-xl font-bold mt-3">
                Think before you code.
              </h2>

              <p className="text-slate-300 text-sm leading-6 mt-3">
                Focus on object-oriented design. Identify the important
                classes, their responsibilities and how they interact.
              </p>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Design checklist
                </p>

                <ul className="mt-3 space-y-3 text-sm text-slate-300">
                  <li>✓ Understand requirements</li>
                  <li>✓ Identify classes</li>
                  <li>✓ Define responsibilities</li>
                  <li>✓ Define relationships</li>
                  <li>✓ Consider edge cases</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Form */}
          <section className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7"
            >
              <div className="mb-7">
                <h2 className="text-2xl font-bold">
                  Your Design
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                  Explain your approach clearly. There can be multiple valid
                  solutions.
                </p>
              </div>

              <div className="space-y-6">

                <div>
                  <label className="font-semibold text-sm">
                    1. Requirements / Assumptions
                  </label>

                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    rows="4"
                    className={inputClass}
                    placeholder="List the important requirements and assumptions..."
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-sm">
                    2. Classes
                  </label>

                  <textarea
                    name="classes"
                    value={form.classes}
                    onChange={handleChange}
                    rows="4"
                    className={inputClass}
                    placeholder="Example: ParkingLot, Vehicle, ParkingSpot..."
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-sm">
                    3. Responsibilities
                  </label>

                  <textarea
                    name="responsibilities"
                    value={form.responsibilities}
                    onChange={handleChange}
                    rows="4"
                    className={inputClass}
                    placeholder="Explain what each class is responsible for..."
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-sm">
                    4. Relationships
                  </label>

                  <textarea
                    name="relationships"
                    value={form.relationships}
                    onChange={handleChange}
                    rows="4"
                    className={inputClass}
                    placeholder="Explain inheritance, composition, association, etc."
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-sm">
                    5. Design Explanation & Edge Cases
                  </label>

                  <textarea
                    name="explanation"
                    value={form.explanation}
                    onChange={handleChange}
                    rows="5"
                    className={inputClass}
                    placeholder="Explain your design decisions, trade-offs and edge cases..."
                    required
                  />
                </div>

              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
                >
                  {loading ? "Evaluating..." : "Submit for Review →"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Practice;