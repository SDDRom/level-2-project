export const reactiveFunctions = {
    checkPassword: function () {
        //this block of code function to show the password written down by the user
        signInCheckBox.classList.toggle('reveal_password');
        signInPasswordField.classList.toggle('reveal_password');
        if (signInPasswordField.classList.contains('reveal_password')) {
            signInPasswordField.type = 'text';
        } else {
            signInPasswordField.type = 'password';
        }
    },
    // End of show password

    // start of authentication script

    signIn: function (e) {
        e.preventDefault();
        let obtainedUser = JSON.parse(localStorage.getItem('User'));

        if (emailField.value == '' && signInPasswordField.value == '') {
            alert(`Email and password required`);
            emailField.focus();
            return
        }
        if (emailField.value == '') {
            alert(`Email required`);
            emailField.focus();
            return
        }
        if (signInPasswordField.value == '') {
            alert(`password required`);
            signInPasswordField.focus();
            return
        }

        for (const user of obtainedUser) {
            if (user.Email == emailField.value && user.password == signInPasswordField.value) {
                alert(`${user.Name} logged in with success`);
                window.location.replace('../pages/userProfile.html');
                return
            } else {
                alert(`password or email do not match`);
                continue
                return
            }
            return
        }

    },

    signUp: function (event) {
        event.preventDefault();
        const createdAccount = {
            Name: userName.value,
            Email: email.value,
            password: signUpPasswordField.value
        };
        let usersInLocalStorage = localStorage.getItem('User');
        if (usersInLocalStorage) {
            usersInLocalStorage = JSON.parse(usersInLocalStorage);
        } else {
            usersInLocalStorage = [];
        }

        //This block of code checks if the user has input values into input fields

        if (userName.value == '') {
            userName.focus();
            userName.style.outline = '1px solid red';
            alert('put in User name');
            userName.focus();
            if (userName.length <= 1) {
                userName.style.outline = '1px solid red';
            } else if (userName.length > 1) {
                userName.style.outline = '1px solid green';
            }
            return
        }
        if (email.value == '') {
            alert('put in User email');
            return
        }
        if (signUpPasswordField.value == '') {
            alert('put in password');
            return
        }
        // End of values check

        // this block of code checks if the user account exist in the system;
        for (const user of usersInLocalStorage) {
            if (user.Email == email.value && user.Name == userName.value) {
                alert('ACCOUNT EXIST');
                return
            }
        }
        for (const user of usersInLocalStorage) {
            if (user.Name == userName.value) {
                alert('USER EXIST');
                return
            }
        }
        for (const user of usersInLocalStorage) {
            if (user.Email == email.value) {
                alert('EMAIL EXIST');
                return
            }
        }
        // End of account checks

        usersInLocalStorage.push(createdAccount);
        localStorage.setItem('User', JSON.stringify(usersInLocalStorage));
        alert(`${userName.value} created successfully`);
        formElement.reset();
    }
};