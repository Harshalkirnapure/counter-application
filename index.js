

let counterE1 = document.getElementById("counter");

 let count=0;

function incValue(){
  count=count+1

  if(count>=1){
   
    counterE1.style.color="green";
 }
 if(count==0){
    counterE1.style.color="black";
 }
 counterE1.textContent=count
//    console.log(count) 
}

function decValue(){

 count =count-1

 if(count<=0){
    counterE1.style.color="red";
 }
 if(count==0){
    counterE1.style.color="black";
 }
 counterE1.textContent=count
//  console.log(count)
}




