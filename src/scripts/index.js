// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


async function postUserData(user) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        body: JSON.stringify(user),
    })
    const data = await response.json();
    console.log(data);
}

async function extractUserData() {
    return {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        message: document.querySelector('#message').value,
        checkbox: document.querySelector('#checkbox').value,
    }
}

async function extractAndPostUserData() {
    const userData = await extractUserData();
    console.log(userData)
    return await postUserData(userData);
}

const form = document.querySelector('#submit-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    extractAndPostUserData().then(() => alert('Your information has been submitted'));
})