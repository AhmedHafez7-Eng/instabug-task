<template>
    <div id="welcome">
        <div class="box">
            <h1>Welcome <span>{{getEmail()}}</span></h1>
            <img src="../assets/Instabug-icon.svg" alt="logo">
        </div>
        <router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link>
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
                localStorage.setItem("userEmail", "");
            },

            getEmail(){
                return localStorage.getItem("userEmail");
            }
        }
    }
</script>

<style lang="scss" scoped>
    #welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px 0;
        margin: 50px auto;
        background-color: inherit;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
        padding: 50px 30px;
        max-width: 1200px;

        .box{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px 0;
            margin: 0px auto;
            background-color: inherit;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
            padding: 50px 30px;
            width: 100%;
            h1 {
                // width: 45%;
                font-size: 52px;
                font-weight: 600;
                letter-spacing: 1px;
                text-align: center;
                color: #333;
                line-height: 1.5;
                text-align: left;
                align-self: flex-start;

                span {
                    display: block;
                    color: #00BFFF;
                    font-size: 32px;
                }
            }
            img{
                display: inline-block;
                width: 23%;
                height: auto;
            }    
        }
        a{
            text-decoration: none;
            color: #333;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 1px;
            text-align: center;
            line-height: 1.5;
            background-color: inherit;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
            padding: 10px 30px;
            border-radius: 5px;
        }
    }

    @media(max-width:768px){
        #welcome {
            padding: 30px;
            .box{
                flex-direction: column;
                h1 {
                    font-size: 32px;

                    span {
                        font-size: 24px;
                        word-break: break-word;
                    }
                }
                img{
                    width: 70%;
                    max-width: 600px;
                }    
            }
        }
    }
</style>