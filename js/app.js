const eachCard = document.querySelectorAll('.step-card');

for (let card of eachCard) {
    card.addEventListener('mouseover', handleMouseOverOut);
    card.addEventListener('mouseout', handleMouseOverOut);
    card.addEventListener('click', handleClick);
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
    animation.classList.toggle('animation-incard-hidden');
    info.classList.toggle('whatwebring-p');
}


