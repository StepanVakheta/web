// const tableEL = document.querySelector('table')
// const tbodyEL = document.querySelector('tbody')
const formEL = document.querySelector('form')
const groupII = 'UN 1170 ГУ II'
const groupIII = 'UN 1170 ГУ III'
const isNotDangerous = 'Не является опасным грузом'
const notCorrect = 'Некорректное значение температуры вспышки'

function isNeedVisibleFlash(e) {
    return (e >=50 && e<= 60)
}

function visibleFlash() {
    document.getElementById('hid').style.visibility = 'visible'
    return document.getElementById('flash').value
}

function computeGroupOON(v) {
    if (isNeedVisibleFlash()) {
        if(v < 23) {
            return groupII
        } else if(v >= 23) {
            return groupIII
        } else {
            return notCorrect
        }
    } else if (v >= 60) {
        return groupII
    } else if (v <= 24) {
        return isNotDangerous
    } else {
        return notCorrect
    }
}

function getResult() {
    var alco = document.getElementById('alco').value    
    if (isNeedVisibleFlash(alco)) {
        var flash = visibleFlash()
    }
    
    // create elements for each value
    var alcoCell = document.createElement('td')
    var flashCell = document.createElement('td')
    var oonCell = document.createElement('td')

    // insert values into cells of a table
    var textAlco = document.createTextNode(alco)
    var textFlash = document.createTextNode(flash)
    var textOON = document.createTextNode(computeGroupOON())

    // assign and render cells of a table
    alcoCell.appendChild(textAlco)
    var currentAlco = document.getElementById('trAlco')
    document.body.insertBefore(alcoCell, currentAlco)

    flashCell.appendChild(textFlash)
    var currentFlash = document.getElementById('trFlash')
    document.body.insertBefore(flashCell, currentFlash)

    oonCell.appendChild(textOON)    
    var currentOON = document.getElementById('trOON')
    document.body.insertBefore(oonCell, currentOON)
}

formEL.addEventListener('submit', getResult)

