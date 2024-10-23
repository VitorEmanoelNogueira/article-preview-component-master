const button = document.querySelector('.button--share');

button.addEventListener('click', showShare);
button.addEventListener('touch', showShare);

function showShare() {
    const shareSection = document.querySelector('.share-section')
    const iconDesign = document.querySelector('.button-icon__design');

    shareSection.style.display = (shareSection.style.display === "none" || shareSection.style.display === "") ? "flex" : "none";

    iconDesign.style.fill = (iconDesign.style.fill === "white") ? "#6E8098" : "white";


    if(button.classList.contains('bg--desatured-dark-blue') === true){
        button.classList.remove('bg--desatured-dark-blue');
        button.classList.toggle('bg--light-grayish-blue')
        button.blur();
    }else{
        button.classList.remove('bg--light-grayish-blue');
        button.classList.toggle('bg--desatured-dark-blue');
    }
}


