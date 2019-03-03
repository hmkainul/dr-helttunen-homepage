<template>
<div>
  <div class="row">

    <div class="left">
      <Card src="portrait.jpg" alt="Dr Helttunen">
        <Profile />
      </Card>
      <Card>
        <Contact />
      </Card>
      <Card>
        <Links />
      </Card>
    </div>

    <div class="right">
      <Card src="sunset.jpg" alt="Picture of Lake Jyvaskyla">
        <Marext />
      </Card>
      <Card>
        <h2>Recent Publications</h2>
        <Publications top="5" />
      </Card>
    </div>

  </div>
</div>
</template>

<style lang="stylus">
.row
    max-width 1400px
    display flex
    flex-wrap wrap
    margin auto

.left
    flex-grow 1
    flex-basis 34%
    max-width 34%

.right
    flex-grow 1
    flex-basis 66%
    max-width 66%

@media (max-width: 719px)
    .left
    .right
        max-width 100%
</style>
