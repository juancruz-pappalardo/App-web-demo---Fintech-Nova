// app.js - interactive bits for the demo
function $(id){return document.getElementById(id)}

function fakeSend(){
  const feed = document.getElementById('feed')
  const node = document.createElement('div')
  node.className = 'feed-item'
  node.textContent = 'Transferencia enviada - $250'
  feed.prepend(node)
  node.animate([{opacity:0, transform:'translateY(-10px)'},{opacity:1, transform:'translateY(0)'}], {duration:300})
}

function fakeQR(){
  const feed = document.getElementById('feed')
  const node = document.createElement('div')
  node.className = 'feed-item'
  node.textContent = 'Pago con QR - $480'
  feed.prepend(node)
}

function openLoanCalc(){
  const modal = document.getElementById('modal')
  modal.setAttribute('aria-hidden','false')
}

function closeDemo(){
  const modal = document.getElementById('modal')
  modal.setAttribute('aria-hidden','true')
}

function calculateLoan(){
  const amount = Number($('loan-amount').value) || 0
  const terms = Number($('loan-terms').value) || 1
  // simple APR mock: base 48% anual -> monthly rate approx 3.27%
  const monthlyRate = 0.0327
  const monthly = (amount * monthlyRate) / (1 - Math.pow(1+monthlyRate, -terms))
  $('loan-result').innerHTML = '<strong>Cuota aprox:</strong> $' + monthly.toFixed(2) + ' / mes'
}

function handleContact(e){
  e.preventDefault()
  const name = $('name').value
  const email = $('email').value
  alert('Gracias, ' + name + '. En una presentación real enviarías estos datos al equipo comercial. (Demo)')
  $('contact-form').reset()
}

function downloadReport(){
  // For demo we simulate download by opening the README text in a new window
  const text = 'Informe demo: FinTech Nova - (Resumen incluido en la presentación).\nIntegrantes: Greco, Pappalardo, Farrando, Faggionato'
  const win = window.open('', '_blank')
  win.document.body.style.fontFamily = 'monospace'
  win.document.body.innerText = text
}

// modal open by demo button
document.getElementById('open-demo').addEventListener('click', openLoanCalc)
