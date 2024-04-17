<template>
  <div id="mainContainer" class="mainContainer" @scroll="handleScroll" @wheel="handleWheel">
    <div class="spacer">
      <TimeAxis />
    </div>

    <ChannelRow v-for="(channel, key) in state.channels" :key="key">
      <Show v-for="(show, showKey) in channel.shows" :key="showKey" :data="show" :style="{ marginLeft: `${(TIMESLOTWIDTH * minutesDiff(show.start)) / 60}px` }" />
    </ChannelRow>
  </div>
</template>

<script>
import ChannelRow from "../channelrow/channelrow";
import Show from "../show/show";
import TimeAxis from "../timeaxis/timeaxis";
import { useContext, useEffect } from "vue";
import { ChannelsContext } from "../../contexts/channelscontext";
import moment from "moment";
import { TIMESLOTWIDTH, DEFAULTTIMESLOTS } from "../../settings/defaults";

export default {
  name: "main-container",
  components: { ChannelRow, Show, TimeAxis },
  setup() {
    const { state, dispatch } = useContext(ChannelsContext);

    useEffect(() => {
      dispatch({
        type: "LOADSHOWS",
        payload: {
          offset: DEFAULTTIMESLOTS,
          page: 1,
        },
      });
    }, [dispatch]);

    const isEnd = (el) => {
      return el.offsetWidth + el.scrollLeft === el.scrollWidth;
    };

    const handleScroll = (e) => {
      if (isEnd(e.target)) {
        dispatch({
          type: "LOADSHOWS",
          payload: {
            offset: DEFAULTTIMESLOTS,
            page: parseInt(state.offset / 24) + 1,
          },
        });
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      let container = document.getElementById("mainContainer");
      let containerScrollPosition = document.getElementById("mainContainer").scrollLeft;
      container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY,
        behavior: "smooth",
      });
    };

    const minutesDiff = (start) => {
      let beginning = moment(start).set({
        h: "00",
        m: "00",
      });
      return moment.duration(moment(start).diff(beginning)).asMinutes();
    };

    return {
      state,
      dispatch,
      handleScroll,
      handleWheel,
      TIMESLOTWIDTH,
      minutesDiff,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./maincontainer.scss";
</style>
