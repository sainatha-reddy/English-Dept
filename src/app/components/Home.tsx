import { Users, BookOpen, Layers, FileText, Search, Globe, PenTool, Check } from "lucide-react";

// The default export remains the same file but the component name is updated
// to reflect that this is the Home page (index route).
export default function HomeDepartment() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1709159057219-80439fbeddce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzcwODMxMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Library books"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              Language. Literature. Culture.
            </h1>
            <p className="text-lg text-gray-200">
              <span className="font-extrabold text-gray-900 bg-amber-300 inline-block px-2 py-0.5 rounded">Welcome to the Stream of English</span> Department of Sciences and Humanities Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[520px] py-0 flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h2 className="text-3xl text-gray-900 mb-6"></h2>
            <p className="text-gray-600 mb-4">
              The Stream of English at IIITDM Kancheepuram is committed to cultivating literary and aesthetic appreciation, linguistic competence, cultural interpretation, critical thinking, and effective communication in students across all disciplines.
            </p>
            <p className="text-gray-600 mb-4">
              Situated within the Department of Sciences and Humanities, we bring together teaching, research, and language support in a uniquely design-centric academic environment.
            </p>
            <p className="text-gray-600">
              Whether you are an undergraduate student seeking to strengthen your communication and academic writing skills, a researcher exploring literature/culture/ language & pedagogy, or a prospective doctoral candidate, we welcome you.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/library-racks.png"
              alt="Library racks"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Insert About page content immediately after Mission (preserve exact structure) */}

      {/* Hero Banner from About */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-gray-900 mb-2">About Us</h1>
          <p className="text-lg text-gray-600 mb-6 italic">Goals and Objectives</p>

          <p className="text-gray-700 max-w-3xl">
            The Stream of English at IIITDM Kancheepuram fosters critical thinking,
            effective communication, literary engagement, and interdisciplinary
            research within a design-centric educational environment.
          </p>
        </div>
      </section>

      {/* About the Stream - two column on desktop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Academic Foundation</h2>
            <p className="text-gray-600 mb-3">
              The Stream of English is an integral part of the Department of
              Sciences and Humanities at IIITDM Kancheepuram. The institute is
              recognised as an Institute of National Importance and follows a
              philosophy of "Learning by Doing" that emphasises hands-on,
              project-led approaches to teaching and scholarship.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Teaching and Learning</h3>
            <p className="text-gray-600 mb-3">
              We offer English communication courses, technical and academic
              writing modules, and a range of electives that explore language,
              literature, and society. Our curriculum is designed to support
              disciplinary students as well as those pursuing advanced study in
              the humanities. The Writing Centre provides dedicated support for
              assignment drafting, thesis preparation, and publication mentoring.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Research and Scholarship</h3>
            <p className="text-gray-600">
              Faculty in the Stream of English pursue research across literary
              studies, applied linguistics, cultural studies, and interdisciplinary
              areas such as medical humanities and digital humanities. Our
              members publish in journals, present at conferences, and lead
              externally funded projects. The PhD programme supports doctoral
              enquiry with regular supervision, seminars, and an active research culture.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative h-[260px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Students discussing"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">The Writing Centre</h4>
              <p className="text-gray-600">
                The Writing Centre supports students, research scholars, and
                faculty with one-on-one consultations, workshops, and resources
                aimed at improving academic and professional communication.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Programs & Degrees</h4>
              <p className="text-gray-600">
                We offer a range of programmes from undergraduate courses to a
                doctoral programme. Emphasis is placed on rigorous coursework,
                mentorship, and opportunities to present and publish research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas - card grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Key Focus Areas</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              { title: "Literature & Philosophy", icon: BookOpen, colorBg: "bg-amber-100", colorText: "text-amber-700" },
              { title: "Academic & Technical Writing", icon: FileText, colorBg: "bg-sky-100", colorText: "text-sky-700" },
              { title: "Applied Linguistics", icon: Search, colorBg: "bg-emerald-100", colorText: "text-emerald-700" },
              { title: "Multilingualism & Translanguaging", icon: Globe, colorBg: "bg-indigo-100", colorText: "text-indigo-700" },
              { title: "Medical Humanities", icon: Layers, colorBg: "bg-rose-100", colorText: "text-rose-700" },
              { title: "Narrative Theory", icon: PenTool, colorBg: "bg-violet-100", colorText: "text-violet-700" },
              { title: "Cultural Studies", icon: Globe, colorBg: "bg-yellow-100", colorText: "text-yellow-700" },
              { title: "Language Pedagogy", icon: Users, colorBg: "bg-cyan-100", colorText: "text-cyan-700" },
              { title: "Interdisciplinary Research", icon: Layers, colorBg: "bg-lime-100", colorText: "text-lime-700" },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${c.colorBg} ${c.colorText}`}>
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                    <p className="text-base text-gray-600 mt-2">Learnings, projects, and research in this area.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission (from About) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-600">
              To cultivate critical, creative, and multilingual scholars who
              contribute to knowledge, pedagogy, and public life through
              rigorous research, ethical engagement, and effective communication.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-600">
              To provide high-quality language education, promote interdisciplinary
              research, support academic writing, and prepare students for
              professional and civic engagement in global contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Goals & Objectives - concise and matched pointers */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Goals",
                items: [
                  "Critical reading & cultural sensitivity",
                  "Effective spoken and written English",
                  "Inclusive multilingual learning",
                  "Research across literature, linguistics & interdisciplinarity",
                ],
              },
              {
                title: "Objectives",
                items: [
                  "Run seminars, workshops and public events",
                  "Deliver curriculum-aligned courses and mentoring",
                  "Sustain and grow the Writing Centre",
                  "Engage through research, collaborations and outreach",
                ],
              },
            ].map((col, ci) => (
              <div key={ci}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{col.title}</h3>
                <div className="space-y-3">
                  {col.items.map((it, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                          <Check className="size-4" />
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">{it}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
