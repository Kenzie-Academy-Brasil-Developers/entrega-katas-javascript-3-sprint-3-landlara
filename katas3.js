const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    result = []
    for (let i = 1; i <= 25; i++) {
        result.push(i)
    }
    return result
}

function kata2() {
    let result = []
    for (let i = 25; i >= 1; i--) {
        result.push(i)
    }
    return result
}

function kata3() {
    let result = []
    for (let i = -1; i >= -25; i--) {
        result.push(i)
    }
    return result
}

function kata4() {  
    let result = []
    for (let i = -25; i <= -1; i++) {
        result.push(i)
    }
    return result
}

function kata5() {
    let result = []
    for (let i = 25; i >= -25; i -= 2) {
        result.push(i)
    }
    return result
}

function kata6() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 ) {
            result.push(i)
        }
    }
    return result
}

function kata7() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if ( i % 7 === 0 ) {
            result.push(i)
        }
    }
    return result 
}

function kata8() {
    let result = []
    for (let i = 100; i >= 1; i--) {
        if ( i % 7 === 0 || i % 3 === 0 ) {
            result.push(i)
        }
    }
    return result
}

function kata9() {
    let result = []
    for (let i = 1; i <= 100; i++) {
        if ( i % 5 === 0 ) {
            result.push(i)
        }
    }
    return result 
}

function kata10() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        result.push(sampleArray[i])
    }
    return result
}

function kata11() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if ( sampleArray[i] % 2 === 0) {
            result.push(sampleArray[i])
        }
    }
    return result
}

function kata12() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if ( sampleArray[i] % 2 === 1) {
            result.push(sampleArray[i])
        }
    }
    return result
}

function kata13() {
   let result = []
   for (let i = 0; i < sampleArray.length; i++) {
       if ( sampleArray[i] % 8 ===0 ) {
           result.push(sampleArray[i])
       }
   }
   return result
}

function kata14() {
    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        result.push(sampleArray[i]*sampleArray[i])
    }
    return result
}

function kata15() {
    let result = 0
    for (let i = 0; i <= 20; i++) {
        result += i
    }
    return result
}

function kata16() {
    let result = 0
    for (let i = 0; i < sampleArray.length; i++) {
        result += sampleArray[i]
    }
    return result
}

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

function showResults (valor) {
    
}


const box = document.getElementById('box1')

const kata1x = document.createElement('p')
kata1x.innerHTML = kata1()
box.appendChild(kata1x)

const kata2x = document.createElement('p')
kata2x.innerHTML = kata2()
box.appendChild(kata2x)

const kata3x = document.createElement('p')
kata3x.innerHTML = kata3()
box.appendChild(kata3x)

const kata4x = document.createElement('p')
kata4x.innerHTML = kata4()
box.appendChild(kata4x)

const kata5x = document.createElement('p')
kata5x.innerHTML = kata5()
box.appendChild(kata5x)

const kata6x = document.createElement('p')
kata6x.innerHTML = kata6()
box.appendChild(kata6x)

const kata7x = document.createElement('p')
kata7x.innerHTML = kata7()
box.appendChild(kata7x)

const kata8x = document.createElement('p')
kata8x.innerHTML = kata8()
box.appendChild(kata8x)

const kata9x = document.createElement('p')
kata9x.innerHTML = kata9()
box.appendChild(kata9x)

const kata10x = document.createElement('p')
kata10x.innerHTML = kata10()
box.appendChild(kata10x)

const kata11x = document.createElement('p')
kata11x.innerHTML = kata11()
box.appendChild(kata11x)

const kata12x = document.createElement('p')
kata12x.innerHTML = kata12()
box.appendChild(kata12x)

const kata13x = document.createElement('p')
kata13x.innerHTML = kata13()
box.appendChild(kata13x)

const kata14x = document.createElement('p')
kata14x.innerHTML = kata14()
box.appendChild(kata14x)

const kata15x = document.createElement('p')
kata15x.innerHTML = kata15()
box.appendChild(kata15x)

const kata16x = document.createElement('p')
kata16x.innerHTML = kata16()
box.appendChild(kata16x)

const kata17x = document.createElement('p')
kata17x.innerHTML = kata17()
box.appendChild(kata17x)

const kata18x = document.createElement('p')
kata18x.innerHTML = kata18()
box.appendChild(kata18x)