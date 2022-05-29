<template>
    <div id="login">
        <p v-if="message">{{message}}</p>
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>

    export default {
        name: 'LoginView',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                message: '',
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        localStorage.setItem("isLoggedIn", true);
                        this.$router.replace({ name: "welcome" });
                    } else {
                        console.log("The username and / or password is incorrect");
                        this.message = "The username and / or password is incorrect";
                    }
                } else {
                    console.log("username and password are required");
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>