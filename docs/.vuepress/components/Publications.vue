<template>
<div>
    <ol reversed :start="publications.length">
        <Publication v-for="(publication, index) in publications" v-if="!top || index < top" v-bind:publication="publication" :key="index"/>
    </ol>
    <p v-if="top" class="more"><a href="publications/">More</a> →</p>
</div>
</template>

<script>
import * as json from '../../publications.json'

export default {
    created() {
        this.publications = json.default
    },
    props: ["top"]
}
</script>

<style lang="stylus" scoped>
.more
    text-align center
</style>
