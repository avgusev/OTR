import "./channellisting.scss"
import { Tooltip } from "@material-ui/core"

// export component
export default {
  name: "channel-listing",
  functional: true,
  components: { Tooltip },
  render(h, c) {
    let { channel } = c.props
    const logo = `https://cdn.hd-plus.de/senderlogos/bright-cropped/${channel.groupID}.png`
    return (
      <tooltip title={channel.name} placement="right">
        <div class="channelListing" data-id={channel.groupID}>
          <img
            style={{
              width: "100%"
            }}
            alt={channel.name}
            src={logo}
          />
        </div>
      </tooltip>
    )
  }
}
