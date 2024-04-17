import "./topbar.scss"
import { ChannelsContext } from "../../contexts/channelscontext"

// export component
export default {
  name: "top-bar",
  functional: true,
  render(h, c) {
    const { state } = useCountContext(ChannelsContext)
    return (
      <div class="topbarContainer">
        <span
          style={{
            color: "red",
            fontWeight: "bold"
          }}
        >
          {state.dateToDisplay}
        </span>
      </div>
    )
  }
}
