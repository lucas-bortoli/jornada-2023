import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import style from "./style.module.css";

export const Curiosidades = () => {
  const curiosidades = [
    "A abelha rainha pode viver até 5 anos, enquanto as operárias vivem apenas algumas semanas.",
    "O Monte Everest não é a montanha mais alta do mundo, se medido a partir do fundo do oceano, o título vai para o Mauna Kea no Havaí.",
    "O cheiro da chuva tem um nome: petricor.",
    "As vacas têm melhores amigas e podem ficar estressadas quando são separadas delas.",
    "Um raio pode aquecer o ar ao seu redor a uma temperatura cinco vezes mais quente que a superfície do sol.",
    "O olho humano é capaz de distinguir mais de 10 milhões de cores.",
    "O som não se propaga no vácuo, o que significa que no espaço sideral, ninguém pode ouvir você gritar.",
    "A Biblioteca de Alexandria, no Egito, continha uma vasta quantidade de conhecimento antigo e foi destruída por diversos eventos ao longo dos séculos.",
    "A quantidade de árvores na Terra é estimada em cerca de 3 trilhões.",
    "O material mais resistente do mundo é o grafeno, composto por uma única camada de átomos de carbono.",
    "O primeiro computador eletrônico, o ENIAC, ocupava uma sala inteira e pesava cerca de 27 toneladas.",
    "O código-fonte do software Apollo 11, que levou o homem à lua, foi disponibilizado publicamente pela NASA.",
    "A capacidade de processamento do supercomputador mais rápido do mundo, o Fugaku, é de mais de 442 petaflops.",
    "O termo 'bug de computador' foi cunhado quando uma mariposa ficou presa em um relé no computador Mark II, em 1947.",
    "A Microsoft foi originalmente chamada de Micro-Soft e foi fundada por Bill Gates e Paul Allen em 1975.",
    "O primeiro smartphone com tela sensível ao toque foi o IBM Simon, lançado em 1992.",
    "A quantidade de transistores em um processador duplica a cada 18 meses, de acordo com a Lei de Moore.",
    "O mouse foi inventado por Douglas Engelbart em 1964 e foi feito de madeira.",
    "A Internet tem cerca de 4,2 bilhões de usuários, representando mais da metade da população mundial.",
    "O primeiro e-mail foi enviado por Ray Tomlinson em 1971. Ele escolheu a arroba (@) para separar o nome do usuário do nome da máquina.",
    "A Apple foi fundada em uma garagem por Steve Jobs, Steve Wozniak e Ronald Wayne.",
    "O sistema operacional Linux foi criado por Linus Torvalds em 1991 e é uma alternativa de código aberto ao Unix.",
    "O protocolo de comunicação padrão da Internet, o TCP/IP, foi desenvolvido por Vinton Cerf e Robert Kahn.",
    "O primeiro emoticon, :-) , foi usado por Scott Fahlman em 1982.",
    "A expressão 'surfando na web' foi cunhada por Jean Armour Polly em 1992.",
    "A palavra 'robot' foi introduzida por Karel Capek em sua peça de teatro 'R.U.R.' em 1920.",
    "A primeira mensagem de texto foi enviada em 1992 por Neil Papworth, que desejou 'Feliz Natal' a um amigo.",
    "A IBM lançou o primeiro disco rígido comercial em 1956, que tinha uma capacidade de armazenamento de 5 megabytes e pesava mais de uma tonelada.",
    "O QR Code foi inventado por Masahiro Hara em 1994.",
    "O primeiro smartphone Android, o HTC Dream, foi lançado em 2008.",
    "A sigla Wi-Fi não significa 'Wireless Fidelity', é uma marca registrada sem significado específico.",
    "O termo 'Bluetooth' é uma homenagem ao rei dinamarquês do século X, Harald 'Bluetooth' Gormsson.",
    "O primeiro computador pessoal, o Altair 8800, foi lançado em 1975.",
    "A linguagem de programação Python recebeu esse nome em homenagem ao grupo de comédia britânico Monty Python.",
    "A World Wide Web foi proposta por Tim Berners-Lee em 1989.",
    "O primeiro navegador web gráfico foi o Mosaic, lançado em 1993.",
    "A primeira webcam foi criada no laboratório de computação da Universidade de Cambridge para monitorar a cafeteira, permitindo que os usuários verificassem se ainda havia café.",
    "A linguagem de programação Java foi originalmente chamada de Oak.",
    "O primeiro videogame comercialmente bem-sucedido foi o Pong, lançado em 1972.",
    "O primeiro iPhone foi lançado em 2007 por Steve Jobs."
  ];

  const [curiosidadeAtual, setCuriosidadeAtual] = useState(Math.floor(Math.random()*curiosidades.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setCuriosidadeAtual(Math.floor(Math.random()*curiosidades.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [curiosidadeAtual, curiosidades.length]);

  return <Typography className={style.curiosityText}>{curiosidades[curiosidadeAtual]}</Typography>;
};
