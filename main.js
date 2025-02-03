const cardBody = document.getElementsByClassName('card__body')[0];
const expandBtn = document.getElementById("expand_btn");
const hideBtn = document.getElementById("hide_btn");
const arrowBtns = document.getElementsByClassName('arrow_btn');

let isTriggered = false;

const onUpdate = () => {
    const matchMobileQuery = window.matchMedia('(min-width:320px) and (max-width: 767px)');
    const childrens = cardBody.children.length;

    for (let i = 0; i < childrens; i++) {
        cardBody.children[i].style.display = 'flex';
    }

    if (!matchMobileQuery.matches && !isTriggered) {
        const columnSize = window.getComputedStyle(cardBody).gridTemplateColumns.split(' ').length * 2;

        for (let i = columnSize; i <= childrens - 1; i++) {
            cardBody.children[i].style.display = 'none';
        }
    }

    if (matchMobileQuery.matches) {
        for (let i = 0; i < arrowBtns.length; i++) {
            arrowBtns[i].style.display = 'none';
        }
    } else {
        expandBtn.style.display= !isTriggered ? "flex" : "none";
        hideBtn.style.display=isTriggered ? "flex" : "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    onUpdate();
});

window.addEventListener('resize', () => {
    onUpdate();
})

expandBtn.addEventListener('click', () => {
    isTriggered = true;
    onUpdate();

    // expandBtn.style.display = 'none';
    // hideBtn.style.display = 'flex';
});

hideBtn.addEventListener("click", function(){
    isTriggered=false;
    onUpdate();

    // expandBtn.style.display="flex";
    // hideBtn.style.display="none";

}) 