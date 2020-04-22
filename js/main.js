const button = document.getElementById("submit");

button.addEventListener("click", criptografar);

function criptografar() {
  const frase = document.getElementById("frase").value;
  let arrayFrase = frase.toLowerCase().split("");

  for(var i = 0; i < arrayFrase.length; i++){
    if(arrayFrase[i] === "z"){
      arrayFrase[i] = "p";
    }
    if(arrayFrase[i] === "e"){
      arrayFrase[i] = "o";
    }
    if(arrayFrase[i] === "n"){
      arrayFrase[i] = "l";
    }
    if(arrayFrase[i] === "i"){
      arrayFrase[i] = "a";
    }
    if(arrayFrase[i] === "t"){
      arrayFrase[i] = "r";
    }
  }

  document.getElementById("resultado").value = arrayFrase.join("");
}



