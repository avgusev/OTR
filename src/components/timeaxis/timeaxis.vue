<template>
  <div class="timeAxisContainer">
    <TimeSlot v-for="(item, key) in timeSlots" :key="key" :label="`${hourValue > 9 ? hourValue : `0${hourValue}`}:00`" />
  </div>
</template>

<script>
import TimeSlot from './TimeSlot.vue';
import { ChannelsContext } from '../../contexts/channelscontext';

export default {
  components: {
    TimeSlot,
  },
  data() {
    return {
      timeSlots: [],
    };
  },
  computed: {
    state() {
      return this.$store.state; // Assuming Vuex is used for state management
    },
  },
  created() {
    this.generateTimeSlots();
  },
  methods: {
    generateTimeSlots() {
      this.timeSlots = [...Array(this.state.offset - (this.state.page - 1) * 24)].map((item, key) => {
        let hourValue = key % 24;
        return {
          key: key,
          label: `${hourValue > 9 ? hourValue : `0${hourValue}`}:00`,
        };
      });
    },
  },
};
</script>

<style scoped>
.timeAxisContainer {
  /* Add your styles here */
}
</style>
