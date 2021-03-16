const content = document.getElementById("content");
//adds content to navigationbar
const navFunction = () => {
    //navbar and title
    const navDiv = document.getElementById("navDiv");
    const titleDiv = document.createElement("div");
    const col1 = document.createElement("div");
    const title = document.createElement("h1");
    titleDiv.className = "row";
    titleDiv.id = "navBar";
    col1.className = "col-sm-5";
    col1.id = "btnDiv";
    title.textContent = "Lorem Ipsum";
    title.id = "reloadBtn";
    navDiv.appendChild(titleDiv);
    titleDiv.appendChild(col1);
    col1.appendChild(title);
    //navbuttons
    const col2 = document.createElement("div");
    const tabs = document.createElement("div");
    const list = document.createElement("ul");
    col2.className = "col-sm-5";
    col2.id = "btnDiv";
    tabs.className = "tabs";
    list.className = "nav nav-tabs";
    titleDiv.appendChild(col2);
    col2.appendChild(tabs);
    tabs.appendChild(list);
    //adding multiple nav buttons
    for(let i = 0; i < 4; i++) {
        const navBtns = document.createElement("li");
        const alink = document.createElement("a");
        const dropDiv = document.createElement("div");
        const item1 = document.createElement("a");
        const item2 = document.createElement("a");
        navBtns.className = "nav-item dropdown";
        alink.className = "nav-link dropdown-toggle";
        alink.id = "mytabs";
        alink.dataset.toggle = "dropdown";
        alink.textContent = "nav btn";
        dropDiv.className = "dropdown-menu";
        item1.className = "dropdown-item menu";
        item2.className = "dropdown-item contact";
        item1.id = "dropdown-tab-tabs-above-1";
        item2.id = "dropdown-tab-tabs-above-2";
        item1.textContent = "Option a";
        item2.textContent = "Option b";
        list.appendChild(navBtns);
        navBtns.appendChild(alink);
        alink.appendChild(dropDiv);
        dropDiv.appendChild(item1);
        dropDiv.appendChild(item2);
    }
    //reload home function
    const reloadHome = document.getElementById("reloadBtn");
    reloadHome.addEventListener("click", function() {
        while(content.firstChild) {
            content.removeChild(content.lastChild);
        }
        //add home content
        headerFunction();
        bodyFunction();
    })
}

//adds content to the body
const headerFunction = () => {
    //background
    const headerDiv = document.createElement("div");
    const image = document.createElement("img");
    headerDiv.className = "container-fixed";
    headerDiv.id = "header";
    image.id = "horizontal";
    image.src = "img/horizontal.png";
    content.appendChild(headerDiv);
    headerDiv.appendChild(image);
    //text overlay
    const overlay = document.createElement("div");
    const title = document.createElement("p");
    const subtitle = document.createElement("p");
    overlay.className = "overlay";
    title.id = "title";
    title.className = "textShadow";
    title.textContent = "Lorem Ipsum";
    subtitle.id = "subtitle";
    subtitle.className = "textShadow";
    subtitle.textContent = "Nam elit sapien, convallis at pulvinar nec, eleifend condimentum urna.";
    headerDiv.appendChild(overlay);
    overlay.appendChild(title);
    overlay.appendChild(subtitle);
}

const bodyFunction = () => {
    const mainBody = document.createElement("div");
    //first column
    const col1 = document.createElement("div");
    const header = document.createElement("p");
    const menuBtn = document.createElement("button");
    mainBody.className = "row";
    mainBody.id = "intro";
    col1.className = "col-sm-8";
    col1.id = "introCol";
    header.id = "headerText";
    header.textContent = "Nullam dui libero.";
    menuBtn.id = "menuBtn";
    menuBtn.textContent = "view menu"
    content.appendChild(mainBody);
    mainBody.appendChild(col1);
    col1.appendChild(header);
    //creates 3 paragraphs
    for(let i = 0; i < 3; i++) {
        const box = document.createElement("div");
        const para = document.createElement("p");
        box.className = "container-fixed";
        box.id = "paraBox";
        para.id = "paragraph";
        //decides the text content for each paragraph
        if(i === 0) {
            para.textContent = "Pellentesque porta elit eget magna faucibus at pretium risus malesuada."
        } else if(i === 1) {
            para.textContent = "Curabitur laoreet interdum nisl tincidunt mattis. Phasellus venenatis nisl dui, at porttitor elit dignissim a."
        } else if(i === 2) {
            para.textContent = "Vivamus vitae convallis magna.";
            para.style.fontSize = "3vw";
            para.style.fontWeight = "600";
        } else {
            para.textContent = "error"
        }
        col1.appendChild(box);
        box.appendChild(para);
    }
    col1.appendChild(menuBtn);
    //second column
    const col2 = document.createElement("div");
    const image = document.createElement("img");
    col2.className = "col-sm-4";
    col2.style.padding = "0";
    image.id = "vertical";
    image.src = "img/vertical.png";
    mainBody.appendChild(col2);
    col2.appendChild(image);
}

export {
    navFunction,
    headerFunction,
    bodyFunction
}