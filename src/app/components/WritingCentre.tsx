import { BookOpen, Users, FileText, Calendar, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

export default function WritingCentre() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[460px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Writing and study"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white mb-4">Writing Centre</h1>
            <p className="text-lg text-gray-200">Write Better. Think Clearly. Communicate Confidently.</p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Section 1: About */}
        <section>
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="size-5 text-gray-700" />
                <CardTitle className="text-2xl font-semibold text-gray-900">About the Writing Centre</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                The Writing Centre is a dedicated language support service offered by the Stream of English, IIITDM
                Kancheepuram. It is designed to support students, research scholars, and faculty in developing their
                academic and professional writing skills. The Centre operates on the principle that writing is a
                process, and that every writer regardless of language background or level of experience can
                benefit from structured support and feedback.
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Who Can Use */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Who Can Use the Writing Centre</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700">
                  <Users className="size-5" />
                </div>
                <p className="text-gray-700">Undergraduate students working on reports, essays, and project documentation</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700">
                  <BookOpen className="size-5" />
                </div>
                <p className="text-gray-700">Postgraduate students writing dissertations, theses, and research papers</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700">
                  <FileText className="size-5" />
                </div>
                <p className="text-gray-700">Doctoral researchers at all stages — from literature reviews to thesis submission</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 text-violet-700">
                  <Calendar className="size-5" />
                </div>
                <p className="text-gray-700">Faculty and staff seeking assistance with manuscript preparation and grant writing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Services Offered */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Services Offered</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700">
                  <Clock className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">One-on-one Consultations</h3>
              </div>
              <p className="text-gray-600 text-base">One-on-one writing consultations (by appointment)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700">
                  <Users className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Workshops</h3>
              </div>
              <p className="text-gray-600 text-base">Group workshops on academic writing, citation, and research communication</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700">
                  <FileText className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Feedback on Drafts</h3>
              </div>
              <p className="text-gray-600 text-base">Feedback on draft documents — focusing on structure, clarity, and coherence, not proofreading</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 text-violet-700">
                  <BookOpen className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Thesis Support</h3>
              </div>
              <p className="text-gray-600 text-base">Thesis and dissertation writing support</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700">
                  <Users className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Multilingual Support</h3>
              </div>
              <p className="text-gray-600 text-base">Support for multilingual and non-native English speakers in academic and professional contexts</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="flex items-start gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700">
                  <Mail className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              </div>
              <p className="text-gray-600 text-base">Resources and handouts on academic writing, grammar, and citation styles (APA, MLA, Chicago)</p>
            </div>
          </div>
        </section>

        {/* Section 4: How to Book */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How to Book an Appointment</h2>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700">
              Appointments can be made by emailing the Writing Centre coordinator at writingcentre@iiitdm.ac.in or visiting the Centre during open hours.
            </p>

            <p className="text-gray-700 mt-3">Walk-in consultations are available subject to availability.</p>
          </div>
        </section>

        {/* Section 5: Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700">
                  <Clock className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Operating Hours</h3>
              </div>
              <p className="text-gray-700">Monday to Friday</p>
              <p className="text-gray-700">9:00 AM – 5:00 PM</p>
              <p className="text-gray-600 mt-2">(By appointment)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700">
                  <Mail className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-700">
                <a href="mailto:writingcentre@iiitdm.ac.in" className="text-amber-600 hover:underline font-medium">writingcentre@iiitdm.ac.in</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
