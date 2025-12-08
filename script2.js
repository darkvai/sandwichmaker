let ingredients = {
    tomato :0 ,
    beef :0,
    cheese:0,
    lettuce:0,
    egg:0,
    shrooms:0,
    chiken:0,
    onions:0
};

const sandwichContainer = document.getElementById("sandwich");


function renderSandwich() {
    sandwichContainer.innerHTML = "";

    let topBread = document.createElement("div");
    topBread.className = "bread-color";
    sandwichContainer.appendChild(topBread);

    for (const [key, count] of Object.entries(ingredients)) {
            for (let i = 0; i < count; i++) {
                let ingredientDiv = document.createElement("div");
                ingredientDiv.setAttribute("draggable","true");
                ingredientDiv.className = `${key}-color`;
                sandwichContainer.appendChild(ingredientDiv);
        }
    };

    let bottomBread = document.createElement("div");
    bottomBread.className = "bread2-color";
    sandwichContainer.appendChild(bottomBread);

}

let btn = document.querySelectorAll('.plus');





btn.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
        const item = btn.getAttribute("data-item");
        ingredients[item] ++;
        document.getElementById(`${item}-count`).innerText = ingredients[item];

        renderSandwich();

    });
    
    
});

let btnn = document.querySelectorAll('.minus');

btnn.forEach(btnn =>{
    btnn.addEventListener("click" , ()=>{
        const item = btnn.getAttribute("data-item");
        if(ingredients[item]>0){
            ingredients[item] --;}
        document.getElementById(`${item}-count`).innerText = ingredients[item];
        renderSandwich();
    });

    
    
});

let makebtn = document.getElementById("makebtn");
makebtn.addEventListener("click" ,()=>{

})
