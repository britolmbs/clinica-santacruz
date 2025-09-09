import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { CalendarClock, Heart, Hospital, SquareActivity, Zap } from "lucide-react";
import { signIn } from "@/lib/auth";


export default function Home() {

  async function handleSubmit() {
    "use server"
    await signIn('Credentials', { redirectTo: '/dashboard' })
  }
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
            <div className="text-center space-y-6">
              <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium md-2">
                Sistema de Agendamento de Consulta
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 to-indigo-800">Rapido e Facil de forma Descoplicada</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Verifique o Agendamento e Dashboard em uma pagina personalizada e elegante, sem complicações</p>            
            <div className="pt-4">
              <form action={handleSubmit}>
            <Button type="submit"
            size='lg'
            className="bg-indigo-950 hover:bg-indigo-800 text-white font-medium px-8 h-12"
            >
              Acessar Agora
              <CalendarClock className="ml-12 h-4 w-4"/>
              </Button>
              </form>
            </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
              icon={<Zap className="h-8 w-8 text-indigo-800" />}
              title=""
              description=""
              />
              <FeatureCard
              icon={<Heart className="h-8 w-8 text-indigo-800" />}
              title=""
              description=""
              />
              <FeatureCard
              icon={<Hospital className="h-8 w-8 text-indigo-800" />}
              title=""
              description=""
              />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
