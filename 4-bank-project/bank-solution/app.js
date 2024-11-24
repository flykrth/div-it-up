function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
        return navigate('/login');
    }

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
    // document.title = window.location.pathname;
}

function navigate(path) {
    window.history.pushState({}, path, path);
    updateRoute();
}

function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
}

async function register() {
    const registerForm = document.getElementById('registerForm');
    const formData = new FormData(registerForm);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    const result = await createAccount(jsonData);
    if (result.error) {
      return console.log('An error occurred:', result.error);
    }
    console.log('Account created!', result);
}
async function createAccount(account) {
    try {
        const response = await fetch('//localhost:5000/api/accounts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: account
        });
        return await response.json();
    } catch (error) {
        errorMessage();
        return { error: error.message || 'Unknown error' };
    }
}

function errorMessage() {
    var error = document.getElementById("error")
    error.textContent = "Username already exists."
    error.style.color = "red"
}

const routes = {
    '/login': { templateId: 'login' },
    '/dashboard': { templateId: 'dashboard' },
    '/credits': { templateId: 'credits' },
};

updateRoute('login');
window.onpopstate = () => updateRoute();
updateRoute();