let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let elementtofind5 = document.getElementById("elementtofind5");
let input6 = document.getElementById("input6");
let typeofcharacters6 = document.getElementById("typeofcharacters6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");
let stringToCheckFor10 = document.getElementById("stringToCheckFor10");
let input11 = document.getElementById("input11");
let input12 = document.getElementById("input12");
let input13 = document.getElementById("input13");

let calculate1 = document.getElementById("calculate1");
let calculate2 = document.getElementById("calculate2");
let calculate3 = document.getElementById("calculate3");
let calculate4 = document.getElementById("calculate4");
let calculate5 = document.getElementById("calculate5");
let calculate6 = document.getElementById("calculate6");
let calculate7 = document.getElementById("calculate7");
let calculate8 = document.getElementById("calculate8");
let calculate9 = document.getElementById("calculate9");
let calculate10 = document.getElementById("calculate10");
let calculate11 = document.getElementById("calculate11");
let calculate12 = document.getElementById("calculate12");
let calculate13 = document.getElementById("calculate13");

let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3_1 = document.getElementById("output3_1");
let output3_2 = document.getElementById("output3_2");
let output4 = document.getElementById("output4");
let output5 = document.getElementById("output5");
let output6 = document.getElementById("output6");
let output7 = document.getElementById("output7");
let output8 = document.getElementById("output8");
let output9 = document.getElementById("output9");
let output10 = document.getElementById("output10");
let output11 = document.getElementById("output11");
let output12 = document.getElementById("output12");
let output13 = document.getElementById("output13");

calculate1.addEventListener("click", (evt) => calculateOutput(1, evt));
calculate2.addEventListener("click", (evt) => calculateOutput(2, evt));
calculate3.addEventListener("click", (evt) => calculateOutput(3, evt));
calculate4.addEventListener("click", (evt) => calculateOutput(4, evt));
calculate5.addEventListener("click", (evt) => calculateOutput(5, evt));
calculate6.addEventListener("click", (evt) => calculateOutput(6, evt));
calculate7.addEventListener("click", (evt) => calculateOutput(7, evt));
calculate8.addEventListener("click", (evt) => calculateOutput(8, evt));
calculate9.addEventListener("click", (evt) => calculateOutput(9, evt));
calculate10.addEventListener("click", (evt) => calculateOutput(10, evt));
calculate11.addEventListener("click", (evt) => calculateOutput(11, evt));
calculate12.addEventListener("click", (evt) => calculateOutput(12, evt));
calculate13.addEventListener("click", (evt) => calculateOutput(13, evt));

let result;
function calculateOutput(problemNumber) {
  result = "";

  //caluleaza result in functie de tipul problemei
  if (problemNumber === 1) {
    result = input1.value
      .split(",")
      .reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
  } else if (problemNumber === 2) {
    result =
      input2.value
        .split(",")
        .reduce((accumulator, currentValue) => accumulator + +currentValue, 0) /
      input2.value.split(",").filter((a) => a.trim() !== "").length;
  } else if (problemNumber === 3) {
    result = [+input3.value[0], +input3.value[0]];
    input3.value
      .split(",")
      .filter((a) => a.trim() !== "")
      .forEach((element) => {
        if (result[0] > element) {
          result[0] = element;
        }
        if (result[1] < element) {
          result[1] = element;
        }
      });
  } else if (problemNumber === 4) {
    result = input4.value
      .split(",")
      .filter((a) => a.trim() !== "")
      .reverse();
  } else if (problemNumber === 5) {
    result = input5.value
      .split(",")
      .filter((a) => a.trim() !== "")
      .indexOf(elementtofind5.value);
  } else if (problemNumber === 6) {
    if (typeofcharacters6.value !== "") {
      if (typeofcharacters6.value === "upper") {
        result = input6.value
          .split("")
          .filter((a) => a.trim() !== "" && a.toUpperCase() === a).length;
      } else if (typeofcharacters6.value === "lower") {
        result = input6.value
          .split("")
          .filter((a) => a.trim() !== "" && a.toLowerCase() === a).length;
      }
    }
  } else if (problemNumber === 7) {
    let text = input7.value.trim();
    result = 0;
    if (text !== "") {
      for (let i = 0; i < text.length; i++) {
        if (text[i] === text[text.length - i - 1]) result++;
      }
      result = result === text.length;
    }
  } else if (problemNumber === 8) {
    let text = input8.value.trim();
    for (let i = text.length - 1; i >= 0; i--) {
      result += text[i];
    }
  } else if (problemNumber === 9) {
    let text = input9.value.trim();
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") continue;
      result += text[i];
    }
  } else if (problemNumber === 10) {
    let text = input10.value.trim();
    let sum;
    result = false;
    for (let i = 0; i < text.length; i++) {
      sum = 0;
      if (text[i] === stringToCheckFor10.value[0] && result !== true) {
        sum++;
        for (let j = 1; j < stringToCheckFor10.value.length; j++) {
          if (text[i + j] === stringToCheckFor10.value[j]) {
            sum++;
          } else {
            break;
          }
        }
        if (sum === stringToCheckFor10.value.length) {
          result = true;
          break;
        }
      }
    }
  } else if (problemNumber === 11) {
    let multiplicationNumber = parseInt(+input11.value.trim());
    result = "";

    if (!isNaN(multiplicationNumber) && multiplicationNumber !== 0) {
      for (let i = 1; i <= 10; i++) {
        if (i === 1) {
          result = `${multiplicationNumber} x ${i} = ${
            multiplicationNumber * i
          }`;
        } else {
          result = `${result}<br>${multiplicationNumber} x ${i} = ${
            multiplicationNumber * i
          }`;
        }
      }
    } else {
      result = "Trebuie sa introduci un numar sau un numar diferit de 0!";
    }
  } else if (problemNumber === 12) {
    let primeNumber = parseInt(+input12.value.trim());
    result = "";

    if (!isNaN(primeNumber) && primeNumber >= 2) {
      for (let i = 2; i <= primeNumber; i++) {
        if (i === 2) {
          result = 2;
        } else if (i !== 0) {
          let flag = true;
          for (let j = 2; j < i; j++)
            if (i % j === 0) {
              flag = false;
              break;
            }
          if (flag == true) {
            result = `${result},${i}`;
          }
        }
      }
    } else {
      result =
        "Trebuie sa introduci un numar sau un numar mai mare sau egal cu 2!";
    }
  } else if (problemNumber === 13) {
    let fibonacciNumber = parseInt(+input13.value.trim());
    result = "";

    if (!isNaN(fibonacciNumber) && fibonacciNumber > 0) {
      let a = 0,
        b = 1;
      if (fibonacciNumber == 1) {
        result = 1;
      } else if (fibonacciNumber == 2) {
        result = "0,1";
      } else {
        result = "0,1";
        let s = a + b;
        for (let i = 3; i <= fibonacciNumber; i++) {
          result = `${result},${s}`;
          a = b;
          b = s;
          s = a + b;
        }
      }
    } else {
      result = "Trebuie sa introduci un numar sau un numar mai mare decat 0!";
    }
  }

  //pune result in output
  if (problemNumber < 3) {
    if (window["input" + problemNumber].value.trim() === "") {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (isNaN(result)) {
      window["output" + problemNumber].innerText =
        "Nu ai respectat formatul pentru Array, exemplu corect: [1, 2, 3, 4, 5]";
    } else {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber === 3) {
    if (window["input" + problemNumber].value.trim() === "") {
      window["output" + problemNumber + "_1"].innerText = "";
      window["output" + problemNumber + "_2"].innerText = "";
      return;
    }
    if (isNaN(result[0])) {
      window["output" + problemNumber + "_1"].innerText =
        "Nu ai respectat formatul pentru Array, exemplu corect: [1, 2, 3, 4, 5]";
    } else {
      window["output" + problemNumber + "_1"].innerText = result[0];
    }

    if (isNaN(result[1])) {
      window["output" + problemNumber + "_2"].innerText =
        "Nu ai respectat formatul pentru Array, exemplu corect: [1, 2, 3, 4, 5]";
    } else {
      window["output" + problemNumber + "_2"].innerText = result[1];
    }
  }

  if (problemNumber === 4) {
    if (window["input" + problemNumber].value.trim() === "") {
      window["output" + problemNumber].innerText = "";
      return;
    } else {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber === 5) {
    if (
      window["input" + problemNumber].value.trim() === "" ||
      elementtofind5.value.trim() === ""
    ) {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (isNaN(result)) {
      window["output" + problemNumber].innerText =
        "Nu ai respectat formatul pentru Array, exemplu corect: [1, 2, 3, 4, 5]";
    }
    if (result == -1) {
      window["output" + problemNumber].innerText =
        "Nu se regaseste elementul " +
        elementtofind5.value +
        " in lista de mai sus.";
    } else {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber === 6) {
    if (
      window["input" + problemNumber].value.trim() === "" ||
      typeofcharacters6.value.trim() === ""
    ) {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (result !== "") {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber === 7) {
    if (window["input" + problemNumber].value.trim() === "") {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (result !== "") {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber === 8) {
    if (window["input" + problemNumber].value.trim() === "") {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (result !== "") {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber === 9) {
    if (window["input" + problemNumber].value.trim() === "") {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (result !== "") {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber === 10) {
    if (
      window["input" + problemNumber].value.trim() === "" &&
      stringToCheckFor10.value === ""
    ) {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (result !== "") {
      window["output" + problemNumber].innerText = result;
    }
  }

  if (problemNumber >= 11) {
    if (window["input" + problemNumber].value.trim() === "") {
      window["output" + problemNumber].innerText = "";
      return;
    }
    if (result !== "") {
      window["output" + problemNumber].innerHTML = result;
    }
  }
}
