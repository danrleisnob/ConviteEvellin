import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const menssage = () =>{

    if(quizState.score <= 3){
        return <p>Você acertou {quizState.score} de {quizState.questions.length}{" "}
        Na festa você terá que tomar 3 shot.</p>
    } else if(quizState.score > 3 && quizState.score <= 6){
        return <p>Você acertou {quizState.score} de {quizState.questions.length}{" "}
        Na festa você terá que tomar 2 shot.</p>
    }else if(quizState.score > 6 && quizState.score <= 9){
        return <p>Você acertou {quizState.score} de {quizState.questions.length}{" "}
        Na festa você terá que tomar 1 shot.</p>
    } else{
        return <p>Você acertou {quizState.score} de {quizState.questions.length}{" "}
        O aniversário é meu mas você está de parabéns ❤️ você me conhece de verdade! </p>
    }
  }

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>De 0 a 3 acertos - tomar 3 shots</p>
      <p>De 0 a 6 acertos - tomar 2 shots</p>
      <p>De 0 a 9 acertos - tomar 1 shots</p>
      <p>10 acertos está livre esse ano 🥳. </p>

      <p>Pontuação: {quizState.score}</p>
      <p>
        {menssage()}
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
