<template>
<div class="card">
    <img v-if="src" :src="src" :alt="alt" style="width:100%">
    <div class="container">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    props: ["src", "alt"]
};
</script>

<style lang="stylus" scoped>
.card
    background-color white
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.2)
    transition 0.3s
    margin 16px

.container
    padding 2px 16px
</style>
