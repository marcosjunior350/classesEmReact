import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Funcionarios{

  id = "1";
  nome = ""; 
  matricula = "";
  admissao = "";
  horario = "";
  demissao = "";
  salario = "";

  trabalhar(){
    console.log("Colaborador em horário de trabalho")
  }
  receberSalario(){
    console.log("Seu salário está na conta")
  }
}

var funcionario01 = new Funcionarios();
var funcionario02 = new Funcionarios();

funcionario01.nome = "Marcos Junior";
funcionario01.matricula = "260782";
funcionario01.admissao = "02/02/2020";
funcionario01.demissao = "nulo";
funcionario01.horario = "08h às 14h20";
funcionario01.salario = "R$ 1.500,00";

funcionario02.nome = "Raíssa Lopez";
funcionario02.matricula = "985735";
funcionario02.admissao = "05/09/2019";
funcionario02.demissao = "nulo";
funcionario02.horario = "10 às 16h";
funcionario02.salario = "R$ 1.200,00";

var colaborador = funcionario02;

export default function App() {
  return (
    <View>
      <Text>Nome: {colaborador.nome} </Text>
      <Text>Matrícula: {colaborador.matricula} </Text>
      <Text>Admissão: {colaborador.admissao} </Text>
      <Text>Demissão: {colaborador.demissao} </Text>
      <Text>Horário de trabalho: {colaborador.horario} </Text>
      <Text>Salário: {colaborador.salario} </Text>
    </View>
  );
}

