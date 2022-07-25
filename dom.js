// Bab 3 - Materi DOM Selection

// dom selection
// document.getElementById() -> mengembalikan elemen
/*const judul = document.getElementById('judul');
// Cara Baca Syntax = Javascript tolong dong carikan saya elemen yang Id nya apa....yang ada di dalam document
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'M Adi Tarmizi';*/
// Judul = id, style = Atribut CSS, color = Property CSS, red = Value, fungsi innerHTML adalah mengubah text di javascript tanpa menyentuh file index.html
// =============================================
// ducument.getElementsByTagName() -> mengembalikan HTMLCollection
/*const p = document.getElementsByTagName('p');
for( let i = 0; i < p.length; i++ ) {
  p[i].style.backgroundColor = "lightblue";
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '20px';*/

// =============================================

// ducument.getElementsByClassName() -> mengembalikan HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'text ini diubah di dalam Javascript';

// =============================================

// document.querySelector() -> element
/*const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '25px'

const li12 = document.querySelector('section#b ul li:nth-child(2)');
li12.style.backgroundColor = 'orange';

const p = document.querySelector('p');
p.innerHTML = 'ini di ubah javascript';*/
// kenapa p yg prtma kok bisa diseleksi maunya kita kan p semua yang berubah tulisan nya? ini karena querySelector hanya mengembalikan element, untuk cara mengatasi itu coba kita gunakan cara di bawah ini
// =============================================
// document.querySelectorAll()
/*const p = document.querySelectorAll('p');

for( let i = 0; i < p.length; i++ ) {
  p[i].style.backgroundColor = 'lightblue';
}*/

/*============================================*/
// Bab 4 - DOM Manipulation
// DOM Manipulation Method

// 1. Method element.innerHTML
/*const judul = document.getElementById('judul');
judul.innerHTML = 'M Adi Tarmizi';

const secA = document.querySelector('section#a');
secA.innerHTML = 'Hello World!';*/

// 2. Method element.style.propertyCSS

/*const awal = document.querySelector('#judul');
awal.style.color = 'purple';
awal.style.backgroundColor = 'orange';*/

// 3. Method element.setAttribute() / menambahkan atrribut
/*const judulA = document.getElementsByTagName('h1')[0];*/
/*judulA.setAttribute('name', 'adi');*/
/*const a = document.querySelector('section#a a');*/

/*const p2 = document.querySelector('.p2');*/




/*============================================*/
// Bab 5 - DOM Manipulation
// DOM Manipulation Node

// Studi Kasus 1
// Create Element
/*const p4 = document.createElement('p');
const pText = document.createTextNode('Paragraf 4');
// simpan tulisan ke dalam Paragraf
p4.appendChild(pText);
// simpan p4 di section A
const sectionA = document.getElementById('a');
sectionA.appendChild(p4);*/

// Studi Kasus 2
// Create Element
/*const liBaru = document.createElement('li');
const liText = document.createTextNode('Item Baru');
// simpan tulisan ke dalam paragraf
liBaru.appendChild(liText);
//  Eksekusi
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
//  simpan p4 di section b
ul.insertBefore(liBaru, li2);*/

// studi kasus 3 
/*const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// studi kasus 4
const sectionB = document.getElementById('b');
const p6 = sectionB.querySelector('p');

// create element & text
const h2Baru = document.createElement('h2');
const h2Text = document.createTextNode('Judul Baru');

// simpan 
h2Baru.appendChild(h2Text);
// result 
sectionB.replaceChild(h2Baru, p6);

p4.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';*/


// Bab 5 - DOM EVENTS
/* 1. Event Handler */
// inline HTML Attribute
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
  p3.style.backgroundColor = 'lightblue';
}
// Elemen Method

const p2 = document.querySelector('.p2');
function ubahWarnaP2() {
  p2.style.backgroundColor = 'yellow';
}
p2.onclick = ubahWarnaP2;

// 2. addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
  const ul = document.querySelector('section#b ul');
  const liBaru = document.createElement('li');
  const liText = document.createTextNode('List Baru');
  liBaru.appendChild(liText);
  ul.appendChild(liBaru);
});










