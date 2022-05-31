<template>
    <div id="app">
        <!-- <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link> -->
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: [
                    { email: "mohamed@instabug.com", password: "A12345678"  },
                    { email: "mohamed1@instabug.com", password: "A12345678" },
                    { email: "mohamed2@instabug.com", password: "A12345678" },
                    { email: "mohamed3@instabug.com", password: "A12345678" },
                    { email: "mohamed4@instabug.com", password: "A12345678" },
                    { email: "mohamed5@instabug.com", password: "A12345678" },
                    { email: "mohamed6@instabug.com", password: "A12345678" },
                    { email: "mohamed7@instabug.com", password: "A12345678" },
                ],

                isLoggedIn: localStorage.getItem("isLoggedIn"),
            }
        },
        mounted() {
            if(this.isLoggedIn == "false") {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            // logout() {
            //     this.authenticated = false;
            //     localStorage.setItem("isLoggedIn", "false");
            // }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap');
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        background-color: #F0F0F0;
        font-family: 'Roboto', sans-serif;
    }
</style>