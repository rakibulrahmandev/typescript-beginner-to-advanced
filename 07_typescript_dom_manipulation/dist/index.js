const form = document.querySelector('form');
// you can also declare this why:
// const formdata: HTMLFormElement | null = document.querySelector('form');
const username = document.getElementById('name');
// you can also declare this why:
// const username: HTMLInputElement | null = document.getElementById('#name');
const password = document.getElementById('password');
// you can also declare this why:
// const password: HTMLInputElement | null = document.getElementById('#password');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        userName: username.value,
        passCode: password.value,
    };
    console.log(data);
});
export {};
