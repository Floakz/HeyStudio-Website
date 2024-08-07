const eachCard = document.querySelectorAll('.step-card')
const animationIncard = document.querySelectorAll('.animation-incard')



for (let card of eachCard) {
    card.addEventListener('mouseover', () => {
        let animation = card.querySelector('.animation-incard')
        let info = card.querySelector('.whatwebring-p-hidden')
        animation.classList.add('animation-incard-hidden')
        info.classList.add('whatwebring-p')
    })
}



for (let card of eachCard) {
    card.addEventListener('mouseout', () => {
        let animation = card.querySelector('.animation-incard')
        let info = card.querySelector('.whatwebring-p-hidden')
        animation.classList.remove('animation-incard-hidden')
        info.classList.remove('whatwebring-p')
    })
}

