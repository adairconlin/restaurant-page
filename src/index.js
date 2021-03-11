import {navFunction, headerFunction, bodyFunction} from "./modules/home";
import {showMenu} from "./modules/menu";

window.onload = function() {
    navFunction();
    headerFunction();
    bodyFunction();
    showMenu();
}
