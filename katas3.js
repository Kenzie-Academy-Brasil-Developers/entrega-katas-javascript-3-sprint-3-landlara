const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults (valor) {
    let paragrafo = document.createElement('p')
    let box = document.getElementById('box1')
    box.appendChild(paragrafo)
    paragrafo.innerHTML = `<b>Kata:</b> ${valor}`
}


function kata1() {
    result = []
    for (let i = 1; i <= 25; i++) {
        result.push(i)
    }
    return result
}
showResults(kata1())

function kata2() {
    let result = []
    for (let i = 25; i >= 1; i--) {
        result.push(i)
    }
    return result
}
showResults(kata2())

function kata3() {
    let result = []
    for (let i = -1; i >= -25; i--) {
        result.push(i)
    }
    return result
}
showResults(kata3())

function kata4() {  
    let result = []
    for (let i = -25; i <= -1; i++) {
        result.push(i)
    }
    return result
}
showResults(kata4())

function kata5() {
    let result = []
    for (let i = 25; i >= -25; i -= 2) {
        result.push(i)
    }
    return result
}
showResults(kata5())

function kata6() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 ) {
            result.push(i)
        }
    }
    return result
}
showResults(kata6())

function kata7() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if ( i % 7 === 0 ) {
            result.push(i)
        }
    }
    return result 
}
showResults(kata7())

function kata8() {
    let result = []
    for (let i = 100; i >= 1; i--) {
        if ( i % 7 === 0 || i % 3 === 0 ) {
            result.push(i)
        }
    }
    return result
}
showResults(kata8())

function kata9() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if ( i % 5 === 0 ) {
            result.push(i)
        }
    }
    return result 
}
showResults(kata9())

function kata10() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        result.push(sampleArray[i])
    }
    return result
}
showResults(kata10())

function kata11() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if ( sampleArray[i] % 2 === 0) {
            result.push(sampleArray[i])
        }
    }
    return result
}
showResults(kata11())


function kata12() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if ( sampleArray[i] % 2 === 1) {
            result.push(sampleArray[i])
        }
    }
    return result
}
showResults(kata12())


function kata13() {
   let result = []
   for (let i = 0; i < sampleArray.length; i++) {
       if ( sampleArray[i] % 8 ===0 ) {
           result.push(sampleArray[i])
       }
   }
   return result
}
showResults(kata13())


function kata14() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        result.push(sampleArray[i]*sampleArray[i])
    }
    return result
}
showResults(kata14())


function kata15() {
    let result = 0
    for (let i = 0; i <= 20; i++) {
        result += i
    }
    return result
}
showResults(kata15())


function kata16() {
    let result = 0
    for (let i = 0; i < sampleArray.length; i++) {
        result += sampleArray[i]
    }
    return result
}
showResults(kata16())


function kata17() {
    let result = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (result > sampleArray[i]) { 
            result = sampleArray[i]
        } else {
            result
        }
    }
    return result
}
showResults(kata17())


function kata18() {
    let result = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (result < sampleArray[i]) {
            result = sampleArray[i]
        } else {
            result
        }
    }
    return result
}
showResults(kata18())


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}


