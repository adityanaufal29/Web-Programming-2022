// menangkap elemen dengan id
const title = document.getElementById('title');
const subTitle = document.getElementById('subtitle');

// memberikan nilai ulang pada tag h1
title.innerHTML = 'Praktikum Web';

//memberikan background color pada h1
title.style.backgroundColor = 'gold';

// memberikan color pada h1
title.style.color = 'brown';

// memberikan nilai ulang subTitle
subTitle.innerHTML = 'Belajar Web';

// memberikan color pada subtitle
subTitle.style.color = 'green';

// menangkap elemen dengan class
const content = document.getElementsByClassName('content');

// memberikan color pada elemen p pertama
content[0].style.color = 'red';

