function displayData(e){
    result.value+=e
}
function output(){
    result.value=eval(result.value)
}

function allclr(){
    result.value=""
}
function backs(){
    result.value=result.value.slice(0,-1)
}