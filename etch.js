


var canvasRef = document.getElementById('canvas');
var container = document.createElement('div');

function createCanvas(num){
    //makes the div for each 2d array xy
    for( var x = 0; x < num ; x++){
        for ( var y = 0 ; y < num; y ++){
            const temp = document.createElement('div');
            temp.classList.add('box'); 
            container.appendChild(temp) 
      
            // console.log(x);
            // console.log(y);   
        }
    }
}

function gridify(container){
    

}




function main(){
    var num = prompt("Grid Size?"); 
    createCanvas(num); 
    canvasRef.appendChild(container); 
    gridify(container);
    
    // added to container
    
    
}