$(document).ready(function () {
  let score = 0;
  let currentProblem = 0;
  let problems = [];
  let operationsList = [];
  let startTime;
  let timerInterval;

  // Iniciar el juego al hacer clic en el botón "Start"
  $("#start").click(function () {
    let level = parseInt($("#level").val());
    if (level >= 1 && level <= 30) {  // Poner aquí número de niveles
      resetGame();
      startTimer();
      generateProblems(level);
      showProblem(level);
    }
  });

  // Reiniciar variables y elementos del juego
  function resetGame() {
    score = 0;
    currentProblem = 0;
    problems = [];
    operationsList = [];
    console.log("Called")
    $("#progress-bar, #timer").show();
    $("#progress").css("width", "0%");
    $("#figlet").html(""); // Limpiar mensaje anterior
    $("#score").html("");
  }

  // Generar problemas según el nivel seleccionado
  function generateProblems(level) {
    var aleatorio = level;
    for (let i = 0; i < 120; i++) {     // Poner aquí número de operaciones
     if (aleatorio === 25)
      { let numeros = [1,2,3,4];
        let indiceAleatorio = Math.floor(Math.random() * numeros.length);
        level = numeros[indiceAleatorio];
      }
      if (aleatorio === 26)
      { let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,21,22,23,24];
        let indiceAleatorio = Math.floor(Math.random() * numeros.length);
        level = numeros[indiceAleatorio];
      }
      if (aleatorio === 27)
      { let numeros = [1,2,3,4,13,14];
        let indiceAleatorio = Math.floor(Math.random() * numeros.length);
        level = numeros[indiceAleatorio];
      }
      if (aleatorio === 28)
      { let numeros = [13,14,15,16,17,18,19,20];
        let indiceAleatorio = Math.floor(Math.random() * numeros.length);
        level = numeros[indiceAleatorio];
      }
      if (aleatorio === 29)
      { let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
        let indiceAleatorio = Math.floor(Math.random() * numeros.length);
        level = numeros[indiceAleatorio];
      }
      if (level ===1){
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * 20) + 1;
        let z = Math.floor(Math.random() * 20) + 1;
        let correctAnswer = x + y + z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===2){
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * 20) + 1;
        let z = Math.floor(Math.random() * (x+y)) + 1;
        let correctAnswer = x + y - z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===3){
        let x = Math.floor(Math.random() * 20) + 1;
        let z = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * (x+z)) + 1;
        let correctAnswer = x - y + z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===4){
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * (x-1)) + 1;
        let z = Math.floor(Math.random() * (x-y)) + 1;
        let correctAnswer = x - y - z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===5){
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * 20) + 1;
        let correctAnswer = x * y + z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===6){
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * 10) + 1;
        let correctAnswer = x + y * z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===7){
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * (x*y)) + 1;
        let correctAnswer = x * y - z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===8){
        let y = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * 10) + 1;
        let x = Math.floor(Math.random() * 10) + 1 + y*z;
        let correctAnswer = x - y * z;
        problems.push({ x, y, z, correctAnswer, level });
      //}
      if (level ===9){
        let y = Math.floor(Math.random() * 10) + 1;
        let x = (Math.floor(Math.random() * 10) + 1)*y;
        let z = Math.floor(Math.random() * 20) + 1;
        let correctAnswer = x / y + z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===10){
        let x = Math.floor(Math.random() * 20) + 1;
        let z = Math.floor(Math.random() * 10) + 1;
        let y = (Math.floor(Math.random() * 10) + 1)*z;
        let correctAnswer = x + y / z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===11){
        let y = Math.floor(Math.random() * 10) + 1;
        let x = (Math.floor(Math.random() * 10) + 1)*y;
        let z = Math.floor(Math.random() * (x/y)) + 1;
        let correctAnswer = x / y - z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===12){
        let z = Math.floor(Math.random() * 10) + 1;
        let y = (Math.floor(Math.random() * 10) + 1)*z;
        let x = (Math.floor(Math.random() * 20) + 1)+y/z;
        let correctAnswer = x - y / z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===13){
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * 20) + 1;
        let z = Math.floor(Math.random() * 20) + 1;
        let correctAnswer = (x + y) + z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===14){
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * 20) + 1;
        let z = Math.floor(Math.random() * (x+y)) + 1;
        let correctAnswer = (x + y) - z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===15){
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * 10) + 1;
        let correctAnswer = (x + y) * z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===16){
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * x) + 1;
        let z = Math.floor(Math.random() * 10) + 1;
        let correctAnswer = (x - y) * z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===17){
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * 20) + 1;
        let z = Math.floor(Math.random() * y) + 1;
        let correctAnswer = x + (y - z);
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===18){
        let z = Math.floor(Math.random() * 10) + 1;
        let y = (Math.floor(Math.random() * z) + 1)+z;
        let x = (Math.floor(Math.random() * 10) + 1)+y-z;
        let correctAnswer = x - (y - z);
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===19){
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * 5) + 1;
        let correctAnswer = x * (y + z);
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===20){
        let x = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * 10) + 1;
        let y = (Math.floor(Math.random() * 10) + 1)+z;
        let correctAnswer = x * (y - z);
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===21){
        let x = Math.floor(Math.random() * 5) + 1;
        let y = Math.floor(Math.random() * 5) + 1;
        let z = Math.floor(Math.random() * 5) + 1;
        let correctAnswer = x * y * z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===22){
        let x = Math.floor(Math.random() * 10) + 1;
        let z = Math.floor(Math.random() * 5) + 1;
        let y = (Math.floor(Math.random() * 5) + 1)*z;
        let correctAnswer = x * y / z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===23){
        let y = Math.floor(Math.random() * 5) + 1;
        let x = (Math.floor(Math.random() * 5) + 1)*y;
        let z = Math.floor(Math.random() * 10) + 1;
        let correctAnswer = x / y * z;
        problems.push({ x, y, z, correctAnswer, level });
      }
      if (level ===24){
        let z = Math.floor(Math.random() * 5) + 1;
        let y = (Math.floor(Math.random() * 5) + 1)*z;
        let x = (Math.floor(Math.random() * 5) + 1)*y*z;
        let correctAnswer = x / y / z;
        problems.push({ x, y, z, correctAnswer, level });
      }
    
    }  
  }


  // Mostrar el problema actual
  function showProblem(level) {
    if (currentProblem >= problems.length) {
      endGame();
      return;
    }
    updateProgressBar();
    let problem = problems[currentProblem];
    if(problem.level===1){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} + ${problem.y} + ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===2){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} + ${problem.y} - ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===3){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} - ${problem.y} + ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===4){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} - ${problem.y} - ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===5){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} x ${problem.y} + ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===6){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} + ${problem.y} x ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===7){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} x ${problem.y} - ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===8){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} - ${problem.y} x ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===9){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} : ${problem.y} + ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===10){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} + ${problem.y} : ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===11){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} : ${problem.y} - ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===12){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} - ${problem.y} : ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===13){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">(${problem.x} + ${problem.y}) + ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===14){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">(${problem.x} + ${problem.y}) - ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===15){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">(${problem.x} + ${problem.y}) x ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===16){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">(${problem.x} - ${problem.y}) x ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===17){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} + (${problem.y} - ${problem.z}) = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===18){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} - (${problem.y} - ${problem.z}) = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===19){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} x (${problem.y} + ${problem.z}) = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===20){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} x (${problem.y} - ${problem.z}) = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===21){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} x ${problem.y} x ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===22){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} x ${problem.y} : ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===23){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} : ${problem.y} x ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    if(problem.level===24){
    $("#problems").html(`
      <div class="problemStyle">
        <p class="h4">${problem.x} : ${problem.y} : ${problem.z} = </p>
          <form id="problemForm">
            <input type="number" id="answer" class="form-control text-center" placeholder="Tu respuesta" inputmode="numeric">
            <button type="submit" class="btn btn-success mt-2">Enviar</button>
        </form>
      </div>
    `) 
    $("#answer").focus();
      }
    

    // Manejar la respuesta del usuario
 $("#problemForm").on("submit", function(e) {
   event.preventDefault();
      let userAnswer = parseInt($("#answer").val());
      if (userAnswer === problem.correctAnswer) {
        handleCorrectAnswer(problem, level);
      } else {
        handleIncorrectAnswer(problem, userAnswer, level);
      }
      $("#score").html(`<div class="alert alert-success"> Puntuación: ${score}/${currentProblem}</div>`
  );
      updateOperationsList();
    });
  }

  // Manejar respuesta correcta
  function handleCorrectAnswer(problem, level) {
    if (currentProblem < problems.length) {
    score++;
      if(problem.level===1){
    operationsList.push({
      text: `${problem.x} + ${problem.y} + ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===2){
    operationsList.push({
      text: `${problem.x} + ${problem.y} - ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===3){
    operationsList.push({
      text: `${problem.x} - ${problem.y} + ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===4){
    operationsList.push({
      text: `${problem.x} - ${problem.y} - ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===5){
    operationsList.push({
      text: `${problem.x} x ${problem.y} + ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===6){
    operationsList.push({
      text: `${problem.x} + ${problem.y} x ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===7){
    operationsList.push({
      text: `${problem.x} x ${problem.y} - ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===8){
    operationsList.push({
      text: `${problem.x} - ${problem.y} x ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===9){
    operationsList.push({
      text: `${problem.x} : ${problem.y} + ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===10){
    operationsList.push({
      text: `${problem.x} + ${problem.y} : ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===11){
    operationsList.push({
      text: `${problem.x} : ${problem.y} - ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===12){
    operationsList.push({
      text: `${problem.x} - ${problem.y} : ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===13){
    operationsList.push({
      text: `(${problem.x} + ${problem.y}) + ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===14){
    operationsList.push({
      text: `(${problem.x} + ${problem.y}) - ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===15){
    operationsList.push({
      text: `(${problem.x} + ${problem.y}) x ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===16){
    operationsList.push({
      text: `(${problem.x} - ${problem.y}) x ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===17){
    operationsList.push({
      text: `${problem.x} + (${problem.y} - ${problem.z}) = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===18){
    operationsList.push({
      text: `${problem.x} - (${problem.y} - ${problem.z}) = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===19){
    operationsList.push({
      text: `${problem.x} x (${problem.y} + ${problem.z}) = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===20){
    operationsList.push({
      text: `${problem.x} x (${problem.y} - ${problem.z}) = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===21){
    operationsList.push({
      text: `${problem.x} x ${problem.y} x ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===22){
    operationsList.push({
      text: `${problem.x} x ${problem.y} : ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===23){
    operationsList.push({
      text: `${problem.x} : ${problem.y} x ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }
      if(problem.level===24){
    operationsList.push({
      text: `${problem.x} : ${problem.y} : ${problem.z} = ${problem.correctAnswer}`,
      correct: true
    });
    currentProblem++;
    showProblem(level);
        }

  }}

  // Manejar respuesta incorrecta
  function handleIncorrectAnswer(problem, userAnswer, level) {
      if (currentProblem < problems.length) {
       if(problem.level===1){
        operationsList.push({
        text: `${problem.x} + ${problem.y} + ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===2){
        operationsList.push({
        text: `${problem.x} + ${problem.y} - ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===3){
        operationsList.push({
        text: `${problem.x} - ${problem.y} + ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===4){
        operationsList.push({
        text: `${problem.x} - ${problem.y} - ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===5){
        operationsList.push({
        text: `${problem.x} x ${problem.y} + ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===6){
        operationsList.push({
        text: `${problem.x} + ${problem.y} x ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===7){
        operationsList.push({
        text: `${problem.x} x ${problem.y} - ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===8){
        operationsList.push({
        text: `${problem.x} - ${problem.y} x ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===9){
        operationsList.push({
        text: `${problem.x} : ${problem.y} + ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===10){
        operationsList.push({
        text: `${problem.x} + ${problem.y} : ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===11){
        operationsList.push({
        text: `${problem.x} : ${problem.y} - ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===12){
        operationsList.push({
        text: `${problem.x} - ${problem.y} : ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===13){
        operationsList.push({
        text: `(${problem.x} + ${problem.y}) + ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===14){
        operationsList.push({
        text: `(${problem.x} + ${problem.y}) - ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===15){
        operationsList.push({
        text: `(${problem.x} + ${problem.y}) x ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===16){
        operationsList.push({
        text: `(${problem.x} - ${problem.y}) x ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===17){
        operationsList.push({
        text: `${problem.x} + (${problem.y} - ${problem.z}) = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===18){
        operationsList.push({
        text: `${problem.x} - (${problem.y} - ${problem.z}) = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===19){
        operationsList.push({
        text: `${problem.x} x (${problem.y} + ${problem.z}) = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===20){
        operationsList.push({
        text: `${problem.x} x (${problem.y} - ${problem.z}) = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===21){
        operationsList.push({
        text: `${problem.x} x ${problem.y} x ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===22){
        operationsList.push({
        text: `${problem.x} x ${problem.y} : ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===23){
        operationsList.push({
        text: `${problem.x} : ${problem.y} x ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      if(problem.level===24){
        operationsList.push({
        text: `${problem.x} : ${problem.y} : ${problem.z} = ${userAnswer} (Correcta: ${problem.correctAnswer})`,
        correct: false
      });
      currentProblem++;
      showProblem(level);
       }
      
  }}

  // Actualizar la lista de operaciones
  function updateOperationsList() {
    let listHtml = '<div class="operations-list">';
    operationsList.forEach((operation) => {
      listHtml += `
        <div class="operation-item ${
          operation.correct ? "correct" : "incorrect"
        }">
          ${operation.correct ? "✅" : "❌"} ${operation.text}
        </div>
      `;
    });
    listHtml += "</div>";
    $("#operations-list").html(listHtml);
  }

  // Finalizar el juego
  function endGame() {
    clearInterval(timerInterval);
    $("#score").html(
      `<div class="alert alert-success">🏆 Puntuación: ${score}/${problems.length}</div>`
    );
    $("#score").append(
      `<div class="mt-2">⏱️ Tiempo total: <span id="total-time"></span></div>`
    );
    $("#total-time").text(
      formatTime(Math.floor((Date.now() - startTime) / 1000))
    );

    // Mostrar mensaje especial con estilo llamativo
    showSpecialMessage("¡Enhorabuena!");
  }

  // Mostrar mensaje especial con estilo llamativo
  function showSpecialMessage(message) {
    $("#figlet").html(`
      <div class="special-message">
        ${message}
      </div>
    `);
  }

  // Iniciar el temporizador
  function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      $("#time").text(formatTime(elapsedTime));
    }, 1000);
  }

  // Formatear el tiempo en minutos y segundos
  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  // Actualizar la barra de progreso
  function updateProgressBar() {
    let progress = ((currentProblem + 1) / problems.length) * 100;
    $("#progress").css("width", `${progress}%`);
  }
});
