const showMenu = () => {
    const menuBtn = document.querySelectorAll(".menu");
    //remove content
    menuBtn.forEach((e) => {
        e.addEventListener("click", function() {
            const content = document.getElementById("content");
            while(content.firstChild) {
                content.removeChild(content.lastChild);
            }
            //add content
            //menu page content
            const header = document.createElement("div");
            const title = document.createElement("h1");
            const mainRow = document.createElement("div");
            header.className = "container-fixed";
            header.id = "menuHeader";
            title.className = "menuTitle";
            title.textContent = "Lorem Ipsum Dolor:";
            mainRow.className = "row";
            mainRow.id = "menuRow";
            content.appendChild(header);
            header.appendChild(title);
            content.appendChild(mainRow);
            //creates three identically built divs
            for(let i = 0; i < 3; i++) {
                const menuCol = document.createElement("div");
                const image = document.createElement("img");
                const overlay = document.createElement("div");
                const menuTitle = document.createElement("p");
                const btnOverlay = document.createElement("div");
                const menuBtn = document.createElement("button");
                menuCol.className = "col-sm-4 menuCol";
                image.className = "menuImgs";
                overlay.className = "menuOverlay";
                menuTitle.className = "imgTitle textShadow";
                btnOverlay.className = "btnOverlay";
                menuBtn.className = "menuBtn2";
                menuBtn.textContent = "view menu";
                //different text content for each div
                if(i === 0) {
                    image.src = "img/breakfast.png";
                    menuTitle.textContent = "Breakfast";
                } else if(i === 1) {
                    image.src = "img/lunch.png";
                    menuTitle.textContent = "Lunch";
                } else if(i ===2) {
                    image.src = "img/dinner.png";
                    menuTitle.textContent = "Dinner";
                }
                mainRow.appendChild(menuCol);
                menuCol.appendChild(image);
                menuCol.appendChild(overlay);
                overlay.appendChild(menuTitle);
                menuCol.appendChild(btnOverlay);
                btnOverlay.appendChild(menuBtn);
            }
        })
    })
}

export {showMenu}