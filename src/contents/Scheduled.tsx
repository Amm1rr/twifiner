import cssText from "data-text:~contents/styles.css"
import type { PlasmoCSConfig } from "plasmo"
import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import { IoCalendarOutline } from "react-icons/io5"

import { readStorageAsBoolean, watchSettings } from "~storage"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*", "https://x.com/*"]
}

export const getRootContainer = () => {
  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      if (document.querySelector(`#scheduled-button`)) return
      const rootContainerParent = document.querySelector(
        `nav[aria-label="Primary"]`
      ) as HTMLElement

      if (rootContainerParent) {
        const rootContainer = document.createElement("div");        
        rootContainerParent.appendChild(rootContainer);
        resolve(rootContainer);
      }
    }, 137)
  })
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const ScheduledButton = () => {
  const [display, setDisplay] = useState(true)

  watchSettings(() => {
    readStorageAsBoolean("display_scheduled_button").then((value) => {
      setDisplay(value)
    })

  })

  return (
    display && (
      <a
        id="scheduled-button"
        href={`https://twitter.com/compose/tweet/unsent/scheduled`}
        aria-label="scheduled"
        className="flex items-center no-underline decoration-inherit text-inherit p-3 hover:bg-[#e7e7e8] hover:rounded-full hover: text-[#0f1419]"
        role="link">
        <IoCalendarOutline className="w-[22px] h-[22px]" />

      
          <span id="twifiner-scheduled-label" className="text-xl mx-5">Scheduled</span>
     
      </a>
    )
  )
}

export const render = async ({ anchor, createRootContainer }) => {
  const rootContainer = await createRootContainer()

  const root = createRoot(rootContainer)
  root.render(<ScheduledButton />)
}

export default ScheduledButton