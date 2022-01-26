const version = 1.5;
title.innerHTML=`Kalkulator v${version}`;
function show_result(){
  let a =document.calc.txt.value;
if(a==""){
  i.placeholder='0';
}else{
  let b = a.split("÷").join("/");
  let c = b.split("×").join("*");
  let d = c.split("^").join("**");
  try {
    let result = eval(d);
    document.calc.txt.value=result;
  } catch (e) {
    if (e) {
      console.log("error alert ! : "+e.message);
      document.calc.txt.value="";
    }
  }
  i.style.fontSize='15px';
  setTimeout(function(){i.style.fontSize='15px'},500);
}}
/* mematikan klik kanan */
var message="Function Disabled";function clickIE() {if (document.all) {(message);return false;}}function clickNS(e) {if(document.layers||(document.getElementById&&!document.all)) {if (e.which==2||e.which==3) {(message);return false;}}}if (document.layers){document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}document.oncontextmenu=new Function("return false")
let result = document.calc.txt;
var counter = 0;
result.addEventListener('click',function(){
    let a  = document.calc.txt.value;
    if (a == "") {
      null
    } else {
    let text = ("Copied ✅")
    result.select();
    document.execCommand('copy');
    let isinya = result.value;
    result.value=text;
    setTimeout(()=>{result.value=isinya;result.style.fontSize="15px"},700)
    }
})
function remove(){
  let a =document.calc.txt.value;
  if(a==""){
    null
  }else{
  let isinya = result.value;
  let banyakChar = isinya.length;
  let kurangi = (banyakChar-1);
  let res = isinya.slice(0,kurangi);
  result.value=res;
  }
}
function preview(){
  let a = document.calc.txt.value;
if(a == "" || a == null ){
   i.placeholder="0";
   document.calc.prw.value = "";
}else{
  let b = a.split("÷").join("/")
  let c = b.split("×").join("*");
  let d = c.split("^").join("**");
  try {
    let result = eval(d);
    document.calc.prw.value=("= "+result);
  } catch (e) {
    if (e instanceof SyntaxError) {
        document.calc.prw.value="= Error : "+e.message;
    }
}

}
}
setInterval(preview,100)
/*
let a wal = 15;
setInterval(function(){
  let a =document.calc.txt.value;
  let b = a.length;
  let a nu = Math.floor(b % 5);;
  if(anu==0){
    let a khir = awal--;
    console.log(awal)
    i.style.fontSize=`${akhir}px`;
  }
},700)
*/
function persen(){
  let a =document.calc.txt.value;
  if(a==""){
    null
  }else{
    document.calc.txt.value=(a/100);
  }
}
function bagi() {
  let a =document.calc.txt.value;
  if(a==""){
    null
  }else{
    document.calc.txt.value += " ÷ "
  }
}
function kali(){
  let a =document.calc.txt.value;
  if(a==""){
    null
  }else{
    document.calc.txt.value += " × "
  }
}
function kurung(){
  if(counter==1){
    counter--;
    document.calc.txt.value += ")";
  }else{
    counter++;
    document.calc.txt.value += "(";
  }
}
function Clear(){
  document.calc.txt.value ='';
  i.placeholder='0';
  document.calc.prw.value='';
  counter = 0;
}
function disable_operate(){
  let elements = document.querySelectorAll("operate");
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.classList.add("opacity-0");
  }
}

function event_operate(){
  let elements = document.querySelectorAll("operate");
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.addEventListener("click",function(){
      disable_operate();
      element.style.backgroundColor="#000"
    })
  }
}
event_operate();