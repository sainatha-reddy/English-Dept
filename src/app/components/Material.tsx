import { Download, FileText, Book, Video, Link as LinkIcon, Search } from "lucide-react";
import { useState } from "react";

interface Resource {
  title: string;
  category: string;
  type: "PDF" | "DOC" | "Video" | "Link";
  description: string;
  date: string;
  course?: string;
}

export default function Material() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const resources: Resource[] = [
    {
      title: "Introduction to Literary Theory",
      category: "Course Materials",
      type: "PDF",
      description: "Comprehensive guide covering major schools of literary criticism including formalism, structuralism, and postmodernism.",
      date: "January 15, 2026",
      course: "ENGL 501",
    },
    {
      title: "Shakespeare's Sonnets: Annotated Edition",
      category: "Course Materials",
      type: "PDF",
      description: "Complete collection of Shakespeare's 154 sonnets with detailed annotations and critical commentary.",
      date: "January 10, 2026",
      course: "ENGL 310",
    },
    {
      title: "Research Methods in English Studies",
      category: "Research Resources",
      type: "PDF",
      description: "Guide to research methodologies, archival research, and digital humanities tools for graduate students.",
      date: "December 20, 2025",
      course: "ENGL 600",
    },
    {
      title: "MLA Citation Guide 2026",
      category: "Writing Resources",
      type: "PDF",
      description: "Updated style guide for MLA format including citations for digital sources and multimedia materials.",
      date: "January 5, 2026",
    },
    {
      title: "Romantic Poetry Lecture Series",
      category: "Course Materials",
      type: "Video",
      description: "Six-part video series on British Romantic poets including Wordsworth, Coleridge, Shelley, and Keats.",
      date: "November 30, 2025",
      course: "ENGL 320",
    },
    {
      title: "Critical Reading Strategies",
      category: "Writing Resources",
      type: "DOC",
      description: "Workshop materials on close reading techniques and textual analysis for undergraduate students.",
      date: "September 15, 2025",
    },
    {
      title: "Digital Archive of Victorian Periodicals",
      category: "Research Resources",
      type: "Link",
      description: "External database providing access to 19th-century British magazines and journals.",
      date: "January 1, 2026",
    },
    {
      title: "Modernist Fiction Reading List",
      category: "Course Materials",
      type: "PDF",
      description: "Comprehensive bibliography for 20th-century modernist literature including novels, short stories, and critical essays.",
      date: "August 25, 2025",
      course: "ENGL 420",
    },
    {
      title: "Academic Writing Workshop Materials",
      category: "Writing Resources",
      type: "PDF",
      description: "Resources for developing thesis statements, paragraph structure, and argumentation in academic essays.",
      date: "September 1, 2025",
    },
    {
      title: "Postcolonial Theory Reader",
      category: "Research Resources",
      type: "PDF",
      description: "Collection of seminal essays by Said, Spivak, Bhabha, and other key postcolonial theorists.",
      date: "October 12, 2025",
      course: "ENGL 550",
    },
    {
      title: "Poetry Analysis Techniques",
      category: "Writing Resources",
      type: "Video",
      description: "Tutorial on analyzing poetic form, meter, imagery, and figurative language.",
      date: "October 5, 2025",
    },
    {
      title: "Medieval Manuscript Images Database",
      category: "Research Resources",
      type: "Link",
      description: "Online repository of digitized medieval manuscripts with transcriptions and translations.",
      date: "July 15, 2025",
    },
    {
      title: "Creative Writing Portfolio Guidelines",
      category: "Course Materials",
      type: "PDF",
      description: "Requirements and best practices for assembling creative writing portfolios for workshop courses.",
      date: "August 20, 2025",
      course: "ENGL 250",
    },
    {
      title: "Dissertation Formatting Guide",
      category: "Research Resources",
      type: "DOC",
      description: "Comprehensive guide to formatting dissertations according to university and departmental requirements.",
      date: "June 1, 2025",
    },
    {
      title: "American Literature Survey Syllabus",
      category: "Course Materials",
      type: "PDF",
      description: "Course syllabus covering American literature from colonial period to contemporary works.",
      date: "August 15, 2025",
      course: "ENGL 210",
    },
  ];

  const categories = ["all", "Course Materials", "Research Resources", "Writing Resources"];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.course?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
      case "DOC":
        return <FileText className="size-5" />;
      case "Video":
        return <Video className="size-5" />;
      case "Link":
        return <LinkIcon className="size-5" />;
      default:
        return <FileText className="size-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-red-50 text-red-700 border-red-200";
      case "DOC":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Video":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Link":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-gray-900 mb-4">Academic Resources & Materials</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Access course materials, research resources, and writing guides for students and faculty.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All Resources" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <Book className="size-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No resources found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg border ${getTypeColor(resource.type)}`}
                  >
                    {getTypeIcon(resource.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg text-gray-900 mb-1">{resource.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {resource.category}
                          </span>
                          {resource.course && (
                            <span className="text-gray-600">{resource.course}</span>
                          )}
                          <span>{resource.date}</span>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm flex-shrink-0">
                        <Download className="size-4" />
                        <span className="hidden sm:inline">
                          {resource.type === "Link" ? "Open" : "Download"}
                        </span>
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Information Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Information</h3>
              <p className="text-sm text-gray-600 mb-4">
                Most course materials are freely available to current students. Some resources may require university login credentials.
              </p>
              <p className="text-sm text-gray-600">
                For access issues, contact the departmental IT support at{" "}
                <a href="mailto:support@university.edu" className="text-gray-900 hover:underline">
                  support@university.edu
                </a>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Submission Guidelines</h3>
              <p className="text-sm text-gray-600 mb-4">
                Faculty members can submit materials for inclusion in the repository by contacting the department administrator.
              </p>
              <p className="text-sm text-gray-600">
                Please ensure all materials comply with copyright regulations and university policies.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Resources</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  → University Library Database
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  → Writing Center Resources
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  → Research Archive
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  → Academic Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
