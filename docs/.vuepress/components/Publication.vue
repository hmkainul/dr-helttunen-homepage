<template>
  <li>
    <span v-html="publication.authors"></span><br>
    <a v-bind:href="publication.link"><span v-html="publication.title" class="title"></span><OutboundLink /></a>
      <span v-if="publication['phd']"><a href="thesis/"><Badge text="Ph.D. Thesis"/></a></span><br>
    <span v-html="publication.citation"></span>
    <span v-if="publication['doi']">doi:{{publication.doi}}</span>
    <span v-if="publication['image']"><img v-bind:src="$withBase('/' + publication.image)" alt="Graphical Abstract" /></span>
    <span v-if="publication['graphicalAbstract']" class="abstract">{{publication.graphicalAbstract}}</span>
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

.abstract
    font-style italic

li
    margin-bottom 16px

img
    max-width 100%
    display block
    margin-left auto
    margin-right auto
</style>
