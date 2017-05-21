<template>
    <div class="labelClass">
        <div class="participantName">{{participant.name.slice(0, 5)}}</div>
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
              participant: this.idx
            });
          }
          else {
            this.$store.commit('removeDistribution', {
              step: this.stepIdx,
              participant: this.idx
            });
          }
          console.log(this.$store.state.participant)
           console.log(this.$store.state.distribution)
        }
    }
}

</script>


<style scoped>
.btn-danger {
  width: 30px;
  height: 30px;
}
.btn-success {
  width: 30px;
  height: 30px;
}
.btn-primary {
  width: 30px;
  height: 30px;
}
.btn-warning {
  width: 30px;
  height: 30px;
}

.labelClass{
    display:inline-block;
}

.participantName{
    text-align: center;
}
</style>
