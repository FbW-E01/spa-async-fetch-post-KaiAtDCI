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
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
        password: document.querySelector('#password'),
        message: document.querySelector('#message'),
        checkbox: document.querySelector('#checkbox'),
    }
}

async function extractAndPostUserData() {
    const userData = await extractUserData();
    return await postUserData(userData);
}

const form = document.querySelector('#submit-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    extractAndPostUserData().then(() => alert('Your information has been submitted'));
})