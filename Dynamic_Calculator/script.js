// function Solve(val) {
//     var v = document.getElementById('res').value;
//     v.value += val;
//  }


 
function Solve(input){
    
        document.getElementById('res').textContent+=input;

    }
    
function Result() {
    var num1 = document.getElementById('res').textContent;
    var num2 = eval(num1);
    document.getElementById('res').textContent = num2;
 }

function Clear(ac) {
    document.getElementById('res').textContent='';
    
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.textContent = ev.textContent.slice(0,-1);
 }

 