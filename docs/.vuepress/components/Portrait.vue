<template>
    <img class="shadow" :src="$withBase('/' + src)" :alt="alt" />
</template>

<script>
export default {
    props: ["src", "alt"]
}
</script>

<style lang="stylus" scoped>
.shadow
    box-shadow 0 4px 8px 0 rgb(0,0,0,0.2)
    box-shadow 0 6px 20px 0 rgba(0,0,0,0.19)
</style>
