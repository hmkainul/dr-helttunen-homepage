<template>
<div>
    <Search v-if="search"/>
    <Publication v-for="(publication, index) in publications" v-if="!top || index < top" v-bind:publication="publication" :key="index"/>
</div>
</template>

<script>
import * as json from '../../publications.json'

export default {
    created() {
        this.publications = json.default
    },
    props: ["top", "search"]
}
</script>
