import { SquareActivity } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="container mx-auto py-6 px-4">
        <div className="fle items-center">
          <div className="flex items-center text-indigo-950 font-bold text-xl">
            <SquareActivity  className='h-6 w-6 mr-2' />
            <span>Clinica Medica Santa Cruz</span>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            
          </div>
        </div>
      </main>
    </div>
  );
}
