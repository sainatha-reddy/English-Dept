import { Mail, Globe, BookOpen, ChevronDown, Phone } from "lucide-react";
import { useState } from "react";

// Shared Person interface used across all categories (faculty, staff, doctoral researchers, researchers)
// - name, email, image, and bio are common
// - title and position are included for display consistency
// - research is an optional array to support staff who may not have research entries
// - website is optional
interface Person {
  name: string;
  title?: string;
  position?: string;
  email: string;
  image: string;
  research?: string[]; // research interests or topics
  bio: string;
  website?: string;

  // Faculty-specific
  room?: string;
  phone?: string;
  portfolio?: string;
  education?: string[];
  previousPositions?: string[];

  // Staff-specific
  responsibilities?: string[];

  // Doctoral-specific
  researchTopic?: string;
  supervisor?: string;
  yearEnrolment?: string | number;
  status?: string;

  // Researchers-specific
  role?: string;
  projectDuration?: string;
  project?: string;
}

// Tab keys for the page
type TabKey = "faculty" | "staff" | "doctoral" | "researchers";

export default function Faculty() {
  const [activeTab, setActiveTab] = useState<TabKey>("faculty");

  // Faculty members (kept from original, converted to Person)
  const facultyMembers: Person[] = [
    {
      name: "Dr. Parvathy Das",
      title: "Assistant Professor of English",
      position: "Stream of English, Department of Sciences and Humanities",
      email: "parvathydas@iiitdm.ac.in",
      image: "/images/DR-Parvathy-Das.png",
      phone: "",
      room: "119-C, Laboratory Block",
      portfolio: "",
      bio:
        "Dr. Parvathy Das is an Assistant Professor of English in the Stream of English, Department of Sciences and Humanities, IIITDM Kancheepuram. She completed her PhD in English from the National Institute of Technology, Tiruchirappalli, and holds postgraduate and undergraduate degrees in English Language and Literature from Mahatma Gandhi University, Kerala. Prior to joining IIITDM Kancheepuram, she served as an Assistant Professor at VIT Vellore and as a Guest Lecturer at St. Berchmans College and Assumption College, Changanacherry, Kerala.",
      research: ["Life Writing", "Narrative Theory", "Theories of Self and Identity", "Literature, Science and Philosophy"],
      education: [
        "PhD in English — National Institute of Technology, Tiruchirappalli",
        "MA in English Language and Literature — St. Berchmans College, Mahatma Gandhi University, Kottayam (2013)",
        "BA in English Language and Literature — Assumption College, Mahatma Gandhi University, Kottayam (2011)",
      ],
      previousPositions: ["Assistant Professor — VIT Vellore", "Guest Lecturer — St. Berchmans College, Changanacherry", "Guest Lecturer — Assumption College, Changanacherry"],
    },
    {
      name: "Dr. Kandharaja K M C",
      title: "Assistant Professor of English",
      position: "Stream of English, Department of Sciences and Humanities",
      email: "kandharaja@iiitdm.ac.in",
      image: "/images/Dr-Kandharaja-K-M-C.png",
      phone: "044-2747-6126",
      room: "119-A",
      portfolio: "https://researchgate.net/profile/KKandharaja",
      bio:
        "Dr. Kandharaja K M C is an Assistant Professor of English in the Stream of English, Department of Sciences and Humanities, IIITDM Kancheepuram. He holds a PhD in English Language Studies from the University of Hyderabad (2023), an MA in TESL from The English and Foreign Languages University (EFLU), Hyderabad, and a BA in English Literature from The American College, Madurai Kamaraj University.",
      research: [
        "Classroom Discourse",
        "Teacher Education",
        "Material Development and Evaluation",
        "Translanguaging Pedagogy",
      ],
      education: [
        "PhD in English Language Studies — University of Hyderabad (2023)",
        "MA in TESL — The English and Foreign Languages University (EFLU), Hyderabad (2011)",
        "BA in English Literature — The American College, Madurai Kamaraj University (2009)",
      ],
      previousPositions: [
        "Guest Faculty — University of Hyderabad, Centre for English Language Studies",
        "Guest Faculty — IIIT Hyderabad (MSIT)",
        "Invited Faculty — Central University of Andhra Pradesh",
      ],
    },
    {
      name: "Dr. Arya S",
      title: "Assistant Professor of English",
      position: "Stream of English, Department of Sciences and Humanities",
      email: "arya.s@iiitdm.ac.in",
      image: "/images/Dr-Arya-S.png",
      phone: "",
      room: "119-K",
      bio:
        "Dr. Arya S is an Assistant Professor of English in the Stream of English, Department of Sciences and Humanities, IIITDM Kancheepuram. She completed her PhD in English at the National Institute of Technology, Tiruchirappalli (2020–2024), and holds an MA in English Language and Literature from University College, Thiruvananthapuram, and a BA from Government College for Women, Thiruvananthapuram.",
      research: ["Graphic Medicine", "Medical Humanities", "Visual Narrative", "Comics Studies"],
      education: [
        "PhD in English — National Institute of Technology, Tiruchirappalli (2020–2024)",
        "MA in English Language and Literature — University College, Thiruvananthapuram, University of Kerala (2013–2015)",
      ],
      previousPositions: [
        "Assistant Professor — CHRIST (Deemed to be University), Bengaluru",
        "Guest Lecturer — Government College, Ambalapuzha, Kerala",
      ],
    },
  ];
  // Staff members (realistic placeholders)
  const staffMembers: Person[] = [
    {
      name: "Zareth Vane",
      title: "To be updated",
      position: "Writing Centre Coordinator",
      email: "writingcentre@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      bio: "Appointment scheduling, resource management, student liaison.",
      responsibilities: ["Appointment scheduling", "Resource management", "Student liaison"],
    },
    {
      name: "Lysandra Thorne",
      title: "To be updated",
      position: "Lab Technician",
      email: "",
      image: "/images/placeholder-avatar.svg",
      bio: "Laboratory maintenance, scheduling, technical support.",
      responsibilities: ["Laboratory maintenance", "Scheduling", "Technical support"],
    },
  ];

  // Doctoral researchers now use the same Person/profile-card design (replaces old PhD list)
  const doctoralResearchers: Person[] = [
    {
      name: "Priya Nair",
      title: "Doctoral Researcher (3rd Year)",
      email: "p.nair@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      researchTopic: "Sociolinguistic Patterns in Multilingual Classrooms",
      supervisor: "Dr. Kandharaja K M C",
      yearEnrolment: 2022,
      status: "Ongoing",
      bio: "Investigating translanguaging practices and teacher-student interaction in low-resource educational settings.",
    },
    {
      name: "Karan Singh",
      title: "Doctoral Researcher (4th Year)",
      email: "k.singh@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      researchTopic: "Narrative Strategies in Contemporary South Asian Fiction",
      supervisor: "Dr. Parvathy Das",
      yearEnrolment: 2021,
      status: "Submitted",
      bio: "Analyzes narrative form and memory in contemporary South Asian novels and short fiction.",
    },
    {
      name: "Maya Thomas",
      title: "Doctoral Researcher (2nd Year)",
      email: "m.thomas@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      researchTopic: "Graphic Narratives and Mental Health Representation",
      supervisor: "Dr. Arya S",
      yearEnrolment: 2023,
      status: "Ongoing",
      bio: "Explores graphic medicine and visual storytelling in representations of mental health.",
    },
    {
      name: "Li Wei",
      title: "Doctoral Researcher (5th Year)",
      email: "l.wei@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      researchTopic: "Digital Editions and Early Modern Manuscripts",
      supervisor: "Dr. Robert Thompson",
      yearEnrolment: 2019,
      status: "Ongoing",
      bio: "Combines digital humanities methods with manuscript studies to create interoperable editions.",
    },
    {
      name: "Ahmed Khan",
      title: "Doctoral Researcher (1st Year)",
      email: "a.khan@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      researchTopic: "Climate Fiction and Ecocritical Narratives",
      supervisor: "Dr. Elizabeth Morrison",
      yearEnrolment: 2024,
      status: "Ongoing",
      bio: "Examines representations of climate change in contemporary fiction and speculative narratives.",
    },
  ];

  // Researchers (postdocs, visiting scholars, research staff)
  const researchers: Person[] = [
    {
      name: "Dr. Nina Patel",
      title: "Postdoctoral Fellow",
      role: "Postdoctoral Fellow",
      project: "Digital Archives and Text Mining",
      projectDuration: "Jan 2024 — Dec 2026",
      email: "n.patel@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      bio: "Working on computational approaches to literary archives and text analysis.",
    },
    {
      name: "Rahul Menon",
      title: "Project Associate",
      role: "Project Associate",
      project: "Translanguaging Classroom Materials",
      projectDuration: "Mar 2023 — Present",
      email: "r.menon@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      bio: "Supports classroom-based action research and materials development.",
    },
    {
      name: "Dr. Sofia Alvarez",
      title: "Research Scientist",
      role: "Research Scientist",
      project: "Medical Humanities and Graphic Narratives",
      projectDuration: "Aug 2022 — Jul 2025",
      email: "s.alvarez@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      bio: "Explores graphic medicine and visual narrative methods in healthcare research.",
    },
    {
      name: "Ananya Rao",
      title: "Research Assistant",
      role: "Research Assistant",
      project: "Ecocritical Responses to Climate Fiction",
      projectDuration: "Sep 2024 — Aug 2025",
      email: "a.rao@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      bio: "Contributes to fieldwork and textual analysis for ecocritical projects.",
    },
    {
      name: "Markus Brenner",
      title: "Visiting Researcher",
      role: "Visiting Researcher",
      project: "Translation Practices in South Asia",
      projectDuration: "Jun 2025 — Nov 2025",
      email: "m.brenner@iiitdm.ac.in",
      image: "/images/placeholder-avatar.svg",
      bio: "Investigates contemporary translation methods and cross-cultural exchange.",
    },
  ];

  // Map tabs to their corresponding data arrays to simplify rendering logic
  const dataMap: Record<TabKey, Person[]> = {
    faculty: facultyMembers,
    staff: staffMembers,
    doctoral: doctoralResearchers,
    researchers,
  };

  // Faculty card: expandable with smooth animation and chevron rotation
  function FacultyCard({ person }: { person: Person }) {
    const [open, setOpen] = useState(false);
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex gap-6">
          <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover object-top flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <h3 className="text-xl text-gray-900 mb-1">{person.name}</h3>
                {person.title && <p className="text-sm text-gray-600 mb-1">{person.title}</p>}
                {person.position && <p className="text-sm text-gray-500 mb-2">{person.position}</p>}
                <div className="text-sm text-gray-600 space-y-1">
                  {person.room && <div>Room: <span className="text-gray-700">{person.room}</span></div>}
                  {person.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="size-4 text-gray-500" />
                      <a className="text-gray-700 hover:underline" href={`mailto:${person.email}`}>{person.email}</a>
                    </div>
                  )}
                  {person.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="size-4 text-gray-500" />
                      <a className="text-gray-700 hover:underline" href={`tel:${person.phone}`}>{person.phone}</a>
                    </div>
                  )}
                  {person.portfolio && (
                    <div className="flex items-center gap-2">
                      <Globe className="size-4 text-gray-500" />
                      <a className="text-gray-700 hover:underline" href={person.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
                    </div>
                  )}
                </div>
              </div>

              <button
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className="ml-4 p-2 rounded-md text-gray-500 hover:text-gray-700 transition-transform flex items-center"
                title={open ? "Collapse details" : "More details"}
              >
                <ChevronDown className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable area - animate via max-height */}
        <div className={`overflow-hidden transition-[max-height] duration-300 mt-4 ${open ? "max-h-[1000px]" : "max-h-0"}`}>
          <div className="pt-4 border-t border-gray-100">
            {/* About */}
            <h4 className="text-sm font-semibold text-gray-800 mb-2">About</h4>
            <p className="text-sm text-gray-600 mb-4">{person.bio}</p>

            {/* Research Interests */}
            {person.research && person.research.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {person.research.map((r, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{r}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {person.education && person.education.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Education</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {person.education.map((e, i) => (<li key={i}>{e}</li>))}
                </ul>
              </div>
            )}

            {/* Previous Positions */}
            {person.previousPositions && person.previousPositions.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Previous Positions</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {person.previousPositions.map((p, i) => (<li key={i}>{p}</li>))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Staff card: compact, no expand/collapse
  function StaffCard({ person }: { person: Person }) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex gap-4 items-center">
          <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg text-gray-900 font-semibold">{person.name}</h3>
            {/* Show a single designation line (position preferred, fallback to title) */}
            {(person.position || person.title) && (
              <p className="text-sm text-gray-600">{person.position ?? person.title}</p>
            )}
            {person.responsibilities && (
              <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-0">
                {person.responsibilities.map((r, i) => (<li key={i}>{r}</li>))}
              </ul>
            )}
            {person.email && (
              <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
                <Mail className="size-4 text-gray-500" />
                <a className="hover:underline text-gray-700" href={`mailto:${person.email}`}>{person.email}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Doctoral researcher card: compact academic style
  function DoctoralCard({ person }: { person: Person }) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex gap-4">
          <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg text-gray-900">{person.name}</h3>
            {person.researchTopic && <p className="text-sm text-gray-600">{person.researchTopic}</p>}
            <div className="text-sm text-gray-600 mt-2 space-y-1">
              {person.supervisor && <div>Supervisor: <span className="text-gray-700">{person.supervisor}</span></div>}
              {person.yearEnrolment && <div>Year of Enrolment: <span className="text-gray-700">{person.yearEnrolment}</span></div>}
              {person.status && <div>Status: <span className="text-gray-700">{person.status}</span></div>}
              {person.email && (
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-gray-500" />
                  <a className="text-gray-700 hover:underline" href={`mailto:${person.email}`}>{person.email}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Researcher card: compact professional card
  function ResearcherCard({ person }: { person: Person }) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex gap-4">
          <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg text-gray-900">{person.name}</h3>
            {person.role && <p className="text-sm text-gray-600">{person.role}</p>}
            {person.project && <p className="text-sm text-gray-600 mt-1">Project: <span className="text-gray-700">{person.project}</span></p>}
            {person.projectDuration && <p className="text-sm text-gray-500 mt-1">Duration: {person.projectDuration}</p>}
            {person.email && (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <Mail className="size-4 text-gray-500" />
                <a className="hover:underline text-gray-700" href={`mailto:${person.email}`}>{person.email}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header - updated to reflect the People directory */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-gray-900 mb-4">People</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Meet the people who make up our department: faculty, staff, doctoral researchers, and researchers. Explore profiles to learn about their roles, research interests, and contact information.
          </p>
        </div>
      </section>

      {/* Tabs (sticky) - extended to four tabs but preserving original styling and behaviour */}
      <div className="border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("faculty")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "faculty"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Faculty
            </button>
            <button
              onClick={() => setActiveTab("staff")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "staff"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Staff
            </button>
            <button
              onClick={() => setActiveTab("doctoral")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "doctoral"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Doctoral Researchers
            </button>
            <button
              onClick={() => setActiveTab("researchers")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "researchers"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Researchers
            </button>
          </div>
        </div>
      </div>

      {/* Content: render the active tab's people using tab-specific components and layouts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "faculty" && (
          <>
            <div className="grid md:grid-cols-2 gap-8">
              {dataMap.faculty.map((person, idx) => (
                <FacultyCard key={idx} person={person} />
              ))}
            </div>
          </>
        )}

        {activeTab === "staff" && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {dataMap.staff.map((person, idx) => (
                <StaffCard key={idx} person={person} />
              ))}
            </div>
          </>
        )}

        {activeTab === "doctoral" && (
          <>
            <div className="space-y-6 mb-8">
              <div>
                
                <p className="text-gray-600 mt-2">
                  The Stream of English offers a PhD programme attracting scholars across applied linguistics, literary studies, and related fields. Doctoral researchers are mentored by faculty and participate actively in seminars, publications, and research projects.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900">About the PhD Programme</h2>
                <p className="text-gray-600 mt-2">
                  The PhD programme in English at IIITDM Kancheepuram supports original research in applied linguistics, language pedagogy, literary and cultural studies, and interdisciplinary areas at the intersection of language, society, and culture. Scholars are supported through regular supervision, participation in research seminars, and access to the institute's academic and research infrastructure.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dataMap.doctoral.map((person, idx) => (
                <DoctoralCard key={idx} person={person} />
              ))}
            </div>
          </>
        )}

        {activeTab === "researchers" && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {dataMap.researchers.map((person, idx) => (
                <ResearcherCard key={idx} person={person} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
