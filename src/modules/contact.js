const showContact = () => {
    const contactBtn = document.querySelectorAll(".contact");
    contactBtn.forEach((e) => {
        e.addEventListener("click", function() {
            const content = document.getElementById("content");
            while(content.firstChild) {
                content.removeChild(content.lastChild);
            }
            //add content
            const para = document.createElement("p");
            para.textContent = "test contact";
            para.id = "paragraph";
            para.style.color = "purple";
            content.appendChild(para);
        })
    })
}

export {showContact}