const user = prompt('Who are you?', '');

if (!user) {
    alert('Canceled!');
    } else if (user === 'Admin') {
        const password = prompt('Enter the password:', '');
        if (!password) {
            alert('Canceled!');
        } else if (password === 'Boss') {
            alert('Hello boss!');
        } else {
            alert('Incorrect password!');
        }
    } else {
        alert("I don't know you");
    }