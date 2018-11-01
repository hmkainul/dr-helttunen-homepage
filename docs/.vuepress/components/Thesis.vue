<template>
    <Publication v-bind:publication="thesis" />
</template>

<script>
import * as json from '../../thesis.json'

export default {
    created() {
        this.thesis = json.default
    },
}
</script>
