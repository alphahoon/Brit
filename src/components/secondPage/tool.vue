<template>
<div><img src="../../../assets/tooldot.png" alt="">{{ info }}</div>
</template>

<script>
export default {
    props: ['info']
}
</script>

<style scoped>
img {
  width: 6px;
  height: 6px;
  border: None;
  margin-right: 4px;
}

div {
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>
