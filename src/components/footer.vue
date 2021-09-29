<template>
    <div>
        <div class="footer__bar">
            
            <!-- <div class="footer__social"> 
                <a href="https://www.facebook.com/HIRCasaMexico" target="_blank">
                    <box-icon type='logo' name='facebook' size='md' border='circle' class="footer__social--icon" />
                </a>
                <a href="https://www.instagram.com/hircasa/" target="_blank">
                    <box-icon type='logo' name='instagram' size='md' border='circle' class="footer__social--icon" />
                </a>
                <a href="https://twitter.com/HIRCASAMEXICO" target="_blank">
                    <box-icon type='logo' name='twitter' size='md' border='circle' class="footer__social--icon" />
                </a>
                <a href="https://mx.linkedin.com/company/hir-casa" target="_blank">
                    <box-icon type='logo' name='linkedin' size='md' border='circle' class="footer__social--icon" />
                </a>
            </div> -->
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
            text-align: center;

            &--icon {
                margin: 9px;
                background: #a1ce1f;
                border-radius: 40px;
                filter: invert(1);
            }
        }
        
    }
</style>