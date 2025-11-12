import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Animation Starter" },
    { name: "description", content: "React starter with GSAP & Framer Motion" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          Webberstop Home page
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow">
            
          </div>
          
          <div className="bg-white rounded-lg shadow">
           
          </div>
        </div>
      </main>
    </div>
  );
}
