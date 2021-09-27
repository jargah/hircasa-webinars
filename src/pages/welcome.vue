<template>
    <div class="welcome">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center">
                    <div class="welcome__pleca">
                        <img :src="left" alt="left">
                    </div>
                    <div class="welcome__lady">
                        <img :src="circle_outside" alt="circle_outside" class="welcome__lady--circle">
                        <img :src="lady" alt="lady" class="welcome__lady--inside">
                    </div>
                    <div class="welcome__point">
                        <img :src="point_blank" alt="point">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="welcome__body">
                        <div class="welcome--title">
                            ¡BIENVENIDO!
                        </div>
                        <div>
                            <img src="" alt="">
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
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome__bar">
            <div class="welcome__circle">
                <img :src="circle" alt="circle">
            </div>
            <div class="welcome__point-orange">
                <img :src="point_orange" alt="point_orange">
            </div>
            <div class="welcome__circle-blue">
                <img :src="circle_blue" alt="circle_blue">
            </div>
            <div class="welcome--button">
                <v-btn 
                    depressed
                    rounded
                    color="#FFA726"
                    @click="openForm">
                    ¡QUIERO ASISTIR!
                </v-btn>
            </div>
        </div>
        <vs-dialog 
            prevent-close 
            v-model="dialog" 
            :loading="loading"
            class="welcome__vs-dialog">
            <template #header>
                <div class="container">
                    <div class="row">
                        <img :src="logo" alt="logo_modal" class="logo_modal">
                        <div class="col-12">
                            <div class="welcome__container-dialog">
                                <span>
                                    Aprender cómo tener una cosa antes de los 30, ahorrar para el futuro y 
                                    <br>
                                    mejorar tus finanzas es muy fácil, <span style="color: #2626ef;"><b>sólo déjanos tus datos:</b></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <b-alert
                :show="dismissCountDown"
                fade
                dismissible
                variant="danger"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
                >
                <div v-for="(key, index) of messages" :key="index">
                    <span>
                        {{ key }}
                    </span>
                    <br>
                </div>
                <br>
                La alerta se quitará en {{ dismissCountDown }} segundos...
            </b-alert>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            label="Nombre"
                            required
                             v-model="form.name"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            label="Apellido parterno"
                            required
                             v-model="form.last_name"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field
                            label="Apellido materno"
                            required
                             v-model="form.second_surname"
                        ></v-text-field>
                    </v-col>
                     <v-col cols="12">
                        <v-text-field label="Edad" required v-model="form.age" v-numeric maxlength="2"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Correo" required v-model="form.email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field label="Código Páis" required v-model="form.code" v-numeric maxlength="2" placeholder="Ejemplo: 52"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field label="Teléfono" required v-model="form.phone" v-numeric maxlength="10"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Universidad" required v-model="form.university"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Ciudad/Estado" required v-model="form.city"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
            
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <v-spacer></v-spacer>
                        <v-btn 
                            depressed
                            rounded
                            color="#2626ef"
                            @click="saveData">
                            <span style="color: #fff; font-family: 'poppinssemibold';">
                                ENVIAR
                            </span>
                        </v-btn>
                        
                    </div>
                </div>
            </div>
        </vs-dialog>

    </div>
</template>

<script>

    import logo from 'ASSETS/logo'

    import lady from 'ASSETS/lady'
    import circle_outside from 'ASSETS/contorno_circulo'
    import left from 'ASSETS/triangulo_left'
    import circle from 'ASSETS/circulo_naranja'
    import point_blank from 'ASSETS/point_blank'
    import point_orange from 'ASSETS/point_orange'
    import circle_blue from 'ASSETS/circle_blue'


    export default {
        name: 'welcome',
        data() {
            return {
                logo,
                dismissSecs: 5,
                dismissCountDown: 0,
                lady,
                circle_outside,
                left,
                circle,
                point_blank,
                point_orange,
                circle_blue,
                dialog: false,
                loading: false,
                form: {
                    name: null,
                    last_name: null,
                    second_surname: null,
                    age: null,
                    email: null,
                    phone: null,
                    code: null,
                    university: null,
                    city: null
                },
                messages: []
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            openForm() {
                this.dialog = true
            },
            saveData() {

                this.loading = true

                console.log(this.form)

                this.messages = []

                let error_request_data = false
                if(this.form.name === null) {
                    error_request_data = true
                    this.messages.push('El nombre es requerido')
                }

                if(this.form.last_name === null) {
                    error_request_data = true
                    this.messages.push('El apellido paterno es requerido')
                }

                if(this.form.second_surname === null) {
                    error_request_data = true
                    this.messages.push('El apellido materno es requerido')
                }

                if(this.form.age === null) {
                    error_request_data = true
                    this.messages.push('La edad es requerida')
                }

                if(this.form.email === null) {
                    error_request_data = true
                    this.messages.push('El correo es requerido')
                }

                if(this.form.code === null) {
                    error_request_data = true
                    this.messages.push('El código del país es requerido')
                }

                if(this.form.phone === null) {
                    error_request_data = true
                    this.messages.push('El teléfono es requerido')
                }

                if(this.form.university === null) {
                    error_request_data = true
                    this.messages.push('La universidad es requerida')
                }

                if(this.form.city === null) {
                    error_request_data = true
                    this.messages.push('La Ciudad/Estado es requerida')
                }

                if(error_request_data) {
                    this.loading = false
                    this.showAlert()
                    return
                }

                const data = {
                    nombre: this.form.name,
                    paterno: this.form.last_name,
                    materno: this.form.second_surname,
                    correo: this.form.email,
                    telefono: `${this.form.code}1${this.form.phone}`,
                    origen: `U-${this.form.university}`,
                    edad: this.form.age,
                    estado_estreno: this.form.city,
                    zona: 1,
                    vip: 0,
                    campaign_id: 0
                }

                let _this = this

                fetch('https://api-xapp.softbd.com.mx/Hircasa/Message/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZlcmVuY2UiOiJjb20uaGlyY2FzYS5jb20iLCJlbnYiOiJwcm9kdWN0aW9uIn0.N6i-VFRNscxHtrh4HZVQnyzZde3yOFjpfS1RmfsSEek'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json()) 
                .then(response => {
                    console.log(response)
                    _this.loading = false
                    _this.$emit('process-thanks', true)
                })

            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>

<style lang="scss" scoped>

    .logo_modal {
        position: absolute;
        max-width: 15%;
        min-width: 15%;
    }


    @media (min-width: 1200px) {
        .welcome {
            height: 80vh;

            &__bar {
                height: 15vh;
                background: rgba(0, 0, 0, 0.13);
                position: relative;
                top: 5px !important;
                z-index: 999;
            }
        }
    }

    .welcome {

        input {
            font-family: "poppinslight" !important;
        }

        &__container-dialog {
            position: relative;
            text-align: left;
            left: 20%;
            font-family: "poppinslight";
        }

        &__vs-dialog {
            background: orange;
        }

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
            position: relative;
            float: right;
            right: 30%;
            top: -15px;
        }

        &__body {
            position: relative;
            top: 15%;
            left: 10%;
        
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
            bottom: 75%;
            right: 50%; 

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

        &__point-orange {
            position: absolute;
            z-index: 10000;
            bottom: 78%;
            right: 0%;
        

            img {
                max-width: 55%;
                min-width: 55%;
            }   
        }

        &__circle-blue {
            position: absolute;
            z-index: 10000;
            bottom: 170%;
            right: 8%;
        

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
            height: 148px;
            background: rgba(0, 0, 0, 0.13);
            position: relative;
            top: -62px;
            z-index: 999;
        }
    }

</style>

