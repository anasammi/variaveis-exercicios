// a) Nome completo
const nome = prompt("Digite seu nome completo")
// b) Data de nascimento (utilize as / ) 
const dataNascimento = prompt("Digite sua data de nascimento no formato DD/MM/AAAA")
// c) Endereço
const endereco = prompt("Digite seu endereço")
// d) CPF
const cpf = prompt("Digite seu CPF")
// e) Escolaridade
let escolaridade = prompt("Digite sua escolaridade")
// f) Possui CHN?
let cnh = prompt("Você possui CNH?")
// g) Quantos filhes possui?
let filhos = Number(prompt("Quantos filhos você tem?"))
// h) Cargo atual
let cargoAtual = prompt("Qual é seu cargo atual?")
// i) Salário
let salario = Number(prompt("Qual é o seu salário atual?"))
// j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel
let comissao = confirm("Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancelar")
// k) Informe o ano de admissão
const anoAdmissao = Number(prompt("Em qual ano você foi admitido?"))

console.log(typeof nome, typeof dataNascimento, typeof endereco, typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, typeof cargoAtual, typeof salario, typeof comissao, typeof anoAdmissao)

console.log(`Dados da pessoa colaboradora:
Nome: ${nome}
Data de nascimento: ${dataNascimento}
Endereço: ${endereco}
CPF: ${cpf}
Escolaridade: ${escolaridade}
Possui CNH? ${cnh}
Número de filhos: ${filhos}
Cargo atual: ${cargoAtual}
Salário atual: ${salario}
Recebe comissão? ${comissao}
Ano de admissão: ${anoAdmissao}
`)