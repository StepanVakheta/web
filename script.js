const formEL = document.querySelector('form')
const tbodyEL = document.querySelector('tbody')
const tableEL = document.querySelector('table')

function isNeedVisibleFlash(e) {
    return (e >=50 && e<= 60)
}

function renderAdditionalCell() {
    // alert('flash works')
    document.getElementById('hid').style.visibility = 'visible'
    
}

function getResult() {
    const alco = document.getElementById('alco').value
    const flash = document.getElementById('flash').value
    if (isNeedVisibleFlash(alco)) {
        renderAdditionalCell()
    }
    // alert(alco)
}

formEL.addEventListener('submit', getResult)

