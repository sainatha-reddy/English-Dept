"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import TrainingRequestForm, { trainingAreasList } from "./TrainingRequestForm";
import { BookOpen, Headphones, Mic, Users, Globe, FileText, ChevronDown } from "lucide-react";

export default function OtherServices() {
  const servicesRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const transitioningRef = useRef(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Other Services | Stream of English | IIITDM Kancheepuram";
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", "Explore language laboratory facilities, communication skills training, research seminars, outreach initiatives, editorial support, and customised training programmes offered by the Stream of English at IIITDM Kancheepuram.");
    }
  }, []);

  function scrollToServices() {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToForm() {
    // Expand then scroll
    if (!expanded) {
      toggleExpand(true);
    }
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => ctaRef.current?.focus(), 300);
    }, 310);
  }

  function toggleExpand(next?: boolean) {
    const willExpand = typeof next === "boolean" ? next : !expanded;
    const panel = panelRef.current;
    if (!panel) {
      setExpanded(willExpand);
      return;
    }

    // Measure
    const content = panel.querySelector<HTMLDivElement>("[data-panel-content]");
    if (!content) {
      setExpanded(willExpand);
      return;
    }

    const start = panel.getBoundingClientRect().height;
    const target = willExpand ? content.scrollHeight : 0;

    // Apply start
    panel.style.maxHeight = `${start}px`;
    panel.style.opacity = "1";
    // Force reflow
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    panel.offsetHeight;

    panel.style.transition = "max-height 350ms ease, opacity 300ms ease";
    panel.style.maxHeight = `${target}px`;
    panel.style.opacity = willExpand ? "1" : "0";
    transitioningRef.current = true;

    const onEnd = () => {
      panel.style.transition = "";
      panel.style.maxHeight = willExpand ? "none" : "0px";
      panel.style.opacity = willExpand ? "1" : "0";
      transitioningRef.current = false;
      panel.removeEventListener("transitionend", onEnd);
      setExpanded(willExpand);
    };

    panel.addEventListener("transitionend", onEnd);
  }

  return (
    <div className="w-full">
      <section className="relative h-[420px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Academic background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white mb-4">Other Services</h1>
            <p className="text-lg text-gray-200 mb-4">Supporting Communication, Research, Professional Development, and Community Engagement</p>
            <p className="text-gray-200 mb-6">The Stream of English at IIITDM Kancheepuram offers a range of academic, professional, and outreach services designed to support students, researchers, educational institutions, and industry partners.</p>

            {/* Hero CTAs removed as requested */}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section ref={servicesRef}>
          <h2 className="text-3xl text-gray-900 mb-6">Services Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700">
                    <Headphones className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Language Laboratory</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The Stream of English supports a Language Laboratory equipped with listening, speaking, and pronunciation resources. Students can access the lab for self-directed practice, pronunciation development, and listening comprehension activities during designated open hours.</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700">
                    <Mic className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Communication Skills Training</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Workshops and short courses in presentation skills, interview preparation, group discussion techniques, and professional communication are offered periodically to complement academic and placement preparation.</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700">
                    <Users className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Research Seminars and Colloquium</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Regular research seminars, invited talks, and colloquia featuring scholars from India and abroad provide opportunities for intellectual exchange in linguistics, language education, literary studies, and communication.</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 text-violet-700">
                    <Globe className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Outreach and School Engagement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Faculty and students collaborate with schools and educational organizations to promote quality English language education and support multilingual learners. Contact: <a className="text-amber-600 hover:underline" href="mailto:english.sh@iiitdm.ac.in">english.sh@iiitdm.ac.in</a></p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700">
                    <FileText className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Editorial and Publication Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Faculty provide informal consultation for research manuscripts, conference papers, and grant proposals intended for national and international publication venues.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gray-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl text-gray-900">Request a Training Programme</h2>
              <p className="text-gray-700">Partner with us. We bring language expertise to your workplace.</p>
              <p className="text-gray-600 mt-3">The Stream of English offers customised training programmes for corporate organisations, educational institutions, government bodies, and other professional settings. Programmes are delivered by experienced faculty with expertise in communication, academic writing, English for specific purposes, and language pedagogy.</p>
            </div>

            {/* Training CTA card removed */}
          </div>
        </section>

        <section>
          <h3 className="text-xl text-gray-900 mb-4">Training Areas We Offer</h3>
          <div className="flex flex-wrap gap-3">
            {trainingAreasList.map((area) => (
              <div key={area} className="px-4 py-2 rounded-full border bg-white text-sm text-gray-800 hover:shadow-md transition-shadow">{area}</div>
            ))}
          </div>
        </section>

        <section ref={formRef}>
          <h3 className="text-xl text-gray-900 mb-4">Ready to discuss your requirements?</h3>

          <div className="mb-4">
            <Button
              variant="default"
              onClick={() => toggleExpand()}
              className="w-full md:w-auto inline-flex items-center gap-2"
              ref={ctaRef as any}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Hide Form" : "Request Training Programme"}</span>
              <ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : "rotate-0"}`} />
            </Button>
          </div>

          <div className="overflow-hidden transition-all" ref={panelRef} style={{ maxHeight: 0, opacity: 0 }}>
            <div data-panel-content>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                {!showSuccess ? (
                  <TrainingRequestForm
                    key={formKey}
                    onClose={() => {
                      toggleExpand(false);
                    }}
                    onSuccess={(msg) => {
                      setShowSuccess(true);
                      setSubmittedMessage(msg);
                    }}
                  />
                ) : (
                  <div className="p-6 rounded-xl border bg-emerald-50">
                    <h4 className="text-lg font-semibold text-emerald-800">✓ Training Request Submitted</h4>
                    <p className="text-gray-700 mt-2">Thank you for your interest in our training programmes. A member of our team will review your request and get back to you within 3 working days.</p>
                    <p className="text-gray-700 mt-2">For urgent enquiries: <a href="mailto:training.english@iiitdm.ac.in" className="text-amber-600 hover:underline">training.english@iiitdm.ac.in</a></p>
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setShowSuccess(false);
                          setFormKey((k) => k + 1);
                          // reopen form
                          toggleExpand(true);
                        }}
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl text-gray-900 mb-4">Training Enquiries</h3>
          <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-md">
            <p className="text-sm text-gray-700">Email: <a href="mailto:training.english@iiitdm.ac.in" className="text-amber-600 hover:underline">training.english@iiitdm.ac.in</a></p>
            <p className="text-sm text-gray-700 mt-2">Phone: <a href="tel:+914427476300" className="text-amber-600 hover:underline">+91-44-2747 6300</a></p>
          </div>
        </section>

        <section>
          <h3 className="text-xl text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="p-4 border rounded-xl"><summary className="font-medium">Who can request a training programme?</summary><p className="mt-2 text-gray-600">Members of industry, educational institutions, government bodies, and NGOs may request programmes.</p></details>
            <details className="p-4 border rounded-xl"><summary className="font-medium">What delivery modes are available?</summary><p className="mt-2 text-gray-600">In-person, online, and hybrid modes are available.</p></details>
            <details className="p-4 border rounded-xl"><summary className="font-medium">Can programmes be customised?</summary><p className="mt-2 text-gray-600">Yes — programmes are tailored to organisational needs.</p></details>
            <details className="p-4 border rounded-xl"><summary className="font-medium">How long are training programmes?</summary><p className="mt-2 text-gray-600">We offer half-day, full-day, multi-day, and week-long formats.</p></details>
            <details className="p-4 border rounded-xl"><summary className="font-medium">How soon will I receive a response?</summary><p className="mt-2 text-gray-600">A member of our team will respond within 3 working days.</p></details>
          </div>
        </section>

        {submittedMessage && (
          <div className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-xl shadow-lg px-6 py-4 max-w-sm">
            <div className="text-sm text-gray-800">{submittedMessage}</div>
            <div className="mt-3 text-right"><button className="text-amber-600" onClick={() => setSubmittedMessage(null)}>Close</button></div>
          </div>
        )}
      </main>
    </div>
  );
}
