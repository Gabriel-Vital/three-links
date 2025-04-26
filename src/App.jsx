import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Moon,
} from "phosphor-react";
import Button from "./components/Button";

function App() {
  return (
    <div className="w-full h-screen">
      <header className="w-full flex justify-end p-5">
        <button className="cursor-pointer hover:bg-gray-300 ease-in-out transition">
          <Moon size={20} />
        </button>
      </header>
      <main className="flex justify-center items-center h-full w-full">
        <section className="border min-w-[400px] min-h-[450px] rounded-lg border-gray-400 p-6 w-fit flex flex-col justify-center items-center gap-4">
          <img
            className="border-3 border-gray-400 w-28 rounded-full"
            src="https://avatars.githubusercontent.com/u/177435697?v=4"
            alt="Foto de perfil do usuário"
          />
          <h1 className="font-bold text-2xl">Gabriel Vital</h1>
          <p className="text-sm text-slate-500">Desenvolverdor FullStack</p>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <Button>
              <InstagramLogo size={20} /> Instagram
            </Button>
            <Button>
              <LinkedinLogo size={20} />
              Linkedin
            </Button>
            <Button>
              <FacebookLogo size={20} /> Facebook
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
