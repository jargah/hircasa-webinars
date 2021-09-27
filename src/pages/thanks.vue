<template>
    <div class="thanks">
        <div class="container h-100">
            <div class="row d-flex align-items-center h-100">
                <div class="col-12 text-center">
                    <div class="thanks__title">
                        <span>
                            ¡GRACIAS POR REGISTRARTE!
                        </span>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <div class="thanks__subtitle">
                        <span>
                            Espera los próximos correos con más información
                            <br>
                            sobre finanzas salidables.
                        </span>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <div class="thanks__slogan">
                        <span>
                            Contruye un mejor futuro con HIR Casa.
                        </span>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <img :src="logo" alt="logo">
                </div>
                <div class="thanks__point-orange">
                    <img :src="point_orange" alt="point_orange">
                </div>
                <div class="thanks__circles">
                    <img :src="circles" alt="point_circles">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import logo from 'ASSETS/logo'
    import circles from 'ASSETS/circles'
    import point_orange from 'ASSETS/point_orange'

    export default {
        name: 'thanks',
        data() {
            return {
                logo,
                circles,
                point_orange
            }
        }   
    }
</script>

<style lang="scss" scoped>
    .thanks {
        height: 80vh;

        &__title {
            font-family: "poppinssemibold";
            font-size: 35px;
            color: #5b30bf;
        }

        &__subtitle {
            font-family: "poppinslight";
            font-size: 20px;
        }

        &__slogan {
            font-family: "poppinssemibold";
            font-size: 20px;
            font-weight: 700;
            color: orange;
        }

        &__circles {
            
            position: absolute;
            z-index: 10000;
            bottom: 6%;
            float: right;
            right: -20%;
        

            img {
                max-width: 55%;
                min-width: 55%;
            }   
        }

        &__point-orange {
            
            position: absolute;
            z-index: 10000;
            bottom: 15%;
            left: 10%;
        

            img {
                max-width: 55%;
                min-width: 55%;
            }   
        }
    }
</style>