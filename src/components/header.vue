<template>
    <div>
        <div class="header__bar" />
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <div class="header__logo">
                        <img :src="logo" alt="logo">
                    </div>
                </div>
                <div class="col-6">
                    <div class="header__social d-flex align-items-center justify-content-end"> 
                        <box-icon type='logo' name='facebook' size='md' border='circle' class="header__social--icon" />
                        <box-icon type='logo' name='instagram' size='md' border='circle' class="header__social--icon" />
                        <box-icon type='logo' name='twitter' size='md' border='circle' class="header__social--icon" />
                        <box-icon type='logo' name='linkedin' size='md' border='circle' class="header__social--icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import logo from 'ASSETS/logo'

    export default {
        name: 'Header',
        data() {
            return {
                logo
            }
        }

    }
</script>

<style scoped lang="scss">
    .header {
        &__bar {
            background: #ff9a3c;
            height: 2vh;
        }

        &__logo {
            padding: 10px 0px 0px 30px;

            img {
                max-width: 25%;
                min-width: 25%;
            }
        }

        &__social {
            height: 12vh;
            float: right;
            right: 30px;
            position: relative;

            &--icon {
                margin: 9px;
                background: #a1ce1f;
                border-radius: 40px;
                filter: invert(1);
            }
        }
    }
</style>