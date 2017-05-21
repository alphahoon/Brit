<template>
    <div>
        <label class="btn" :class="bgColor" style="margin: 4px;" v-on:click="checkWork">
            <span v-if="isChecked" class="glyphicon glyphicon-ok"></span>
        </label>
    </div>
</template>

<script>
export default{
    props:['participant', 'idx', 'stepIdx'],
    computed: {
      bgColor: function () {
            if(this.idx == 0){
                return 'btn-success'
            } else if(this.idx == 1){
                return 'btn-primary'
            } else if(this.idx == 2){
                return 'btn-warning'
            } else if(this.idx == 3){
                return 'btn-danger'
            }
        }
    },
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
