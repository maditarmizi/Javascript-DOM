
// kasus 1

const tombol = document.getElementById('tUbahWarna');
tombol.onclick = function() {
  // document.body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
}

// kasus 2
const tWarna = document.createElement('button');
const textTombol = document.createTextNode('Warna Warni');
tWarna.appendChild(textTombol);
tWarna.setAttribute('type', 'button');
tombol.after(tWarna);

tWarna.addEventListener('click', function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r,g,b);
  document.body.style.backgroundColor = 'rgb('+  r +','+ g +','+ b +')';
});

const sliderMerah = document.querySelector('input[name=sMerah]');
const sliderHijau = document.querySelector('input[name=sHijau]');
const sliderBiru = document.querySelector('input[name=sBiru]');


sliderMerah.addEventListener('input', function(){
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r +',' + g + ', 100)';
});

sliderHijau.addEventListener('input', function(){
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r +',' + g + ', 100)';
});

sliderBiru.addEventListener('input', function(){
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r +',' + g + ', '+ b +')';
});



document.body.addEventListener('mousemove', function(e) {
  // posisi mouse
  // console.log(e.clientX);
  // console.log(window.innerWidth);
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)'
});












