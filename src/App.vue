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
                mockAccount: {
                    username: "ahmed",
                    password: "ahmed7"
                },

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
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>