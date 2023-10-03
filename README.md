# Calculadora Simples de Operações Matemáticas

Este é um projeto simples de backend utilizando Node.js e Express para criar uma calculadora que realiza operações matemáticas básicas (soma, subtração, multiplicação e divisão) com base nos parâmetros fornecidos.

## Como Usar

**Instalação**
   
Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
   
Clone o repositório e navegue até o diretório do projeto

Instale as dependências:

npm install

**Execução**

Inicie o servidor:

node app.js

O servidor estará ouvindo na porta 3000.

**Operações**

Acesse os seguintes endpoints para realizar as operações:

"Soma: http://localhost:3000/somar?num1=valor&num2=valor"
"Subtração: http://localhost:3000/subtrair?num1=valor&num2=valor" 
"Multiplicação: http://localhost:3000/multiplicar?num1=valor&num2=valor" 
"Divisão: http://localhost:3000/dividir?num1=valor&num2=valor" 
"Substitua valor pelos números desejados."

**Exemplo de Uso**

Para somar 5 e 3: http://localhost:3000/somar?num1=5&num2=3
Resultado esperado: 8

Para subtrair 8 de 12: http://localhost:3000/subtrair?num1=12&num2=8
Resultado esperado: 4

**Contribuição**

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
