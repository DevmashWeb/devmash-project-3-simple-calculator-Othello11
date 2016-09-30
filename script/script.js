/***************************
* Simple Binary Calculator *
****************************/


//declaring calculator variables
var operand = null;
var a = 0;
var b = 0;
var r = 0;

//declaring flags
var aSet = false;
var bSet = false;
var opSet = false;

var displaystring = "";


                       
function showAllVariables(){
    console.log('operand','a','b','r','aSet','bSet','opSet');
    console.log(operand,a,b,r,aSet,bSet,opSet);
}

function showResult(v){
    
    document.getElementById('display_menu').value = v;
    console.log(v);
    //reset the calculator state
    a = b = r = 0;
    aSet = bSet = opSet = false;
}

//update the view                    
function show(){
    if(aSet){
        displaystring = a;
    }
    if(opSet){
        displaystring = displaystring + " "+operand;
    }
    if(bSet){
        displaystring = displaystring + " "+b;
    }
    document.getElementById('display_menu').value = displaystring;
}

//eventhandler
function getvalue(event,v){
    v = this.value;
    //console.log("getvalue called with "+v);
  
if (!isNaN(v)){  //if clicked button is numeric
    if(!aSet ||(aSet&&!opSet)){
            a = 10*a + parseInt(v);
            aSet = true;
            show();
    }
    else if(opSet){
        b = b*10+ parseInt(v);
        bSet = true;
        show();
    }
}
else{   //if clicked button is operand
    if(!opSet){
        operand = v;
        opSet = true;
        show();
    }
    else if(opSet&&bSet){
        if(operand == '+'){
            r = a + b;
        }
        if(operand == '-'){
            r = a - b;
        }
        if(operand == '*'){
            r = a * b;
        }
        if(operand == '/'){
            r = a/b;
        }
        showResult(r);
    }
}
    //debug purposes
    showAllVariables();
}

//bind eventlistner to the keys

    document.getElementById('key1').addEventListener('click', getvalue);
    document.getElementById('key2').addEventListener('click', getvalue);
    document.getElementById('key3').addEventListener('click', getvalue);
    document.getElementById('key4').addEventListener('click', getvalue);
    document.getElementById('key5').addEventListener('click', getvalue);
    document.getElementById('key6').addEventListener('click', getvalue);
    document.getElementById('key7').addEventListener('click', getvalue);
    document.getElementById('key8').addEventListener('click', getvalue);
    document.getElementById('key9').addEventListener('click', getvalue);
    document.getElementById('key0').addEventListener('click', getvalue);    document.getElementById('key+').addEventListener('click', getvalue);
    document.getElementById('key-').addEventListener('click', getvalue);
    document.getElementById('key*').addEventListener('click', getvalue);
    document.getElementById('key/').addEventListener('click', getvalue);
    document.getElementById('key=').addEventListener('click', getvalue);
    document.getElementById('keyclear').addEventListener('click', clear);

    function clear(){location.reload()};