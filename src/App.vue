<template>
  <div class="App">
    <div class="epgContainer">
      <ChannelsPanel />
      <MainContainer />
    </div>
  </div>
</template>

<script>
import TopBar from './components/topbar/topbar';
import ChannelsPanel from './components/channelspanel/channelspanel';
import MainContainer from './components/maincontainer/maincontainer';
import { ChannelsProvider } from './contexts/channelscontext';

export default {
  components: {
    TopBar,
    ChannelsPanel,
    MainContainer
  },
};
</script>

<style scoped lang="scss">
@import './App.scss';
</style>
