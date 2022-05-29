<template>
    <div id="welcome">
        <router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        <h1>Welcome Area</h1>
        <p>
            This is a welcome area
        </p>
    </div>
</template>

<script>
    export default {
        name: 'WelcomeView',
        data() {
            return {
                authenticated: true,
            };
        },
        methods: {
            logout() {
                this.authenticated = false;
                localStorage.setItem("isLoggedIn", "false");
            }
        }
    }
</script>

<style lang="scss" scoped>
    #welcome {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>