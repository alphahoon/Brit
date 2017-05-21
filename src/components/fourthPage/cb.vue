<template>
    <div>
        <label class="btn btn-danger" style="margin: 4px;" v-on:click="checkWork">
            <span v-if="isChecked" class="glyphicon glyphicon-ok"></span>
        </label>
    </div>
</template>

<script>
export default{
    props:['participant', 'stepIdx'],
    data: function() {
      return  {
        isChecked: false
      }
    },
    methods: {
        checkWork: function() {
          this.isChecked = !this.isChecked;
          if (this.isChecked) {
            this.$store.commit('pushDistribution', {
              step: this.stepIdx,
              participant: this.participant
            });
          }
          else {
            this.$store.commit('removeDistribution', {
              step: this.stepIdx,
              participant: this.participant
            });
          }
          console.log(this.$store.state.participants)
        }
    }
}

</script>


<style>
.btn-danger {
  width: 30px;
  height: 30px;
}
</style>
