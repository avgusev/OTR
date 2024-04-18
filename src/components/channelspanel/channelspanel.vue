<template>
  <div class="channelsPanelContainer">
    <div class="spacer"></div>
    <div v-for="(channel, key) in channels" :key="key">
      <ChannelListing :channel="{ name: channel.name, groupID: channel.groupID }" />
    </div>
  </div>
</template>

<script>
import ChannelListing from '../channellisting/channellisting.vue';
import { useChannelsContext } from '../../contexts/channelscontext';

export default {
  name: 'ChannelsPanel',
  components: {
    ChannelListing,
  },
  setup() {
    const { state } = useChannelsContext();
    return {
      channels: state.channels,
    };
  },
};
</script>

<style lang="scss" scoped>
.channelsPanelContainer {
  .spacer {
    // Add your styles here
  }
}
</style>
