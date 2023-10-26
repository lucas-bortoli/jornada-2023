import { useState } from "react";
import styles from "./style.module.css";
import { ToolWindow } from "../ToolWindow";

export const Sidebar = () => {
  const [isHelpOpen, setHelpOpen] = useState(false);

  return (
    <div className={styles.sidebar}>
      <button className={styles.helpButton} onClick={() => setHelpOpen(!isHelpOpen)}>
        ?
      </button>
      <ToolWindow
        label="Ajuda"
        isOpen={isHelpOpen}
        onClose={() => setHelpOpen(false)}
        className={styles.helpWindow}
      >
        <ul>
          <li>
            <details>
              <summary>Não consigo acessar a biblioteca de planos.</summary>
              Ocorreu um problema ao receber a sua biblioteca do servidor. Por favor, aguarde alguns
              instantes ou reinicie a página.
            </details>
          </li>
          <li>
            <details>
              <summary>Não consigo editar o resultado do meu plano.</summary>O editor está tendo
              problemas ao enviar a demanda de edição. Por favor, salve e abra o plano novamente ou
              faça um novo plano.
            </details>
          </li>
          <li>
            <details>
              <summary>Não consigo realizar a criação de um plano.</summary>
              Não é possível realizar o envio do roteiro para o OpenAi. Por favor, aguarde alguns
              instantes e tente novamente mais tarde. Se o problema não for resolvido, entre em
              contato com o suporte ao cliente.
            </details>
          </li>
          <li>
            <details>
              <summary>Por que não estou recebendo uma resposta do plano de aula?</summary>
              Ocorreu um problema ao receber a resposta da OpenAI. Por favor, aguarde alguns
              instantes. Se o problema não for resolvido, entre em contato com o suporte ao cliente.
            </details>
          </li>
          <li>
            <details>
              <summary>Meu plano de aula não está salvando.</summary>
              Não é possível enviar o plano para o servidor no momento. Por favor, exporte o plano
              para o seu dispositivo e tente enviar novamente mais tarde.
            </details>
          </li>
          <li>
            <details>
              <summary>Meu plano de aula não é da matéria que eu desejava.</summary>
              Ocorreu um problema no reconhecimento da matéria. Por favor, tente recriar o plano
              novamente.
            </details>
          </li>
          <li>
            <details>
              <summary>Não existe a disciplina que eu desejava.</summary>
              Infelizmente, a sua disciplina desejada não foi padronizada no repositório ainda. Por
              favor, adicione a disciplina para que ela possa ser padronizada.
            </details>
          </li>
          <li>
            <details>
              <summary>O estilo de aula não se encaixa com os meus métodos de aulas.</summary>
              Sentimos muito pelo inconveniente. Por favor, entre em contato com o suporte ao
              cliente para que possamos adicionar o seu estilo de aula desejado.
            </details>
          </li>
          <li>
            <details>
              <summary>Não consigo exportar o meu plano de aula.</summary>
              Ocorreu algum problema ao converter o seu plano para o formato PDF. Por favor, tente
              novamente mais tarde. Caso o problema não tenha sido resolvido, entre em contato com o
              suporte ao cliente.
            </details>
          </li>
          <li>
            <details>
              <summary>Meu plano de aula foi corrompido/modificado.</summary>
              Sentimos muito pela inconveniência. Por favor, entre em contato com o suporte ao
              cliente e informe qual plano foi corrompido/modificado para que possamos enviar uma
              versão anterior deste plano.
            </details>
          </li>
        </ul>
      </ToolWindow>
    </div>
  );
};
