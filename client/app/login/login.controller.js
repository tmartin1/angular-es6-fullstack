class LoginController {
    constructor () {
        this.credentials = {
            email: '',
            password: ''
        };
        this.loginOpts = {
            rememberMe: true,
            include: 'user'
        };
    }

    userLogin () {
        console.log('Logging in', this.credentials.email);
        // User.login(loginOpts, vm.credentials, function (user) {
        //     if (!user) {
        //         return console.log('User not logged in.');
        //     }
        //
        //     console.log('USER', user);
        // });
    }
}

export default LoginController;
