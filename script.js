document.addEventListener("DOMContentLoaded", () => {
    
    // 1. STATE: Keep track of ingredient counts
    let ingredients = {
        tomato: 0,
        cheese: 0,
        beef: 0
    };

    // 2. HELPER FUNCTION: Updates the visual sandwich
    function renderSandwich() {
    const sandwichContainer = document.getElementById("sandwich");
    sandwichContainer.innerHTML = ""; 

    // 1. TOP BUN
    let topBread = document.createElement("div");
    topBread.className = "item-bread";
    sandwichContainer.appendChild(topBread);

    // 2. INGREDIENTS LOOP
    for (const [key, count] of Object.entries(ingredients)) {
        for (let i = 0; i < count; i++) {
            let ingredientDiv = document.createElement("div");
            ingredientDiv.className = `item-${key}`; 

            // Subtle rotation only (No X or Y shifting)
            // Rotates randomly between -3deg and 3deg
            let randomRot = Math.random() * 6 - 3; 
            
            ingredientDiv.style.transform = `rotate(${randomRot}deg)`;

            sandwichContainer.appendChild(ingredientDiv);
        }
    }

    // 3. BOTTOM BUN
    // We reuse .item-bread but the CSS :last-child rule will fix the image if needed
    let bottomBread = document.createElement("div");
    bottomBread.className = "bread2-color";
    sandwichContainer.appendChild(bottomBread);
}

    // 3. EVENT LISTENERS: Plus (+)
    const plusButtons = document.querySelectorAll(".plus");
    plusButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.getAttribute("data-item");
            
            // Increment count
            ingredients[item]++;
            
            // Update text number
            document.getElementById(`${item}-count`).innerText = ingredients[item];
            
            // Update visual stack immediately
            renderSandwich();
        });
    });

    // 4. EVENT LISTENERS: Minus (-)
    const minusButtons = document.querySelectorAll(".minus");
    minusButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.getAttribute("data-item");

            if (ingredients[item] > 0) {
                ingredients[item]--;
                
                // Update text number
                document.getElementById(`${item}-count`).innerText = ingredients[item];
                
                // Update visual stack immediately
                renderSandwich();
            }
        });
    });

    // Initialize: Show the buns immediately on load (optional)
    renderSandwich();
});