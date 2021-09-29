const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (valor, n) {
    let paragrafo = document.createElement('p')
    let box = document.getElementById('box1')
    box.appendChild(paragrafo)
    paragrafo.innerHTML = `<b>Kata ${n}: </b> ${valor}`  
}

function kata1() {
    result = []
    for (let i = 1; i <= 25; i++) {
        result.push(i)
    }
    return result
}
showResults(kata1(), 1)

function kata2() {
    let result = []
    for (let i = 25; i >= 1; i--) {
        result.push(i)
    }
    return result
}
showResults(kata2(), 2)

function kata3() {
    let result = []
    for (let i = -1; i >= -25; i--) {
        result.push(i)
    }
    return result
}
showResults(kata3(), 3)

function kata4() {  
    let result = []
    for (let i = -25; i <= -1; i++) {
        result.push(i)
    }
    return result
}
showResults(kata4(), 4)

function kata5() {
    let result = []
    for (let i = 25; i >= -25; i -= 2) {
        result.push(i)
    }
    return result
}
showResults(kata5(), 5)

function kata6() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 ) {
            result.push(i)
        }
    }
    return result
}
showResults(kata6(), 6)

function kata7() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if ( i % 7 === 0 ) {
            result.push(i)
        }
    }
    return result 
}
showResults(kata7(), 7)

function kata8() {
    let result = []
    for (let i = 100; i >= 1; i--) {
        if ( i % 7 === 0 || i % 3 === 0 ) {
            result.push(i)
        }
    }
    return result
}
showResults(kata8(), 8)

function kata9() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if ( i % 5 === 0 && i % 2 === 1) {
            result.push(i)
        }
    }
    return result 
}
showResults(kata9(), 9)

function kata10() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        result.push(sampleArray[i])
    }
    return result
}
showResults(kata10(), 10)

function kata11() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if ( sampleArray[i] % 2 === 0) {
            result.push(sampleArray[i])
        }
    }
    return result
}
showResults(kata11(), 11)


function kata12() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if ( sampleArray[i] % 2 === 1) {
            result.push(sampleArray[i])
        }
    }
    return result
}
showResults(kata12(), 12)


function kata13() {
   let result = []
   for (let i = 0; i < sampleArray.length; i++) {
       if ( sampleArray[i] % 8 ===0 ) {
           result.push(sampleArray[i])
       }
   }
   return result
}
showResults(kata13(), 13)


function kata14() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        result.push(sampleArray[i]*sampleArray[i])
    }
    return result
}
showResults(kata14(), 14)


function kata15() {
    let result = 0
    for (let i = 0; i <= 20; i++) {
        result += i
    }
    return result
}
showResults(kata15(), 15)


function kata16() {
    let result = 0
    for (let i = 0; i < sampleArray.length; i++) {
        result += sampleArray[i]
    }
    return result
}
showResults(kata16(), 16)


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
showResults(kata17(), 17)


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
showResults(kata18(), 18)