let ingredients = {
    tomato: 0,
    cheese: 0,
    beef:0
};

// Update counters when + / - clicked
document.querySelectorAll(".plus, .minus").forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.dataset.item;

        if (btn.classList.contains("plus")) {
            ingredients[item]++;
        } else {
            ingredients[item] = Math.max(0, ingredients[item] - 1);
        }

        document.getElementById(item + "-count").textContent = ingredients[item];
    });
});

// Build the sandwich
document.getElementById("make-btn").addEventListener("click", () => {
    const sandwich = document.getElementById("sandwich");
    sandwich.innerHTML = "";
    sandwich.appendChild(makeLayer("item-bread"));

    // Add layers (top-most added last)
    for (let i = 0; i < ingredients.tomato; i++) {
        let layer = document.createElement("div");
        layer.className = "item-tomato";
        sandwich.appendChild(layer);
    }

    for (let i = 0; i < ingredients.cheese; i++) {
        let layer = document.createElement("div");
        layer.className = "item-cheese";
        sandwich.appendChild(layer);
    }

    for (let i = 0; i < ingredients.beef; i++) {
        let layer = document.createElement("div");
        layer.className = "item-beef";
        sandwich.appendChild(layer);
    }

    sandwich.appendChild(makeLayer("item-bread"));
});
function makeLayer(className) {
    const layer = document.createElement("div");
    layer.className = className;
    return layer;
}

