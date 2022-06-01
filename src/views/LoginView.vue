<template>
    <div id="login">
        <div class="sliderBx" id="sliderBx">
            <div class="slideshow__container js-slideshow">
                <!-- <img
                v-for="(slide, index) in slides"
                v-bind:src="slide.url"
                :key="index"
                :class="{ active: isActive(index) }"
                @mouseover="stopRotation"
                @mouseout="startRotation"
                alt="slide"
                /> -->
                <img
                src="../assets/slider1.svg"
                :class="{ active: isActive(0) }"
                @mouseover="stopRotation"
                @mouseout="startRotation"
                alt="slide"
                />
                <img
                src="../assets/slider2.svg"
                :class="{ active: isActive(1) }"
                @mouseover="stopRotation"
                @mouseout="startRotation"
                alt="slide"
                />
                <img
                src="../assets/slider3.svg"
                :class="{ active: isActive(2) }"
                @mouseover="stopRotation"
                @mouseout="startRotation"
                alt="slide"
                />
            </div>
             <p id="desc" v-for="(slide, index) in slides"
                :key="index" :class="{ active: isActive(index) }">{{slide.desc}}</p>

            <div class="bullets">
                <span id="bullet" v-for="(slide, index) in slides"
                    :key="index" :class="{ active: isActive(index) }" @click="selectSlide(index)"></span>
            </div>
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

            <div class="separator"></div>

            <div class="formBx">

                <p class="message" v-if="message">{{message}}</p>

                <!-- <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </p> -->

                <div class="inputBx">
                    <label>Work Email</label>
                    <input type="text" id="email" name="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$" placeholder="you@company.com" v-model="emailField">
                </div>
                <div class="inputBx">
                    <label class="passLabel">Password <span><a href="#">Forgot password?</a></span></label>
                    <input type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$" id="password" name="password" placeholder="6+ Characters" v-model="passwordField">
                </div>
                <div class="inputBx">
                    <button type="submit" v-on:click="login()" name="submit" v-bind:disabled="emailField === '' || passwordField===''">Log in</button>
                </div>
                <div class="info">
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                    <p><a href="#">Login via SSO</a></p>
                </div>
                <p>Trusted by the top companies</p>
                <div class="imgBx">
                    <img src="../assets/login1.png" alt="Img">
                    <img src="../assets/login2.png" alt="Img">
                    <img src="../assets/login3.webp" alt="Img">
                    <img src="../assets/login4.png" alt="Img">
                    <img src="../assets/login5.png" alt="Img">
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
// import { required, email, minLength } from 'vuelidate/lib/validators';
    export default {
        name: 'LoginView',
        data() {
            return {
                current: 0,
                slides: [
                        {url:"slider1.svg", desc:'Accelerate your entire mobile team workflow'},
                        {url:'slider2.svg', desc:'the most comprehensive bug reporting tool for mobile apps'},
                        {url:'slider3.svg', desc:'secure crash reporting with real-time alerts'},
                        ],
                speed: 3000,
                timer: null,
                message: '',
                disableButton: true,
                emailField: "",
                passwordField: "",
                // errors: [],
            }
        },
        methods: {

        // =========== Slider Methods ===========
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
            selectSlide: function(i) {
                this.current = i;
                this.resetPlay();
            },
            resetPlay: function() {
                clearInterval(this.timer);
                this.startRotation();
            },

            // =========== Login Method ===========
            login() {

                if(this.emailField != "" && this.passwordField != "") {
                    for(let i = 0; i < this.$parent.mockAccount.length; i++) {
                        if(this.emailField == this.$parent.mockAccount[i].email && this.passwordField == this.$parent.mockAccount[i].password) {
                            this.$emit("authenticated", true);
                            localStorage.setItem("isLoggedIn", true);
                            localStorage.setItem("userEmail", this.emailField);
                            this.$router.replace({ name: "welcome" });
                            break;
                        } else {
                            // console.log("The email and / or password is incorrect");
                            this.message = "The email and / or password is incorrect";
                        }
                    }
                } else {
                    // console.log("email and password are required");
                    this.message = "email and password are required";
                }
            },

            // =========== Form Validation ===========
            
        },
        mounted: function () {
            this.startRotation();
        },
        // validations: {
        //     emailField: {
        //         required,
        //         email,
        //     },
        //     passwordField: {
        //         required,
        //         minLength: minLength(6),
        //     },
        // },
    }
</script>

<style lang="scss" scoped>

    #login {
        background-color: #FFF;
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
            .bullets{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 30px 0;
                gap: 0 15px;

                #bullet{
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: grey;
                    cursor: pointer;

                    &.active {
                        background-color: #FFF;
                    }
                }
            }
        }

        .loginBx {
            width: 50%;
            box-shadow: 0px 0px 2px rgba(0,0,0,0.2);
            background-color: #FFF;
            padding: 50px 30px;

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
        
           .socialBtns{
                margin-top: 40px;
                display: flex;
                flex-direction: column;
                gap: 10px 0;
                justify-content: center;
                align-items: center;

                .btn {
                    max-width: 500px;
                    width: 100%;
                    position: relative;
                    background-color: #111;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    gap: 10px 0;
                    padding: 10px;
                    border-radius: 5px;
                    color: #FFF;
                    font-size: 18px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: all 0.3s;
                    border: 1px solid lightgray;

                    &:hover {
                        color: #FFF;
                    }
                    &:first-child {
                        background-color: #2375f8;
                    }
                    &:nth-child(2) {
                        background-color: #333;
                    }
                    &:last-child {
                        background-color: #f0f0f0;
                        color: #111;
                    }
                    img{
                        position: absolute;
                        top: 50%;
                        left: 0;
                        width: 25px;
                        height: 25px;
                        transform: translateY(-50%);
                        margin-left: 20px;
                    }
                }
            }

            .separator {
                margin-top: 40px;
                width: 100%;
                height: 1px;
                background-color: lightgray;
                text-align: center;
                line-height: 0;

                &::after {
                    content: "OR";
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    background-color: #FFF;
                }
            }

            .formBx{
                margin-top: 30px;
                display:flex;
                flex-direction: column;
                background-color: #FFF;
                gap: 20px 0;
                padding: 0 40px;

                .message{
                    margin-top: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    color: red;
                    text-transform: capitalize;
                }

                .inputBx {
                    display: flex;
                    flex-direction: column;
                    gap: 10px 0;
                    // justify-content: center;
                    // align-items: center;
                    padding: 10px;
                    font-size: 18px;

                    label{
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 1px;
                    }
                    label.passLabel{
                        display:flex;
                        justify-content: space-between;
                        align-items: center;

                        a{
                            color: #777;
                            font-size: 14px;
                            font-weight: 500;
                            letter-spacing: 1px;
                            text-decoration: none;
                            transition: all 0.3s ease;

                            &:hover {
                                color: #2375f8;
                            }
                        }
                    }
                    input[type="text"],
                    input[type="password"] {
                        padding: 10px 15px;
                        border: 1px solid lightgray;
                        border-radius: 3px;
                        font-size: 16px;
                    }
                    button[type="submit"]{
                        color: #FFF;
                        font-size: 18px;
                        font-weight: 500;
                        letter-spacing: 1px;
                        padding: 10px;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: all 0.3s;
                        border: 1px solid lightgray;
                        text-transform: capitalize;

                        &:disabled {
                            opacity: 0.9;
                            background-color: #CCC;
                            cursor: not-allowed;
                        }

                        &:valid {
                            background-color: #2375f8;
                        }
                    }
                }
                .info{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    text-align: center;
                    margin-top: -30px;

                    a{
                        color: #2375f8;
                        font-size: 14px;
                        font-weight: 600;
                        letter-spacing: 1px;
                        text-decoration: none;
                        transition: all 0.3s ease;
                    }

                    &+p{
                        width: 100%;
                        margin: 10px 0;
                        text-align: center;
                        color: #777;
                        letter-spacing: 1px;
                    }
                }
                .imgBx{
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
                    align-items: center;
                    gap: 10px;
                    margin-top: 20px;
                    width: 100%;
                    height: 100%;
                    background-color: #FFF;
                    img {
                        width: 80px;
                        height: 80px;
                        object-fit: contain;
                        filter: grayscale(100%);
                        opacity: 0.5;

                        &:first-child {
                            width: 50px;
                            height: 50px;
                        }

                        &:hover {
                        cursor: pointer;
                    }
                    }
                }
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