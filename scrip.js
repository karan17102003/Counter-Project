let add=document.querySelector("#add");
let number=document.querySelector("div >h1");
console.log(number);
let a=0;
add.addEventListener('click' , ()=>{
    a++;
    number.innerText=`${a}`;

})
let reset=document.querySelector("#reset");
reset.addEventListener('click' , ()=>{
    a=0;
    number.innerText=`${0}`;

})
let sub=document.querySelector("#sub");
sub.addEventListener('click' , ()=>{
    if(a>0){
         a--;
        number.innerText=`${a}`;
    }
   

})
