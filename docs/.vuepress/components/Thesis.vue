<template>
  <div>
    <ul><Publication v-bind:publication="thesis" /></ul>
    <p class="more">← <a href="../">Show all publications</a></p>
  </div>
</template>

<script>
import * as json from '../../thesis.json'

export default {
    created() {
        this.thesis = json.default
    },
}
</script>

<style lang="stylus" scoped>
.more
    text-align center
</style>
