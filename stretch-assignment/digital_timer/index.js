var myVar = 0
var time = 0

function reset() {
    color='green'
    let hsec = lsec = hmsec = lmsec = 0
    document.getElementById('secondTens').innerHTML = `<span style='color: ${color};'>${hsec}</span>`
    document.getElementById('secondOnes').innerHTML = `<span style='color: ${color};'>${lsec}</span>`
    document.getElementById('msHundreds').innerHTML = `<span style='color: ${color};'>${hmsec}</span>`
    document.getElementById('msTens').innerHTML = `<span style='color: ${color};'>${lmsec}</span>`
    document.getElementById('start').removeAttribute('disabled')  
}

function start() {
    myVar = setInterval(myTimer, 10)
    time = Date.now()
    document.getElementById('start').setAttribute('disabled', true)
}

function myTimer() {
    color = 'green'
    milliseconds = Date.now() - time
    seconds = Math.floor(milliseconds / 1000) 
    let hsec = Math.floor(seconds / 10) % 10
    let lsec = seconds % 10
    let hmsec = Math.floor(milliseconds / 100) % 10
    let lmsec = (Math.floor(milliseconds / 10) % 10)
    lsec = lsec.toFixed(0)
    hsec = hsec.toFixed(0)
    hmsec = hmsec.toFixed(0)
    lmsec = lmsec.toFixed(0)
    document.getElementById('secondTens').innerHTML = `<span style='color: ${color};'>${hsec}</span>`
    document.getElementById('secondOnes').innerHTML = `<span style='color: ${color};'>${lsec}</span>`
    document.getElementById('msHundreds').innerHTML = `<span style='color: ${color};'>${hmsec}</span>`
    document.getElementById('msTens').innerHTML = `<span style='color: ${color};'>${lmsec}</span>`
    if (hsec == 1) {
        color='red'
        document.getElementById('secondTens').innerHTML = `<span style='color: ${color};'>${hsec}</span>`
        document.getElementById('secondOnes').innerHTML = `<span style='color: ${color};'>${lsec}</span>`
        document.getElementById('msHundreds').innerHTML = `<span style='color: ${color};'>${hmsec}</span>`
        document.getElementById('msTens').innerHTML = `<span style='color: ${color};'>${lmsec}</span>`   
        clearInterval(myVar)     
    }
}  

/*


secondTens">-</div>
      <div class="digit" id="secondOnes">-</div>
      <div class="digit" id="colon">:</div>
      <div class="digit" id="msHundreds">-</div>
      <div class="digit" id="msTens

*/