const showContact = () => {
    const contactBtn = document.querySelectorAll(".contact");
    //remove content
    contactBtn.forEach((e) => {
        e.addEventListener("click", function() {
            const content = document.getElementById("content");
            while(content.firstChild) {
                content.removeChild(content.lastChild);
            }
            //add content
            //first contact section
            const header = document.createElement("div");
            const title = document.createElement("h1");
            const contactDiv = document.createElement("div");
            const contactCol = document.createElement("div");
            const faqBtn = document.createElement("button");
            const mainList = document.createElement("ul");
            header.className = "row";
            header.id = "contactHeader";
            title.className = "contactTitle";
            title.textContent = "Contact Us";
            contactDiv.className = "row";
            contactDiv.id = "contactDiv";
            contactCol.className = "col-sm-5";
            contactCol.id = "contactCol";
            faqBtn.className = "contactBtn";
            faqBtn.textContent = "FAQ:";
            mainList.className = "listFix";
            content.appendChild(header);
            header.appendChild(title);
            content.appendChild(contactDiv);
            contactDiv.appendChild(contactCol);
            contactCol.appendChild(faqBtn);
            contactCol.appendChild(mainList);
            //FAQ question list items
            for(let i = 0; i < 4; i++) {
                const item = document.createElement("li");
                item.className = "faqList";
                if(i === 0) {
                    item.textContent = "Lorem ipsum dolor sit amet?";
                } else if(i === 1) {
                    item.textContent = "Donec imperdiet velit ligula?";
                } else if(i === 2) {
                    item.textContent = "Sed quis porttitor mauris?";
                } else if(i === 3) {
                    item.textContent = "Morbi sodales mauris quis nulla?";
                }
                mainList.appendChild(item);
            }
            //Second Column
            const contactCol2 = document.createElement("div");
            const locateBtn = document.createElement("button");
            locateBtn.className = "contactBtn";
            locateBtn.textContent = "Find Nearby Location:";
            contactCol2.className = "col-sm-5";
            contactCol2.id = "contactCol";
            contactDiv.appendChild(contactCol2);
            contactCol2.appendChild(locateBtn);
            //creates two input boxes for user
            for(let i = 0; i < 2; i++) {
                const label = document.createElement("label");
                const input = document.createElement("input");
                label.className = "para";
                input.type = "text";
                if(i === 0) {
                    label.textContent = "City, State:"
                } else if(i === 1) {
                    label.textContent = "Zipcode:";
                }
                contactCol2.appendChild(label);
                contactCol2.appendChild(input);
            }
            //second contact section
            const contactDiv2 = document.createElement("div");
            const contactCol3 = document.createElement("div");
            const contBtn = document.createElement("button");
            contactDiv2.className = "row";
            contactDiv2.id = "contactDiv";
            contactCol3.className = "container";
            contactCol3.id = "contactCol";
            contBtn.className = "contactBtn emailBtn";
            contBtn.textContent = "Email Us:";
            content.appendChild(contactDiv2);
            contactDiv2.appendChild(contactCol3);
            contactCol3.appendChild(contBtn);
            //input column
            const emailCol = document.createElement("div");
            emailCol.className = "container";
            emailCol.id = "contactCol";
            contactDiv2.appendChild(emailCol);
            //creates two input boxes
            for(let i = 0; i < 2; i++) {
                const emLabel = document.createElement("label");
                const emInput = document.createElement("input");
                emInput.type = "text";
                if(i === 0) {
                    emLabel.className = "para";
                    emLabel.textContent = "Your Email:";
                    emInput.className = "emailInput"
                } else if(i === 1) {
                    emLabel.textContent = "Message:";
                    emLabel.className = "para paraEmail";
                    emInput.className = "emailMsg";
                }
                emailCol.appendChild(emLabel);
                emailCol.appendChild(emInput);
            }
        })
    })
}

export {showContact}