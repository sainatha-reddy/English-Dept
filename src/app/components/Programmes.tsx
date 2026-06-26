import { BookOpen, GraduationCap, ClipboardList, Users, FileText, Globe } from "lucide-react";

export default function Programmes() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-gray-900 mb-2">Programmes Offered</h1>
          <p className="text-lg text-gray-600 mb-6 italic">Doctoral Research, Language Education, and Academic Communication</p>

          <p className="text-gray-700 max-w-3xl">
            The Stream of English contributes to undergraduate, postgraduate, and doctoral education at IIITDM Kancheepuram through research-led teaching, language instruction, and advanced academic training.
          </p>
        </div>
      </section>

      {/* Programme Overview - two prominent cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">PhD in English</h2>
                <p className="text-gray-600 mt-1">A doctoral programme offering advanced research training in applied linguistics, literary and cultural studies, and interdisciplinary humanities.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-700">
                <BookOpen className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Undergraduate and Postgraduate Courses</h2>
                <p className="text-gray-600 mt-1">Mandatory and elective English courses offered to B.Tech, M.Tech, and M.Des students across the institute.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PhD in English - featured with nested subsections (subtly highlighted) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-8">
          <h2 className="text-3xl text-gray-900 mb-4">PhD in English</h2>
          <p className="text-gray-700 mb-6">
            The Stream of English offers a Doctor of Philosophy (PhD) programme in English, administered through the Department of Sciences and Humanities, IIITDM Kancheepuram. The programme welcomes candidates with research interests in applied linguistics, literary and cultural studies, and related interdisciplinary fields.
          </p>

          {/* Areas of Research (subsection) */}
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="size-6 text-amber-700" />
              <h3 className="text-2xl font-semibold text-gray-900">Areas of Research</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Applied Linguistics and Language Pedagogy",
                "Second Language Writing and Academic Literacy",
                "Multilingualism and Translanguaging",
                "Discourse Analysis and Critical Language Studies",
                "English for Specific and Academic Purposes (ESP/EAP)",
                "Language Policy and Planning",
                "Literary and Cultural Studies",
                "Medical Humanities and Visual Narrative",
                "Life Writing and Narrative Theory",
                "Communication and Design Intersections",
              ].map((area, i) => (
                <div key={i} className="bg-slate-50 border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h4 className="text-base font-semibold text-gray-900">{area}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility and Admission (subsection) */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 border-l-4 border-amber-200 pl-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="size-5 text-amber-700" />
                <h4 className="text-lg font-semibold text-gray-900">Eligibility</h4>
              </div>
              <p className="text-gray-700">
                Postgraduate degree in English, Linguistics, Education, or a related discipline with a minimum of 55% marks or equivalent CGPA. Candidates must qualify through a written test and interview conducted by the institute.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 border-l-4 border-amber-200 pl-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="size-5 text-amber-700" />
                <h4 className="text-lg font-semibold text-gray-900">Admission</h4>
              </div>
              <p className="text-gray-700">
                Admissions are held twice a year — July and January. For current notifications, please visit the IIITDM Kancheepuram Admissions page at&nbsp;
                <a href="https://www.iiitdm.ac.in/admissions/phd" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline font-medium">www.iiitdm.ac.in/admissions ↗</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Undergraduate and Postgraduate Courses - section with nested subsections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-8">
          <h2 className="text-3xl text-gray-900 mb-4">Undergraduate and Postgraduate Courses</h2>
          <p className="text-gray-700 mb-6">
            The Stream of English offers mandatory and elective English language courses to B.Tech, M.Tech, and M.Des students across the institute. These courses are designed in alignment with the institute's design-centric, interdisciplinary curriculum and the principle of Learning by Doing.
          </p>

          {/* Compulsory Courses (subsection) */}
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="size-6 text-sky-700" />
              <h3 className="text-2xl font-semibold text-gray-900">Compulsory Courses</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">English for Communication</h4>
                <p className="text-gray-700">Semester I — all B.Tech students</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Writing and Communication</h4>
                <p className="text-gray-700">A course focused on technical documentation, clarity, and professional communication skills.</p>
              </div>
            </div>
          </div>

          {/* Elective Courses (subsection) */}
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="size-6 text-sky-700" />
              <h3 className="text-2xl font-semibold text-gray-900">Elective Courses</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Academic Writing for Research",
                "English for Professional Contexts",
                "Language and Society",
                "Creative Writing",
              ].map((course, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h4 className="text-base font-semibold text-gray-900">{course}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/60 bg-gradient-to-r from-white to-sky-50 border border-gray-200 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="size-6 text-sky-700" />
            <h3 className="text-2xl font-semibold text-gray-900">Curriculum Information</h3>
          </div>
          <p className="text-gray-700">
            Course offerings are reviewed and updated each academic year. For current course listings and syllabi, please refer to the institute curriculum page.
          </p>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl p-8 text-center text-white shadow-xl" style={{ background: "linear-gradient(90deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)" }}>
            <p className="text-lg md:text-xl">
              The Stream of English integrates language, communication, literature, and research to support the academic and professional development of students across all disciplines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
