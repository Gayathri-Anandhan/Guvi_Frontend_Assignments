const root=document.getElementById("root");
const cont=document.createElement("div");
cont.className="container";
root.appendChild(cont);
const dis=document.createElement("input");
dis.type="text";
dis.id="result";
dis.setAttribute("readonly",true);
cont.appendChild(dis);

//keyboard support
document.addEventListener("keydown",function(e){
  if((e.key>=0 && e.key<=9)||["+","-","*","/","%","."].includes(e.key)){
    dis.value+=e.key;
  }
  else if(e.key==="Backspace"){
    dis.value=dis.value.slice(0,-1);
  }else if(e.key==="Enter"){
    calculate();
  }
  else{
    alert("Only Numbers are allowed!");
  }
});

function createButton(text,onClick){
  const btn=document.createElement("button");
  btn.innerText=text;
  btn.onclick=onClick;
  if (!isNaN(text)) btn.id = text; 
  else if(text==="+") btn.id="add";
  else if(text==="-") btn.id="subtract";
  else if(text==="*") btn.id="multiply";
  else if(text==="/") btn.id="divide";
  else if(text==="=") btn.id="equal";
  else if(text==="C") btn.id="clear";
  return btn;
}
const btns=[
  "C","<-",".","*",
  "7","8","9","/",
  "4","5","6","-",
  "1","2","3","+",
  "0","00","=",
  
];
const btnContainer=document.createElement("div");
btnContainer.className="button-row";
btns.forEach(value=>{
  const btn=createButton(value,()=>handleButton(value));
  btnContainer.appendChild(btn);
})
cont.appendChild(btnContainer);

function handleButton(val){
  if(val==='C'){
    dis.value="";
  }else if(val==='='){
    calculate();
  }else if(val === '<-'){
    dis.value=dis.value.slice(0,-1)
  }else{
    dis.value+=val;
  }
}

function calculate(){
  try{
    dis.value=eval(dis.value);
    // let expr=dis.value;
    // let nos=expr.split
  }catch{
    alert("Invalid Expression");
    dis.value="";
  }
}