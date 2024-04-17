import "./show.scss"
import { Tooltip, withStyles } from "@material-ui/core"
import { TIMESLOTWIDTH } from "../../settings/defaults"
import slugify from "slugify"
import moment from "moment"

// export component
export default {
  name: "show",
  functional: true,
  render(h, c) {
    const props = c.props
    const show = props.data
    let showWeight = (TIMESLOTWIDTH * show.length) / 60
    let opacity = parseFloat(showWeight / 1000).toFixed(2)
    return (
      <html-tooltip
        title={
          <div>
            <h2>
              {show.title} -- <em>{show.length}мин</em>
            </h2>
            <h3>
              <em>{show.subtitle}</em>
            </h3>
            <h4>Начало: {moment(show.start).format("YYYY-MM-DD HH:mm")} </h4>
            <h4>Окончание: {moment(show.stop).format("YYYY-MM-DD HH:mm")} </h4>
            <h4>
              <div
                class={`genre ${slugify(show.genreID, {
                  replacement: "",
                  lower: true,
                  remove: /[*+~.()'"!:@]/g
                })}`}
              ></div>
              {show.genre ? show.genre : show.genreID}
            </h4>
          </div>
        }
        placement="top-start"
      >
        <div
          class={`showContainer ${slugify(show.genreID, {
            replacement: "",
            lower: true,
            remove: /[*+~.()'"!:@]/g
          })}`}
          style={{
            ...props.style,
            width: showWeight,
            backgroundColor: `rgba(76,57,196, ${opacity})`,
            color: showWeight < 500 ? "#2b3749" : "#ffffff" //to contras with the background
          }}
        >
          <h3
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
          >
            {show.title}
          </h3>
          <h5
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
          >
            {show.length} минут
          </h5>
        </div>
      </html-tooltip>
    )
  }
}
