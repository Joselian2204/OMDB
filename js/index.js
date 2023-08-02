import Cards from './cards.js';
import Checker from './checker.js';


window.addEventListener("DOMContentLoaded",() => {
    const submitBtn = document.querySelector(".btn-search")

    const cards = new Cards();
    
    cards.getMoviesExample();

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        const checker = new Checker();
        checker.verifyInput();
    })
})