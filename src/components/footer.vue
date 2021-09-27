<template>
    <div>
        <div class="footer__bar">
            
            <div class="footer__social d-flex align-items-center justify-content-end"> 
                <box-icon type='logo' name='facebook' size='md' border='circle' class="footer__social--icon" />
                <box-icon type='logo' name='instagram' size='md' border='circle' class="footer__social--icon" />
                <box-icon type='logo' name='twitter' size='md' border='circle' class="footer__social--icon" />
                <box-icon type='logo' name='linkedin' size='md' border='circle' class="footer__social--icon" />
            </div>
        </div>
    </div>
</template>

<script>

    import logo from 'ASSETS/logo'

    export default {
        name: 'Footer',
        data() {
            return {
                logo,
                
            }
        }

    }
</script>

<style scoped lang="scss">


    .footer {
        &__bar {
            background: #ff9a3c;
            height: 6vh;
        }

        &__social {
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