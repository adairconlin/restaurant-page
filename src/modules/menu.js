const showMenu = () => {
    const menuBtn = document.querySelectorAll(".menu");
    menuBtn.forEach((e) => {
        e.addEventListener("click", function() {
            const content = document.getElementById("content");
            while(content.firstChild) {
                content.removeChild(content.lastChild);
            }
            //add content
            const para = document.createElement("p");
            para.textContent = "test";
            para.id = "paragraph";
            para.style.color = "purple";
            content.appendChild(para);
        })
    })
}

export {showMenu}