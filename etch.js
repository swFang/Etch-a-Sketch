


var canvasRef = document.getElementById('canvas');
var container = document.createElement('div');

function createCanvas(num, sz){
    //makes the div for each 2d array xy
    for( var x = 0; x < num ; x++){
        for ( var y = 0 ; y < num; y ++){
            const temp = document.createElement('div');
            temp.setAttribute("height", sz + "px");
            temp.style.height = sz+"px";
            //temp.setAttribute("width", sz + "px");
            temp.style.width = sz + 'px';
            temp.classList.add('box'); 
            //temp.setAttribute("display", "inline-text");
            container.appendChild(temp) 
      
            // console.log(x);
            // console.log(y);   
        }
    }
   
}

function calcSize(num){
    var width= canvasRef.offsetWidth - 2; 
    console.log(width);
    var sizePer =  width/num;
    console.log("size per" + sizePer);
    return sizePer;
    

}

function addListeners(){
    var arr = container.childNodes;
    console.log("got to loop")
    arr.forEach(function(child){
        child.addEventListener("mouseover", onHover);
    })

    console.log("finished loop");
}

function onHover(){
    console.log("hit onHover");
    this.style.backgroundColor = 'black';
}


function main(){
    var num = prompt("Grid Size?"); 
    var sz = calcSize(num); 
    createCanvas(num, sz); 
    canvasRef.appendChild(container); 
    addListeners();

    
    // added to container
    
    
}

main(); 