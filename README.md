# Guess the color
![Coverage](https://img.shields.io/badge/coverage-97%25-%2344cc11.svg)

Você é bom com cores e códigos hexadecimais? Chegou a hora de testar suas habilidades!

<strong>Acerte o maior número de cores no intervalo de 30s</strong> ⏱️

## Regras
- O Jogo gera uma cor e opções de resposta em hexadecimal, você deve escolher qual é o hexadecimal da cor mostrada.
- Cada partida tem o tempo máximo de 30s.
- Você tem o tempo máximo de 10s para escolher qual a resposta correta de cada cor gerada na tela.
- Para cada resposta correta você ganha 5 pontos no score e 1s é incrementado no tempo total da partida.
- Para cada resposta incorreta você perde 1 ponto no score e 1s é decrementado do tempo total da partida.
- Caso você não responda dentro do prazo máximo de 10s você perde 2 pontos no score e uma nova cor é gerada.
- Sempre que uma nova resposta é fornecida uma nova cor é gerada.

## Prévia
![Group 12](https://github.com/DemetrioG/guess-the-color/assets/79758394/9e0d68bb-e25f-4cd7-bc5f-c9a3d5dc8b48)

## Instalação

1. Clone o repositório para seu ambiente local:
```bash
git clone https://github.com/DemetrioG/guess-the-color.git
```

2. Na linha de comando na pasta raíz do projeto, execute:
```bash
npm install
```

## Testes

Para rodar os testes do projeto, execute:
```bash
npm run test
```

Caso queira visualizar a cobertura de testes, execute:
```bash
npm run test:coverage
```

## Execução

```bash
npm run dev
```

Após, abra o seu navegador na porta listada pela linha de comando. `Ex: http://localhost:3000`
