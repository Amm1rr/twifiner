import "./styles.css"

import {
  readStorageAsBoolean,
  readStorageAsString,
  watchSettings
} from "~storage"
import * as utils from "~utils"

export const config = {
  matches: ["https://twitter.com/*", "https://x.com/*"]
}

const items = [
  //global
  {
    // "increase zindex",
    page: "",
    xpath: '//header//h1[@role="heading"]/ancestor::div[1]',
    applyStyle: (element) => {
      element.style.zIndex = 50
    }
  },

  {
    // "move_account_menu_to_top",
    page: "",
    xpath: '//div[@aria-label="Account menu"]/ancestor::div[2]',
    applyStyle: async (element) => {
      try {
        if (element.classList.contains("twifiner-account-menu")) return
        //const value = await readStorageAsBoolean("move_account_menu_to_top")
        const container = element.parentElement
        container.style.justifyContent = "flex-start"
        container.removeChild(element)
        element.classList.add("twifiner-account-menu")
        container.prepend(element)
      } catch (error) {}
    }
  },

  {
    // "display_logo_button",
    page: "",
    xpath: "//header//a[@aria-label='X']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_logo_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_explore_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Search and explore']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_explore_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_grok_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Grok']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_grok_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_lists_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Lists']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_lists_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_bookmarks_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Bookmarks']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_bookmarks_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_communities_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Communities']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_communities_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_premium_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Premium']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_premium_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_drafts_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Drafts']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_drafts_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_scheduled_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Scheduled']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_scheduled_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_settings_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Settings']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_settings_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_analytics_button",
    page: "",
    xpath: "//nav[@aria-label='Primary']//a[@aria-label='Analytics']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_analytics_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_more_button",
    page: "",
    xpath: "//div[@aria-label='More menu items']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_more_button")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_trends_panel",
    page: "",
    xpath:
      "//div[@data-testid='sidebarColumn']//div[@aria-label='Timeline: Trending now']/ancestor::*[3]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_trends_panel")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_whoToFollow_panel",
    page: "",
    xpath:
      "//div[@data-testid='sidebarColumn']//aside[@aria-label='Who to follow']/ancestor::*[2]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_whoToFollow_panel")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_ads_tweets",
    page: "",
    xpath: "//span[text()='Ad']/ancestor::div[@data-testid='cellInnerDiv']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_ads_tweets")
        element.style.display = value ? "block" : "none"
      } catch (error) {}
    }
  },
  {
    // "clean_tweet_text",
    page: "",
    xpath: "//div[@data-testid='tweetText']/span[not(*)]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("clean_tweet_text")
        const text = element.textContent;        
        const normalizedText = utils.cleanupText(text)
        element.textContent = normalizedText
      } catch (error) {}
    }
  },
  {
    // "Right to left layout for RTL languages",
    page: "",
    xpath: "//div[@data-testid='tweetText']",
    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("make_rtl")
        const text = element.innerText        

        const isRtl = await utils.isRTL(text)
        if (isRtl) {
          element.style.fontFamily = "Vazirmatn";
          element.style.direction = "rtl"
          element.style.textAlign = "right"
        } else {
          element.style.direction = "ltr"
          element.style.textAlign = "left"
        }
      } catch (error) {}
    }
  },
  {
    // "replace links with titles",
    page: "",
    xpath: '//div[@data-testid="cellInnerDiv"]//a[@target]',
    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("replace_link_with_title")
        element.style.textDecoration = "none"

        const url = element.href
        if (!url.startsWith("https://t.co")) return
        const finalUrl = await utils.getFinalUrl(url)

        if (finalUrl) element.href = finalUrl

        if (element.closest("[data-testid='card.wrapper']")) return

        const title = await utils.getTitle(finalUrl)
        element.textContent = title ? title : finalUrl
      } catch (error) {}
    }
  },
  {
    // "display_premium_panel",
    page: "",
    xpath:
      "//div[@data-testid='sidebarColumn']//aside[@aria-label='Subscribe to Premium']/ancestor::*[1]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_premium_panel")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_footer_panel",
    page: "",
    xpath:
      "//div[@data-testid='sidebarColumn']//nav[@aria-label='Footer']/ancestor::*[1]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_footer_panel")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_messages_box",
    page: "",
    xpath: "//div[@data-testid='DMDrawer']",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_messages_box")
        if (value) {
          element.style.display = "flex"
          element.style.transform = ""
        } else {
          element.style.display = "none"
        }
      } catch (error) {}
    }
  },
  {
    // "display_usernames_in_timeline",
    page: "",
    xpath:
      "//div[@data-testid='User-Name']//*[starts-with(text(),'@')]/ancestor::*[3]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean(
          "display_usernames_in_timeline"
        )
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "change_hashtags_styles",
    page: "",
    xpath: "//a[starts-with(text(),'#')]",
    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("change_hashtags_styles")

        element.textContent = element.textContent.replace("#", "")
        element.style.cssText = `
                font-weight: 400;
                font-size: 13px;
                color: #1f2937;
                text-decoration: none;
                background-color: #f3f4f6;
                border-radius: 5px;
                padding: 2px 8px;`

        element.addEventListener("mouseenter", () => {
          element.classList = []
        })
        element.addEventListener("mouseleave", () => {
          element.classList = []
        })
      } catch (error) {}
    }
  },
  {
    // "remove_repetitive_emojies",
    page: "",
    xpath: "//div[@data-testid='tweetText']",
    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("remove_repetitive_emojies");
        if (element && element.children) {
          const children = Array.from(element.children)
          children.forEach((currentChild, index) => {
            const nextChild = children[index + 1]
            if (nextChild === undefined) return
            if (
              currentChild &&
              currentChild.tagName === "IMG" &&
              nextChild &&
              nextChild.tagName === "IMG"
            ) {
              if (currentChild.src === nextChild.src) {
                nextChild.remove()
              }
            }
          })
        }
      } catch (error) {}
    }
  },
  {
    // "tweet_datetime_as_age",
    page: "",
    xpath: "//time[@datetime]",

    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("tweet_datetime_as_age")
        const datetime = element.getAttribute("datetime")
        element.textContent = utils.getRoundedAge(datetime)
      } catch (error) {}
    }
  },

  {
    // "display tooltip dates as shamsi",
    page: "",
    xpath: "//div[@role='tooltip']/span/span",
    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("display_tooltip_dates_as_shamsi")
        const text = element.textContent
        if (!/\s(?:AM|PM)/.test(text)) return
        if (element.classList.contains("formatted-date")) return
        const [gregorian, shamsi, ghmari, time] = utils.formatAllDates(text)
        const html = `
          <div style="padding: 3px; padding-top: 6px;">
            <span style="display:block;">${gregorian}</span>
            <span style="display:block; padding-top:3px; padding-bottom:3px;">${shamsi}</span>
            <span style="display:block; padding-bottom:3px;">${ghmari}</span>
            <span style="display:block;">${time}</span>
          </div>
        `
        element.innerHTML = html
        element.classList.add("formatted-date")
      } catch (error) {}
    }
  },
  {
    // "set timeline width",
    page: "",
    xpath: '//div[@data-testid="primaryColumn"]',
    applyStyle: async (element) => {
      try {
        let width = "600px"
        const timeLineWidth = await readStorageAsString("timeline_width")
        if (timeLineWidth === "narrow") width = "550px"
        if (timeLineWidth === "wide") width = "700px"

        element.style.maxWidth = width

        element.style.marginRight = "30px"

        document.querySelector(
          'div[aria-label="Home timeline"] > div:nth-child(3) > div > div'
        ).style.maxWidth = "100%"
      } catch (error) {}
    }
  },

  // https://twitter.com/notifications
  {
    // "display_tabHeader_in_notifications_page",
    page: "notifications",
    xpath:
      "//div[@aria-label='Home timeline']//nav[@aria-label='Notifications timelines']/ancestor::*[1]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean(
          "display_tabHeader_in_notifications_page"
        )
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "change_replying_to_tweets_style",
    page: "notifications",
    xpath: "//div[starts-with(text(), 'Replying to')]/ancestor::*[9]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean(
          "change_replying_to_tweets_style"
        )
        element.style.backgroundColor = value
          ? utils.bgColorForCurrentTheme()
          : ""
      } catch (error) {}
    }
  },
  // https://twitter.com/i/bookmarks
  {
    // "display_usernames",
    page: "bookmarks",
    xpath:
      "//div[@aria-label='Home timeline']//span[starts-with(text(),'@')]/ancestor::*[2]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_usernames")
        element.style.display = value ? "block" : "none"
      } catch (error) {}
    }
  },
  //https://twitter.com/[username]/followers
  {
    // "change_followings_style_in_followers_page",
    page: "followers",
    xpath:
      '//div[@aria-label="Timeline: Followers"]//div[starts-with(@aria-label,"Following")]/ancestor::div[@data-testid="cellInnerDiv"]',
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean(
          "change_followings_style_in_followers_page"
        )

        element.style.backgroundColor = value
          ? utils.bgColorForCurrentTheme()
          : ""
      } catch (error) {}
    }
  },
  // https://twitter.com/[username]/following
  {
    // "change_followers_style_in_following_page",
    page: "following",
    xpath:
      '//div[@aria-label="Timeline: Following"]//span[contains(text(), "Follows you")]/ancestor::div[@data-testid="cellInnerDiv"]',
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean(
          "change_followers_style_in_following_page"
        )
        element.style.backgroundColor = value
          ? utils.bgColorForCurrentTheme()
          : ""
      } catch (error) {}
    }
  },
  //https://twitter.com/home
  {
    // "mute_tweets_containing_specific_texts",
    page: "home",
    xpath: "//div[@data-testid='cellInnerDiv']",

    applyStyle: async (element) => {
      try {
        if (
          [...element.querySelectorAll("span")].some(
            (span) => span.innerText === "Ad"
          )
        )
          return
        const value = await readStorageAsBoolean(
          "mute_tweets_containing_specific_texts"
        )
        const tweetText = element.querySelector(
          'div[data-testid="tweetText"]'
        )?.innerText
        const mutedTexts = await utils.hasMuttedText(tweetText)
        if (mutedTexts) {
          element.style.display = "none"
        } else {
          element.style.display = "block"
        }
      } catch (error) {}
    }
  },
  //https://twitter.com/[username]/messages
  {
    // "change_tweet_datetime_style_in_messages_page",
    page: "messages",
    xpath: "//time[@datetime]",

    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean(
          "change_tweet_datetime_style_in_messages_page"
        )
        if (value) {
          element.style.opacity = "0.8"
          element.style.fontSize = "0.8em"
        } else {
          element.style.fontSize = "15px"
          element.style.opacity = "1"
        }
      } catch (error) {}
    }
  },
  {
    // "display_usernames_in_messages_page",
    page: "messages",
    xpath: "//span[starts-with(text(),'@')]/ancestor::*[3]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean(
          "display_usernames_in_messages_page"
        )
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_dot_before_dates",
    page: "messages",
    xpath: "//time[@datetime]/ancestor::*[2]//preceding-sibling::div[1]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_dot_before_dates")
        element.style.display = value ? "block" : "none"
      } catch (error) {}
    }
  },
  {
    // "tweet_datetime_as_age_in_chat",
    page: "messages",
    xpath: "//time[@datetime]/ancestor::*[2]//preceding-sibling::div[1]",
    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("tweet_datetime_as_age_in_chat");
        const datetime = element.textContent
        element.textContent = utils.getRoundedAge(datetime)
      } catch (error) {}
    }
  },
  // https://twitter.com/[username]
  {
    // "display_gallery",
    page: "profile",
    xpath:
      "//div[@data-testid='sidebarColumn']//div[@aria-label='Image']/ancestor::*[9]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_gallery")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_highlights_tab",
    page: "profile",
    xpath:
      "//nav[@aria-label='Profile timelines']//span[contains(text(), 'Highlights')]/ancestor::*[4]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_highlights_tab")
        if (
          document.querySelector(
            'div[aria-label="Provides details about verified accounts."]'
          )
        )
          return
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "joined_date_as_age",
    page: "profile",
    xpath: "//span[@data-testid='UserJoinDate']//span",
    applyStyle: async (element) => {
      try {
        //const value = await readStorageAsBoolean("joined_date_as_age");

        if (element.textContent.includes("ago")) return
        if (
          /\d+ (years|months|weeks|days|hours|minutes|seconds) ago/.test(
            element.textContent
          )
        )
          return

        const datetime = element.textContent.replace("Joined ", "").trim()
        element.textContent = "Joined " + utils.getRoundedAge(datetime) + " ago"
      } catch (error) {}
    }
  },
  {
    // "change_pinned_tweet_style",
    page: "profile",
    xpath: "//div[@data-testid='socialContext']/ancestor::*[14]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("change_pinned_tweet_style")
        element.style.backgroundColor = value
          ? utils.bgColorForCurrentTheme()
          : ""
      } catch (error) {}
    }
  },
  // https://twitter.com/search?q=[query]
  {
    // "display_usernames_in_search1",
    page: "search",
    xpath:
      "//div[@data-testid='User-Name']//span[starts-with(text(),'@')]/ancestor::*[3]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_usernames_in_search1")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_usernames_in_search2",
    page: "search",
    xpath:
      "//div[@data-testid='UserCell']//span[starts-with(text(),'@')]/ancestor::*[5]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_usernames_in_search2")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  // https://twitter.com/[username]/status/[number]
  {
    // "display_relevant_people",
    page: "tweet",
    xpath:
      "//div[@data-testid='sidebarColumn']//aside[@aria-label='Relevant people']/ancestor::*[1]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_relevant_people")
        element.style.display = value ? "flex" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_translate_post",
    page: "tweet",
    xpath: "//span[contains(text(), 'Translate post')]/ancestor::*[1]",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_translate_link")
        element.style.display = value ? "block" : "none"
      } catch (error) {}
    }
  },
  {
    // "display_discover_more",
    page: "tweet",
    xpath:
      "//span[text()='Discover more']/ancestor::*[6]//following-sibling::node()",
    applyStyle: async (element) => {
      try {
        const value = await readStorageAsBoolean("display_discover_more")
        element.style.display = value ? "block" : "none"
      } catch (error) {}
    }
  },
  //Other

  {
    // "is_label_shown",
    page: "",
    xpath: '//a[@aria-label="Profile"]',
    applyStyle: async (element) => {
      try {
        const isLabelShown = !!element.querySelector("span")
        document.querySelector("#twifiner-drafts-label").style.display =
          isLabelShown ? "inline" : "none"
        document.querySelector("#twifiner-analytics-label").style.display =
          isLabelShown ? "inline" : "none"
        document.querySelector("#twifiner-scheduled-label").style.display =
          isLabelShown ? "inline" : "none"
        document.querySelector("#twifiner-settings-label").style.display =
          isLabelShown ? "inline" : "none"

        const moreButton = document.querySelector(
          'div[aria-label="More menu items"]'
        )
        const primaryNav = document.querySelector('nav[aria-label="Primary"]')
        if (primaryNav.lastChild === moreButton) return
        primaryNav.removeChild(moreButton)
        primaryNav.appendChild(moreButton)
      } catch (error) {}
    }
  }
]

const regexPatterns = {
  profile: new RegExp(`^https?:\/\/(twitter|x)\.com\/{username}\/?`),
  tweet: new RegExp(
    `^https:\/\/(twitter|x)\.com\/[a-zA-Z0-9_]+\/status\/[0-9]+\/?`
  ),
  search: new RegExp(`^https:\/\/(twitter|x)\.com\/search\/?.*`),
  following: new RegExp(
    `^https:\/\/(twitter|x)\.com\/[a-zA-Z0-9_]+\/following\/?`
  ),
  followers: new RegExp(
    `^https:\/\/(twitter|x)\.com\/[a-zA-Z0-9_]+\/followers\/?`
  ),
  messages: new RegExp(`^https:\/\/(twitter|x)\.com\/messages\/?`),
  bookmarks: new RegExp(`^https:\/\/(twitter|x)\.com\/i\/bookmarks\/?`),
  notifications: new RegExp(`^https:\/\/(twitter|x)\.com\/notifications\/?`),
  home: new RegExp(`^https:\/\/(twitter|x)\.com\/home\/?`)
}
function applyStyles() {
  try {
    const usernameElement = document.querySelector(
      'div[data-testid="UserName"] > div > div > div:nth-child(2) span'
    )
    const username = usernameElement
      ? usernameElement.textContent.replace("@", "")
      : null

    regexPatterns.profile = new RegExp(
      `^https?:\/\/(twitter|x)\.com\/${username}\/?`
    )

    const url = window.location.href

    items.forEach((item) => {
      const regexPattern = regexPatterns[item.page]
      if (regexPattern && !regexPattern.test(url)) return

      const elements = utils.evaluateXpath(item.xpath)

      for (let i = 0; i < elements.snapshotLength; i++) {
        const element = elements.snapshotItem(i)
        item.applyStyle(element)
      }
    })
  } catch (error) {
    // Handle the error appropriately
  }
}

applyStyles()
const observer = new MutationObserver(() => {
  applyStyles()
})
observer.observe(document.body, {
  childList: true,
  subtree: true
})
watchSettings(applyStyles)
