// function prueba () {
//     let name = prompt('decime tu nombre')
//     console.log(name)
// }
// getElementByid devuelve un elemento y getElementByClassName devuelve un array document.getElementByClassName('resultado')[0].innerHTML 
//  function prueba (){
//     let num1 = parseInt(prompt('dame un numero'))
//     let num2 = parseInt(prompt('dame otro numero'))
//     document.getElementById('resultado').innerHTML = num1 + num2
// }

// console.log.error('esto es error') sirve pra mostrar un error
// console.warn(exploto algo) 

function calcular(){
    let numAction = (prompt('que queres hacer vos?'))
    let num1 = parseInt(prompt('dame un numero'))
    let num2 = parseInt(prompt('dame otro numero'))
    if (numAction === 'sumar' || numAction === '+'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 + num2
    }

    if (numAction === 'restar' || numAction === '-'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 - num2
    }

    if (numAction === 'multiplicar' || numAction === '*'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 * num2
    }

    if (numAction === 'dividir' || numAction === '/'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 / num2
    } else{
        alert('ingresa una opcion valida')
    }
}

