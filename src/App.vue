<template>
    <div id="app">
        <Header />
        <Welcome />
    </div>
</template>

<script>

import Header from 'COMPONENTS/header'
import Welcome from 'PAGES/welcome'

export default {
    name: 'App',
    components: {
        Header,
        Welcome
    }
}
</script>

<style>

</style>
