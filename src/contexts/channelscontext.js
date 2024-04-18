<template>
  <!-- ChannelsProvider component -->
  <ChannelsContext.Provider :value="{ state, dispatch }">
    <slot></slot>
  </ChannelsContext.Provider>
</template>

<script>
import { reactive, provide } from 'vue';
import ChannelsDataset from '../assets/data/channels';
import shows1 from '../assets/data/1';

import { filter } from 'lodash';
import moment from 'moment';
import { DEFAULTCHANNELSNUMBER, DEFAULSTARTDATE, DEFAULDISPLAYDATE } from '../settings/defaults';

const showsPages = {
  shows1: shows1
};

const initialState = {
  channels: [],
  offset: 0,
  page: 1,
  dateToDisplay: DEFAULSTARTDATE.format('ll').valueOf()
};

const ChannelsContext = Symbol('ChannelsContext');

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADSHOWS':
      if (action.payload.page > 6) return state; //preventive statement for our specific case of 6 datasets

      let dateToDisplay = DEFAULDISPLAYDATE.clone().add(action.payload.page - 1, 'days').format('LL').valueOf();

      let offsetTimeEnd = DEFAULSTARTDATE.add(
        action.payload.offset - (action.payload.page - 1) * 24,
        'hours'
      ).add(action.payload.page - 1, 'days');

      let channelsTemp = [];
      [...Array(DEFAULTCHANNELSNUMBER)].map((item, key) => {
        let channel = ChannelsDataset.result.channels[key];

        //get the shows that are only less than a certain initial time
        let shows = filter(
          showsPages[`shows${action.payload.page}`].result,
          show => {
            return (
              show.channelID === channel.groupID &&
              moment(show.stop).isBefore(offsetTimeEnd)
            );
          }
        );

        channel.shows = shows; //filling the shows inside their respective channel
        channelsTemp = [...channelsTemp, channel];
      });

      return {
        ...state,
        channels: channelsTemp,
        offset: state.offset + action.payload.offset,
        page: action.payload.page,
        dateToDisplay: dateToDisplay
      };

    default:
      return state;
  }
};

export default {
  setup() {
    const state = reactive(initialState);
    provide(ChannelsContext, { state, dispatch: action => state.value = reducer(state.value, action) });
  }
};
</script>
