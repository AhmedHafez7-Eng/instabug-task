<template>
    <div id="notfound">
        <div class="pyramids">
            <div class="triangle-top"></div>
            <div class="triangle-top"></div>
            <div class="triangle-top"></div>
        </div>
        <div class="trees">
            <div id="tree">
                <div style="width: 0;
                            height: 0;
                            border-left: 20px solid transparent;
                            border-right: 20px solid transparent;
                            border-bottom: 40px solid #CCC;
                            border-radius: 50%;"></div>
                <div style="margin-left: 20px; margin-top: -1px; height:2em; width:2px; background-color:rgb(165 163 163);"></div>
            </div>
            <div id="tree" style="margin-left: -30px;">
                <div style="width: 0;
                            height: 0;
                            border-left: 20px solid transparent;
                            border-right: 20px solid transparent;
                            border-bottom: 40px solid #CCC;
                            border-radius: 50%;"></div>
                <div style="margin-left: 20px; margin-top: -1px; height:1em; width:2px; background-color:rgb(165 163 163);"></div>
            </div>
            <div id="tree">
                <div style="width: 0;
                            height: 0;
                            border-left: 20px solid transparent;
                            border-right: 20px solid transparent;
                            border-bottom: 40px solid #CCC;
                            border-radius: 50%;"></div>
                <div style="margin-left: 20px; margin-top: -1px; height:2em; width:2px; background-color:rgb(165 163 163);"></div>
            </div>
            <div id="tree">
                <div style="width: 0;
                            height: 0;
                            border-left: 20px solid transparent;
                            border-right: 20px solid transparent;
                            border-bottom: 40px solid #CCC;
                            border-radius: 50%;"></div>
                <div style="margin-left: 20px; margin-top: -1px; height:2em; width:2px; background-color:rgb(165 163 163);"></div>
            </div>
            <div id="tree">
                <div style="width: 0;
                            height: 0;
                            border-left: 20px solid transparent;
                            border-right: 20px solid transparent;
                            border-bottom: 40px solid #CCC;
                            border-radius: 50%;"></div>
                <div style="margin-left: 20px; margin-top: -1px; height:1em; width:2px; background-color:rgb(165 163 163);"></div>
            </div>
            <div id="tree" style="margin-right: -50px;">
                <div style="width: 0;
                            height: 0;
                            border-left: 30px solid transparent;
                            border-right: 30px solid transparent;
                            border-bottom: 70px solid #CCC;
                            border-radius: 50%;"></div>
                <div style="margin-left: 30px; margin-top: -1px; height:2em; width:2px; background-color:rgb(165 163 163);"></div>
            </div>
            <div id="tree">
                <div style="width: 0;
                            height: 0;
                            border-left: 20px solid transparent;
                            border-right: 20px solid transparent;
                            border-bottom: 40px solid #CCC;
                            border-radius: 50%;"></div>
                <div style="margin-left: 20px; margin-top: -1px; height:2em; width:2px; background-color:rgb(165 163 163);"></div>
            </div>
        </div>
        <div class="clouds">
            <div class="cloud-circle"></div>
            <div class="cloud-circle"></div>
            <div class="cloud-circle"></div>
        </div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="text">
            <h2>404 - Page Not Found</h2>
            <p>Sorry, that page doesn't exist.<br>What would you like to do?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotfoundPage',
        data() {
            return {};
        }
    }
</script>

<style lang="scss" scoped>
    #notfound {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 870px;
        width: 870px;
        height: 450px;
        background-color: inherit;
        margin: 70px auto;
        position: relative;
        overflow-x: hidden;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);

        &::before{
            content: '';
            position: absolute;
            top: 10px;
            left: 30px;
            width: 200px;
            height: 200px;
            background-color: lightblue;
            z-index: -1;
            border-radius: 50%;
            opacity: 0.4;
        }

        .trees{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            gap: 40px;
            // flex-wrap: wrap;
            width: 100%;
            position: absolute;
            bottom: 75px;
            z-index: 10;
            border-bottom: 1px solid darkgray;
        }
        
        .pyramids{
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 5;
        
            .triangle-top {
                width: 0;
                height: 0;
                border-left: 220px solid transparent;
                border-right: 220px solid transparent;
                border-bottom: 300px solid rgb(209, 207, 207);
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                &:nth-child(1) {
                    left: 0px;
                }

                &:nth-child(2) {
                    left: 200px;
                }

                &:nth-child(3) {
                    left: 400px;
                }

                &::before{
                    content: '';
                    width: 0;
                    height: 0;
                    border-left: 220px solid transparent;
                    border-right: 220px solid transparent;
                    border-bottom: 300px solid rgb(230, 230, 166);
                    position: absolute;
                    // top: 50%;
                    // transform: translateY(-50%);
                    left: -230px;
                }
            }
        }

        .clouds{

            // position: relative;
            // z-index: 8;

            .cloud-circle {
                width: 250px;
                height: 175px;
                background: #000;
                border-radius: 50%;
                filter: url(#filter);
                box-shadow: 350px 350px 40px 0px #efefef; /* Increase shadow offset */
                position: absolute; /* Take the parent out of the document flow */
                top: -320px; /* Move a little down */
                left: -320px; /* Move a little right */
                z-index: 30; /* Put it behind the other elements */
                opacity: 0.5; /* Make it a bit transparent */

                &:nth-child(1) {
                    opacity: 0.7; /* Make it a bit transparent */
                    box-shadow: 650px 350px 20px 0px #efefef; /* Increase shadow offset */
                }

                &:nth-child(2) {
                    box-shadow: 850px 300px 70px 0px #bbbbbb; /* Increase shadow offset */
                    opacity: 0.8; /* Make it a bit transparent */
                }
            }
        }
        .lines{
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            position: absolute;
            bottom: 20px;
            left: 30px;
            .line{
                width: 70px;
                height: 1px;
                background-color: #CCC;
                z-index: -2;

                &:nth-child(even) {
                    width: 30px;
                }

                &:nth-child(3),
                &:nth-child(5),
                &:nth-child(7),
                &:nth-child(22),
                &:nth-child(29){
                    opacity: 0;
                }
                &:nth-child(4),
                &:nth-child(17),
                &:nth-child(12),
                &:nth-child(19),
                &:nth-child(27),
                &:nth-child(36){
                    width: 15px;
                }
            }
        }
        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70%;
            z-index: 10;
            color: #AAA;
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            line-height: 1.5;
            h2{
                font-size: 3rem;
                font-weight: bold;
                text-transform: uppercase;
                color: rgb(19, 63, 184);
            }
            p{
                font-size: 1.5rem;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 1.5;
            }
        }
    }








    @media(max-width:991px){
        #notfound {
            width: 99%;
        }
    }
</style>