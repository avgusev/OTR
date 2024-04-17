import "./timeaxis.scss"
import TimeSlot from "./timeslot"
import { ChannelsContext } from "../../contexts/channelscontext"

// export component
export default {
  name: "time-axis",
  functional: true,
  components: { TimeSlot },
  render(h, c) {
    const { state } = useContext(ChannelsContext)

    const renderTimeSlots = () => {
      return [...Array(state.offset - (state.page - 1) * 24)].map(
        (item, key) => {
          let hourValue = key % 24
          return (
            <time-slot
              key={key}
              label={`${hourValue > 9 ? hourValue : `0${hourValue}`}:00`}
            />
          )
        }
      )
    }

    return <div class="timeAxisContainer">{renderTimeSlots()}</div>
  }
}