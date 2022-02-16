const greetEl = document.querySelector('h1#greeting');
const inputTimeEl = document.querySelector('input#time');

document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
    let hour = parseInt(inputTimeEl.value, 10);
    greeting = greet(hour);
    displayMessage(greeting);
}

function greet(hour) {
    if (hour < 12) {
        return 'Good Morning';
    } else if (hour >= 17) {
        return 'Good Evening';
    }
    return 'Good afternoon';
}

function displayMessage(msg) {
    greetEl.textContent = msg;
}
