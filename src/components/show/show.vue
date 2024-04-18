<template>
  <HtmlTooltip
    :title="tooltipContent"
    placement="top-start"
  >
    <div
      :class="['showContainer', getGenreClass(show.genreID)]"
      :style="{
        ...style,
        width: showWeight + 'px',
        backgroundColor: `rgba(76,57,196, ${opacity})`,
        color: showWeight < 500 ? '#2b3749' : '#ffffff'
      }"
    >
      <h3
        style="{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }"
      >
        {{ show.title }}
      </h3>
      <h5
        style="{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }"
      >
        {{ show.length }} минут
      </h5>
    </div>
  </HtmlTooltip>
</template>

<script>
import { Tooltip, withStyles } from '@material-ui/core';
import { TIMESLOTWIDTH } from '../../settings/defaults';
import slugify from 'slugify';
import moment from 'moment';

const HtmlTooltip = withStyles({
  tooltip: {
    backgroundColor: '#2b3749',
    color: 'rgba(255, 255, 255, 0.87)',
    maxWidth: 220,
    border: '1px solid #dadde9'
  }
})(Tooltip);

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      showWeight: (TIMESLOTWIDTH * this.data.length) / 60,
      opacity: parseFloat(this.showWeight / 1000).toFixed(2)
    };
  },
  computed: {
    show() {
      return this.data;
    },
    tooltipContent() {
      return {
        h2: `${this.show.title} -- <em>${this.show.length}мин</em>`,
        h3: `<em>${this.show.subtitle}</em>`,
        h4: [
          `Начало: ${moment(this.show.start).format('YYYY-MM-DD HH:mm')}`,
          `Окончание: ${moment(this.show.stop).format('YYYY-MM-DD HH:mm')}`,
          {
            div: {
              class: ['genre', this.getGenreClass(this.show.genreID)]
            },
            text: this.show.genre ? this.show.genre : this.show.genreID
          }
        ]
      };
    }
  },
  methods: {
    getGenreClass(genreID) {
      return slugify(genreID, {
        replacement: '',
        lower: true,
        remove: /[*+~.()'"!:@]/g
      });
    }
  }
};
</script>

<style scoped>
.showContainer {
  /* Add your showContainer styles here */
}
.genre {
  /* Add your genre styles here */
}
</style>
