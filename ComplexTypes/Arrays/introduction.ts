let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:

function checkCustomersArray(){
  for(let i = 0 ; i < customersArray.length ; i++) {
      let el = customersArray[i];
      
    if (typeof el !== "string" ) {
      console.log(`Type error: ${el} should be a string!`);
    }
  }
}

checkCustomersArray(customersArray);

function stringPush(val) {
  if (typeof val === "string") {
    customersArray.push(val);
  }
}


// Sim, o código está correto, mas ele não é muito útil. Ele apenas verifica o tipo de cada elemento do array e imprime uma mensagem de erro se encontrar um elemento que não seja uma string. Além disso, a função stringPush permite adicionar apenas strings ao array, mas não tem nenhuma funcionalidade adicional.
// Esse é o objetivo do exercício, identicar que o poderiamos fazer algo mais dinâmico e útil. 