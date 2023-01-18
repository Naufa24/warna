const tombolBackground = document.getElementById('tombolBackground');
tombolBackground.onclick = function () {
  document.body.classList.toggle('grey')
}

const tWarnaPelangi = document.createElement('button');
const teksTombol = document.createTextNode('Warna Warni');
tWarnaPelangi.appendChild(teksTombol);
tWarnaPelangi.setAttribute('type', 'button');
tombolBackground.after(tWarnaPelangi);

tWarnaPelangi.addEventListener('click', function() {
  const r = Math.round(Math.random() * 255 +1);
  const g = Math.round(Math.random() * 255 +1);
  const b = Math.round(Math.random() * 255 +1);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g+','+ b +')';
})

const sMerah = document.querySelector('input[name="sMerah"]');
const sHijau = document.querySelector('input[name="sHijau"]');
const sBiru = document.querySelector('input[name="sBiru"]');
sMerah.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});
sHijau.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});
sBiru.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

document.body.addEventListener('mousemove', function(event) {
  const xPos = Math.round((event.cliendX / window.innerwidth) * 255);
  const yPos = Math.round((event.cliendY / window.innerwidth) * 255);
  document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',0)';
  
});