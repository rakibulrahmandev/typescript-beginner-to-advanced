const form = document.querySelector('form') as HTMLFormElement;

// you can also declare this why:
// const formdata: HTMLFormElement | null = document.querySelector('form');

const username = document.getElementById('name') as HTMLInputElement;

// you can also declare this why:
// const username: HTMLInputElement | null = document.getElementById('#name');

const password = document.getElementById('password') as HTMLInputElement;

// you can also declare this why:
// const password: HTMLInputElement | null = document.getElementById('#password');

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const data = {
        userName: username.value,
        passCode: password.value,
    };
    console.log(data);
});