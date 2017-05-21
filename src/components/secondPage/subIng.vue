<template>
    <div v-if="mode === 'r'">
      <span class="hoverunit" v-on:click="changeButton">
      <img :src="selected? selectedSrc : unselectedSrc" alt="">
        {{ info.name }}
        <span style="color:#00BCD4">{{info.ramount * amount}} {{ info.runit }}</span>
      </span>
    </div>
    <div v-else>
      <span class="hoverunit" v-on:click="changeButton">
      <img :src="selected? selectedSrc : unselectedSrc" alt="">
        {{ info.name }}
        <span style="color:#00BCD4">{{info.pamount * amount}} {{ info.punit }}</span>
      </span>
    </div>
</template>

<script>
export default {
    props: ['info', 'amount', 'mode'],
    data: function () {
      return  {
        unselectedSrc: '../../../assets/unselected.png',
        selectedSrc: '../../../assets/selected.png',
        selected: false
      }
    },
    methods: {
      changeButton: function() {
        this.selected = !this.selected
      }
    }
}
</script>

<style scoped>
input {
    margin-right: 10px;
}

.hoverunit {
  cursor: pointer;
}

img {
  width: 23px;
  height: 23px;
  border: None;
  margin-right: 2px;
}

div {
  margin-top: 3px;
  margin-bottom: 3px;
}

</style>
