const eachCard = document.querySelectorAll('.step-card');

// Detect if the user is on a mobile device
const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;

for (let card of eachCard) {
    if (isMobile) {
        // On mobile, use click event
        card.addEventListener('click', handleClick);
    } else {
        // On desktop, use mouseover and mouseout events
        card.addEventListener('mouseover', handleMouseOverOut);
        card.addEventListener('mouseout', handleMouseOverOut);
    }
}

function handleMouseOverOut(e) {
    const animation = e.currentTarget.querySelector('.animation-incard');
    const info = e.currentTarget.querySelector('.whatwebring-p-hidden');

    if (e.type === 'mouseover') {
        animation.classList.add('animation-incard-hidden');
        info.classList.add('whatwebring-p');
    } else if (e.type === 'mouseout') {
        animation.classList.remove('animation-incard-hidden');
        info.classList.remove('whatwebring-p');
    }
}

function handleClick(e) {
    const animation = e.currentTarget.querySelector('.animation-incard');
    const info = e.currentTarget.querySelector('.whatwebring-p-hidden');

    // Toggle the visibility on click
    animation.classList.toggle('animation-incard-hidden');
    info.classList.toggle('whatwebring-p');
}
