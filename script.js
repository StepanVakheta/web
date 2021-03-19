const formEL = document.querySelector('form')
const tbodyEL = document.querySelector('tbody')
const tableEL = document.querySelector('table')

function isNeedVisibleFlash(e) {
    return (e >=50 && e<= 60)
}

function renderAdditionalCell() {
    document.getElementById('hid').style.visibility = 'visible'
    return document.getElementById('flash').value
}

function getResult() {
    const alco = document.getElementById('alco').value    
    if (isNeedVisibleFlash(alco)) {
        var flash = renderAdditionalCell()
    }
    
    const alcoCell = document.createElement('td')
    const flashCell = document.createElement('td')

    var textAlco = document.createTextNode(alco)
    var textFlash = document.createTextNode(flash)

    alcoCell.appendChild(textAlco)
    const currentAlco = document.getElementById('trAlco')
    document.body.insertBefore(alcoCell, currentAlco)

    flashCell.appendChild(textFlash)
    const currentFlash = document.getElementById('trFlash')
    document.body.insertBefore(flashCell, currentFlash)
}

formEL.addEventListener('submit', getResult)

