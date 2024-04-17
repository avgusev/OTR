<template>
  <div class="timeSlotContainer" :style="{ width: TIMESLOTWIDTH + 'px' }">
    <div class="timeSlot">
      <span class="label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
import { TIMESLOTWIDTH } from '../../settings/defaults';

export default {
  name: 'TimeSlot',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      TIMESLOTWIDTH,
    };
  },
};
</script>

<style scoped>
.timeSlotContainer {
  /* Add any necessary styles */
}

.timeSlot {
  /* Add any necessary styles */
}

.label {
  /* Add any necessary styles */
}
</style>
