<template>
  <div class="channelListing" :data-id="channel.groupID">
    <Tooltip :title="channel.name" placement="right">
      <img :style="{ width: '100%' }" :alt="channel.name" :src="logo" />
    </Tooltip>
  </div>
</template>

<script>
import { Tooltip } from '@material-ui/core';

export default {
  name: 'ChannelListing',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  computed: {
    logo() {
      return `https://cdn.hd-plus.de/senderlogos/bright-cropped/${this.channel.groupID}.png`;
    }
  },
  components: {
    Tooltip
  }
};
</script>

<style scoped>
.channelListing {
  /* Add styles from channellisting.scss here */
}
</style>
