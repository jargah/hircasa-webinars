<template>
    <div class="welcome">
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 text-center">
                    <div class="welcome__pleca">
                        <img :src="left" alt="left">
                    </div>
                    <div class="welcome__lady">
                        <img :src="circle_outside" alt="circle_outside" class="welcome__lady--circle">
                        <img :src="lady" alt="lady" class="welcome__lady--inside">
                    </div>
                    <div class="welcome__circle">
                        <img :src="circle" alt="circle">
                    </div>
                    <div class="welcome__point">
                        <img :src="point_blank" alt="point">
                    </div>
                </div>
                <div class="col-6">
                    <div class="welcome__body">
                        <div class="welcome--title">
                            ¡BIENVENIDO!
                        </div>
                        <div class="welcome--description">
                            Aprovecha la unión de tu universidad con 
                            <br>
                            <b>Hir Casa</b> y entra al contenido exclusivos
                            <br>
                            que hemos preparado para ti:
                        </div>
                        <br>
                        <div class="welcome--list">
                            <ul>
                                <li>
                                    Ahorrar para independizarme
                                </li>
                                <li>
                                    SAT: Impuestos para principiantes
                                </li>
                                <li>
                                    Financial welness
                                </li>
                                <li>
                                    Creando fondo de emergencias
                                </li>
                                <li>
                                    El A.B.C del ahorro
                                </li>
                            </ul>
                        </div>
                        <br>
                        <div class="welcome--description">
                            Da click en el botón y registrate!
                        </div>
                        <div class="welcome--button">
                            <v-btn 
                                depressed
                                rounded>
                                ¡QUIERO ASISTIR!
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome__bar"></div>
    </div>
</template>

<script>

    import lady from 'ASSETS/lady'
    import circle_outside from 'ASSETS/contorno_circulo'
    import left from 'ASSETS/triangulo_left'
    import circle from 'ASSETS/circulo_naranja'
    import point_blank from 'ASSETS/point_blank'

    export default {
        name: 'welcome',
        data() {
            return {
                lady,
                circle_outside,
                left,
                circle,
                point_blank
            }
        }
    }
</script>

<style lang="scss" scoped>

    .welcome {

        height: 80vh;

        &--title {
            font-family: "poppinssemibold";
            font-size: 35px;
            color: #5b30bf;
        }

        &--description {
            font-family: "poppinslight";
            font-size: 15px;
        }

        &--list {
            font-family: "poppinslight";
            font-weight: bold;
            font-size: 15px;

            ul {
               list-style: none;
            }

            ul li::before {
                content: "\2022";
                color: rgb(248, 129, 99);
                font-weight: bold;
                display: inline-block; 
                width: 1em;
                margin-left: 0em;
            }
        }

        &--button {

        }

        &__body {
            position: relative;
            top: 15%;
        
        }

        &__pleca {

            position: absolute;
            float: right;
            top: 50px;
            right: 1px;

            img {
                max-width: 60%;
                min-width: 60%;
            }   
        }

        &__circle {

            position: absolute;
            float: right;
            bottom: 35px;
            right: 1px;

            img {
                max-width: 50%;
                min-width: 50%;
            }   
        }

        &__point {

            position: absolute;
            z-index: 10000;
            bottom: 25px;
            left: 34%;
        

            img {
                max-width: 55%;
                min-width: 55%;
            }   
        }

        &__lady {
            &--inside {
                max-width: 80%;
                min-width: 80%;
            }

            &--circle {
                
                position: absolute;
                top: -25px;
                left: 45px;
                max-width: 85%;
                min-width: 85%;
            }
        }

        &__bar {
            height: 15vh;
            background: rgba(0, 0, 0, 0.13);
            position: relative;
            top: -62px;
            z-index: 999;
        }
    }

</style>

