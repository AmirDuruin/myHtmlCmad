function increment(){
    var element = document.getElementById('input');
    var value = element.value;

    ++value;

    console.log(value);
    document.getElementById('input').value = value;

}
function dicrement(){
    var element = document.getElementById('input');
    var value = element.value;

    --value;

    console.log(value);
    document.getElementById('input').value = value;

    if (value == 0){
        document.getElementById('input').value = 0;
            
    }
    else if ( value < 0){

        document.getElementById('input').value = 0;
        alert('Counter is zero');
        
    }
  
}

function reset(){
   
    alert("Counter is Reset");
    document.getElementById('input').value = "";
}