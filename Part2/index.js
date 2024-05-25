const inputCardId = document.querySelector('#cardId');
const inputCardStyle = document.querySelector('#cardStyle');

const setCard = () => {
    const card = document.querySelector(`#${inputCardId.value}`);
    card.style.color = inputCardStyle.value;
}

document.querySelector('#editCard').addEventListener('click', setCard);