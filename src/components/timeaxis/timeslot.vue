import { TIMESLOTWIDTH } from "../../settings/defaults"

// export component
export default {
  name: "time-slot",
  functional: true,
  render(h, c) {
    const props = c.props
    return (
      <div
        class="timeSlotContainer"
        style={{
          width: TIMESLOTWIDTH
        }}
      >
        <div class="timeSlot">
          <span class="label">{props.label}</span>
        </div>
      </div>
    )
  }
}
