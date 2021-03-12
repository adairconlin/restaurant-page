import {navFunction, headerFunction, bodyFunction} from "./modules/home";
import {showMenu} from "./modules/menu";
import {showContact} from "./modules/contact";

window.onload = function() {
    navFunction();
    headerFunction();
    bodyFunction();
    showMenu();
    showContact();
}
