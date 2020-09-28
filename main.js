
let boxes = document.querySelectorAll(".box");
let boxes2 = document.querySelectorAll(".box2");
let calculations = document.querySelector("#calculatorIn");
let results = 0;
for (let box of boxes){

    box.addEventListener("click", function(event){
        if (box.id === "num-="){
            solve(calculations);
            calculations.textContent = results;
            console.log(results);

            // if(box.addEventListener("click", function(event){
            //     calculations.textContent = box.textContent;
            // }));
        }else if(box.className === "clear box"){
            calculations.textContent = "";

        }else if(box.className === "display box"){
            calculations.textContent += "";
        }else{
            calculations.textContent += parseFloat(box.textContent);
            console.log(calculations);

        }

    });

    box.addEventListener("mouseover", function(event){


    });
}

for (let box2 of boxes2){

    box2.addEventListener("click", function(event){
        calculations.textContent = parseFloat(calculations.textContent);
        calculations.textContent += box2.textContent;
        console.log(calculations.textContent);

    });

    box2.addEventListener("mouseover", function(event){
        

    });
}

function solve(calculations){
    console.log(calculations);
    return results = eval(calculations.textContent);
    
}