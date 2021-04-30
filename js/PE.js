function Changelmg(element){
    var x = document.getElementById("MiQuang");
    var y = document.getElementById("spingroll");
    if(element.src == x.src){
        element.src = "images/Miquang02.jpg";
    }else{
        element.src ="images/spingroll02.jpg";
    }
    
}

function Undo(element){
    var x = document.getElementById("MiQuang");
    var y = document.getElementById("spingroll");
    if(element.src == x.src){
        element.src = "images/miquang.jpg";
    }else{
        element.src ="images/spingroll.jpg";
    }
}