import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import chroma from "chroma-js"

export default function Timeline({ item }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: chroma(item.color).alpha(0.02),
        color: "#333",
        boxShadow: `0 3px 0 ${item.color}`,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={item.date}
      iconStyle={{ background: `${item.color}`, color: "#fff" }}
      icon={item.icon}
    >
      <h4 className="vertical-timeline-element-title font-weight-bold">
        {item.title}
      </h4>
      <h5 className="vertical-timeline-element-subtitle font-weight-normal">
        {item.company}
      </h5>
      <p className="text-muted font-weight-normal">{item.desc}</p>
    </VerticalTimelineElement>
  )
}
