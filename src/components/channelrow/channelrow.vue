import "./channelrow.scss"

// export component
export default {
  name: "channel-row",
  functional: true,
  render(h, c) {
    const props = c.props
    return <div class="channelRow">{c.children}</div>
  }
}