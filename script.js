const Cap = document.querySelector('.cap')
const Letter = document.querySelector('.letter')
const Card1 = document.getElementById('card1')
const Card2 = document.getElementById('card2')
const Card3 = document.getElementById('card3')
const Card4 = document.getElementById('card4')

const CardList = [Card1, Card2, Card3, Card4]

// alert("ТАПАЙ ПО КОНВЕРТУ 😉")

let open = false
let pos = 0

Letter.addEventListener('click', () => {
    if (pos > CardList.length - 1) {
        alert("С ПРАЗДНИКОМ!🥳")
        return
    }

    if (!open) {
        Cap.classList.add('cap__open')
        open = true
    } else {
        CardList[pos].classList.add('card__open')
        pos += 1
    }
})