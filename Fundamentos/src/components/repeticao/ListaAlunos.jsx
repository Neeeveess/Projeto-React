import React from "react";
import Alunos from "../../data/Alunos";

export default (props) => {
  const alunosJSX = Alunos.map((Aluno) => {
    return (
      <li key={Aluno.id}>
        {Aluno.id}) {Aluno.nome} {'->'} {Aluno.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{alunosJSX}</ul>
    </div>
  );
};
