import "./channelspanel.scss"
import ChannelListing from "../channellisting/channellisting"
import { ChannelsContext } from "../../contexts/channelscontext"
import {useContext} from "vue";

// export component
export default {
  name: "channels-panel",
  functional: true,
  components: { ChannelListing },
  render(h, c) {
    const { state } = useContext(ChannelsContext)

    const renderChannelsListings = () => {
      return state.channels.map((channel, key) => {
        const { name, groupID } = channel
        return (
          <channel-listing
            key={key}
            channel={{
              name: name,
              groupID: groupID
            }}
          />
        )
      })
    }

    return (
      <div class="channelsPanelContainer">
        <div class="spacer"></div>

        {renderChannelsListings()}
      </div>
    )
