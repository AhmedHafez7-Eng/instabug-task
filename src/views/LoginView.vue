<template>
    <div id="login">
        <div class="sliderBx" id="sliderBx">
            <div class="slideshow__container js-slideshow">
                <img
                v-for="(slide, index) in slides"
                :key="index"
                :src="slide.url"
                :class="{ active: isActive(index) }"
                @mouseover="stopRotation"
                @mouseout="startRotation"
                />
            </div>
             <p id="desc" v-for="(slide, index) in slides"
                :key="index" :class="{ active: isActive(index) }">{{slide.desc}}</p>
        </div>
        <div class="loginBx">

            <div class="header">
                <img src="../assets/Instabug-icon.svg" alt="instabug-icon">
                <h3>Log in to Instabug </h3>
            </div>

            <div class="socialBtns">
                <div class="btn">
                    <img src="../assets/google.png" alt="google-icon">
                    <p>Google</p>
                </div>
                <div class="btn">
                    <img src="../assets/github.svg" alt="github-icon">
                    <p>Github</p>
                </div>
                <div class="btn">
                    <img src="../assets/microsoft.png" alt="microsoft-icon">
                    <p>Microsoft</p>
                </div>
            </div>


            <!-- <p v-if="message">{{message}}</p>
        <h1>Login</h1>
        <input type="text" name="email" v-model="input.email" placeholder="Email Address" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button> -->
        </div>
    </div>
</template>

<script>

    export default {
        name: 'LoginView',
        data() {
            return {

                current: 0,
                slides: [
                        {url:'https://svgshare.com/i/hrB.svg', desc:'Accelerate your entire mobile team workflow'},
                        {url:'https://svgshare.com/i/hrA.svg', desc:'the most comprehensive bug reporting tool for mobile apps'},
                        {url:'https://svgshare.com/i/hrV.svg', desc:'secure crash reporting with real-time alerts'},
                        ],
                speed: 3000,
                timer: null,

                input: {
                    username: "",
                    password: ""
                },
                message: '',
            }
        },
        methods: {

            startRotation: function () {
                this.timer = setInterval(this.next, this.speed);
            },
            stopRotation: function () {
                clearTimeout(this.timer);
                this.timer = null;
            },
            next: function () {
                var current = this.current;
                var next = current + 1;

                if (next > this.slides.length - 1) {
                    next = 0;
                }
                this.current = next;
                this.setActive(this.current);
            },
            prev: function () {
                var current = this.current;
                var prev = current - 1;

                if (prev < 0) {
                    prev = this.slides.length -1;
                }

                this.current = prev;
                this.setActive(this.current);
            },
            isActive: function (slide) {
                return this.current === slide;
            },
            setActive: function (slide) {
                this.current = slide;
            },

            login() {
                if(this.input.email != "" && this.input.password != "") {

                    for(let i = 0; i < this.$parent.mockAccount.length; i++) {
                        if(this.input.email == this.$parent.mockAccount[i].email && this.input.password == this.$parent.mockAccount[i].password) {
                            this.$emit("authenticated", true);
                            localStorage.setItem("isLoggedIn", true);
                            this.$router.replace({ name: "welcome" });
                            break;
                        } else {
                            // console.log("The email and / or password is incorrect");
                            this.message = "The email and / or password is incorrect";
                        }
                    }
                } else {
                    console.log("email and password are required");
                }
            }
        },
        mounted: function () {
            this.startRotation();
        }
    }
</script>

<style lang="scss" scoped>

    #login {
        background-color: #FFF;
        // padding: 10px;
        display: flex;
        min-height: 100vh;

        .sliderBx {
            width: 50%;
            box-shadow: 0px 0px 2px rgba(0,0,0,0.2);
            background-color: #062F79;
            padding: 50px 30px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 35px 0;

            /* Slideshow styling ----- */
            .slideshow__container {
                overflow: hidden;
                position: relative;
                padding-top: calc(9 / 16 * 100%);
                // min-width: 400px;
                width: 100%;
                height: 0;
            
                img {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0;
                    transition: opacity 1s;
                }
                img:hover {
                    cursor: pointer;
                }
                
                img.active {
                    opacity: 1;
                }
            }

            #desc {
                display: none;
                opacity: 0;
                color: #FFF;
                font-size: 30px;
                line-height: 1.5;
                text-align: center;
                text-align:center;
                text-transform: capitalize;
                transition: opacity 1s;
            }
            #desc.active {
                opacity: 1;
                display: block;
            }
        }

        .loginBx {
            width: 50%;
            box-shadow: 0px 0px 2px rgba(0,0,0,0.2);
            background-color: #FFF;
            padding: 50px 30px;
        
            img{
                width: 30px;
            }
        }

        .header{
            display: flex;
            flex-direction: column;
            align-items: center;

                img {
                    width: 100px;
                    height: 100px;
                }

                h3 {
                    margin-top: 20px;
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: 1px;
                }
        }
    }


        @media(max-width: 800px) {
            #login{
                flex-direction: column;
                .sliderBx,
                .loginBx {
                    width: 100%;
                }
                .loginBx {
                    order: 1;
                }
                .sliderBx {
                    order: 2;
                }
            }
        }

        @media(max-width: 450px) {
           #login{
               .sliderBx{
                    #desc {
                        font-size: 20px;
                    }
                }
           }
        }
</style>