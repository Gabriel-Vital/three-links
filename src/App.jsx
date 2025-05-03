import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Moon,
  Sun,
} from "phosphor-react";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  function getInitialDarkMode() {
    const darkModeLocalStorage = localStorage.getItem("darkMode");
    return darkModeLocalStorage === "true" ? true : false;
  }

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  function redirectPage(url) {
    window.open(url, "_black");
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);

    // set in local storage
    localStorage.setItem("darkMode", !darkMode);
  }

  return (
    <div className={`w-full h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <header
        className={`w-full flex justify-end px-5 py-2 text-end ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <Button variant={"secondary"} onClick={toggleDarkMode}>
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </header>
      <main className="flex justify-center items-center h-[90%] w-full">
        <section
          className={`border min-w-[450px] min-h-[450px] rounded-lg border-gray-400 p-6 w-fit flex flex-col justify-center items-center gap-4 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          <img
            className="border-3 border-gray-400 w-28 rounded-full"
            src="https://avatars.githubusercontent.com/u/177435697?v=4"
            alt="Foto de perfil do usuário"
          />
          <h1 className="font-bold text-2xl">Gabriel Vital</h1>
          <p className="text-sm spa text-slate-500">Desenvolvedor FullStack</p>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <Button
              variant={"primary"}
              onClick={() => redirectPage("https://github.com/Gabriel-Vital")}
            >
              <InstagramLogo size={20} /> Instagram
            </Button>
            <Button
              variant={"primary"}
              onClick={() => redirectPage("https://digitalcollege.com.br/")}
            >
              <LinkedinLogo size={20} />
              Linkedin
            </Button>
            <Button
              variant={"primary"}
              onClick={() => redirectPage("https://www.google.com.br")}
            >
              <FacebookLogo size={20} /> Facebook
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
