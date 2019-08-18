<template>
  <img class="portrait" :src="$withBase('/' + src)" :alt="alt" />
</template>

<script>
export default {
  props: ["src", "alt"]
};
</script>

<style scoped>
.portrait {
  border: 1px solid #eaecef;
}
</style>
