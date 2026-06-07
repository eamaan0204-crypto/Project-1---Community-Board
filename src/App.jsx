import ResourceCard from "./components/ResourceCard";

const resources = [
  {
    id: 1,
    title: "Academic Tutoring Center",
    description: "Get help with coursework and improve your understanding of challenging subjects.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "https://www.khanacademy.org"
  },
  {
    id: 2,
    title: "Library Services",
    description: "Access books, research databases, and quiet study spaces.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 3,
    title: "Academic Advising",
    description: "Meet with advisors to plan your courses and academic goals.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 4,
    title: "Career Services",
    description: "Receive career guidance and job search support.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 5,
    title: "Resume Review",
    description: "Get professional feedback on your resume.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 6,
    title: "Scholarship Assistance",
    description: "Learn about scholarships and application opportunities.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 7,
    title: "Study Skills Workshop",
    description: "Develop better time management and study habits.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 8,
    title: "Mental Health Counseling",
    description: "Access confidential counseling and wellness resources.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 9,
    title: "Internship Fair",
    description: "Connect with employers offering internship opportunities.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 10,
    title: "Financial Aid Support",
    description: "Receive help with FAFSA and financial aid questions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  }
];

function App() {
  return (
    <div className="app">
      <header>
        <h1>Student Success Navigator</h1>
        <p>
        Helping you to uncover free resources, benefits, and opportunities that can support your academic and professional journey.
        </p>
      </header>

      <div className="card-container">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            image={resource.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
