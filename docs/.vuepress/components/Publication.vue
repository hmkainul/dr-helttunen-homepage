<template>
  <li>
    <span v-html="publication.authors"></span><br>
    <a v-bind:href="publication.link"><span v-html="publication.title" class="title"></span><OutboundLink /></a>
      <span v-if="publication['phd']"><Badge text="Ph.D. Thesis"/></span><br>
    <span v-html="publication.citation"></span>
    <span v-if="publication['doi']">doi:{{publication.doi}}</span>
  </li>
</template>

<script>
export default {
    props: ["publication"]
}
</script>

<style lang="stylus" scoped>
.title
    font-weight bold

li
    margin-bottom 16px
</style>
