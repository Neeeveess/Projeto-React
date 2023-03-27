import React from "react";
import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

      <Card titulo="#13 Mega" color="#8BAD39">
        <Mega/>
      </Card>

      <Card titulo="#12 Contador" color="#424242">
        <Contador numeroInicial={10}/>
      </Card>

      <Card titulo="#11 Componente Controlado (Input)" color="#E45F56">
        <Input/>
      </Card>

      <Card titulo="#10 Comunicação Indireta" color="#8BAD39">
        <IndiretaPai/>
      </Card>

      <Card titulo="#9 Comunicação Direta" color="#59323C">
        <DiretaPai/>
      </Card>

      <Card titulo="#8 Renderização Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
        <UsuarioInfo usuario={{email: 'Fernando'}}></UsuarioInfo>
        <UsuarioInfo></UsuarioInfo>
      </Card>

      <Card titulo="#7 Repetição Produtos" color="#CD5C5C">
        <ListaProdutos></ListaProdutos>
      </Card>

      <Card titulo="#6 Repetição Alunos" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#5 Familia" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Joao" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#4 Aleatorio" color="#FA6900">
        <Aleatorio min={40} max={51} />
      </Card>

      <Card titulo="#3 Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#2 Com Parametro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno"
          aluno="João"
          nota={10.0}
        ></ComParametro>
      </Card>
      <Card titulo="#1 Primeiro" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
