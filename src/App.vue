<template>
    <div id="app">
        <Header v-if="!process" />
        <Welcome v-if="!process" @process-thanks="processThanks"/>
        <thanks v-else />
        <Footer/>
    </div>
</template>

<script>

import Header from 'COMPONENTS/header'
import Welcome from 'PAGES/welcome'
import thanks from 'PAGES/thanks'
import Footer from 'COMPONENTS/footer'


export default {
    name: 'App',
    components: {
        Header,
        Welcome,
        thanks,
        Footer
    },
    data() {
        return {
            process: false
        }
    },
    methods: {
        processThanks(value) {
            this.process = value
        }
    },
    created() {
        console.log(process.env)
    }
}
</script>

<style>

</style>
