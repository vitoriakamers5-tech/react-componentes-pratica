import Titulo from "./components/Titulo";
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";

function App() {

  return (
    <>
      <Titulo />
      <Aluno 
      nome="Vitória" turma="Desenvolvimento de Sistemas" 
      />

      <Aluno nome="Hadassa" turma="Desenvolvimento de Sistemas"
      />

      <Aluno nome="Abraão" turma="Desenvolvimento de Sistemas"
      />

    </>
  )
}

export default App
