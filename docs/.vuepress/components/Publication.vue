<template>
  <p>
    <span v-html="publication.authors"></span><br>
    <a v-bind:href="publication.link" class="large"><span v-html="publication.title"></span><OutboundLink /></a>
      <span v-if="publication['phd']"><Badge text="Ph.D. Thesis"/></span><br>
    <span v-html="publication.citation"></span>
    <span v-if="publication['doi']">doi:{{publication.doi}}</span>
  </p>
</template>

<script>
export default {
    props: ["publication"]
}
</script>

<style lang="stylus" scoped>
.large
    font-size 18px
</style>
