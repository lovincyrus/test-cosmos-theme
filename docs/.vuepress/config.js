module.exports = {
  theme: "cosmos", // required, enable the theme
  title: "Docs for the docs", // config default title
  themeConfig: {
    custom: true, // true for default theme
    editLinks: true, // true for gutter.editLink & gutter.github
    repo: "lovincyrus/test-cosmos-theme", // repo for gutter.editLink & gutter.github
    docsRepo: "lovincyrus/test-cosmos-theme", // docsRepo for gutter.editLink & gutter.github
    docsDir: "docs",
    // label: "sdk", // [sdk, ibc, hub, core]
    // @todo standardize themeConfig.logo / themeConfig.logo.src
    // cosmos: must include project's themeConfig.label [sdk, ibc, hub, core]
    // others: if themeConfig.logo then logo only
    // cosmos: else if no themeConfig.logo then themeConfig.label logo + themeConfig.title
    logo: {
      src: "/logo.svg",
    },
    sidebar: {
      // true by default
      // false to disable autoSidebar
      auto: false,
      nav: [
        {
          children: [
            {
              title: "Get Started",
              path: "/get-started",
              directory: true,
            },
          ]
        },
        {
          title: "Group 0",
          children: [
            {
              title: "External link",
              path: "https://github.com/cosmos/vuepress-theme-cosmos"
            }
          ]
        },
        {
          title: "Group 1",
          children: [
            {
              title: "Customers",
              path: "/get-started/04-customers",
              directory: false,
            },
            {
              title: "External link",
              path: "https://default-docs.netlify.app"
            },
          ]
        },
        {
          title: "Group 2",
          children: [
            {
              title: "External link",
              path: "https://default-docs.netlify.app"
            },
            {
              title: "Markdown Extensions",
              path: "/get-started/02-markdown-extensions",
              directory: false
            }
          ]
        },
        {
          title: "Resources",
          children: [
            {
              title: "Resource 1",
              path: "https://github.com/lovincyrus/test-cosmos-theme"
            },
            {
              title: "Resource 2",
              path: "https://github.com/lovincyrus/test-cosmos-theme"
            }
          ]
        }
      ]
    },
    gutter: {
      // title: "Help & Support",
      editLink: true,
      // chat: {
      //   title: 'Developer Chat',
      //   text: 'Chat with Ethermint developers on Discord.',
      //   url: 'https://discordapp.com/channels/669268347736686612',
      //   bg: '#161931'
      // },
      // forum: {
      //   title: 'Ethermint Developer Forum',
      //   text: 'Join the Ethermint Developer Forum to learn more.',
      //   url: 'https://forum.cosmos.network/',
      //   bg: 'linear-gradient(225deg, #46509F -1.08%, #2F3564 95.88%)',
      //   logo: 'cosmos'
      // },
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page by suggesting edits on GitHub."
      }
    },
    footer: {
      // question: {
      //   text: "Chat with Cosmos developers in <a href='https://discordapp.com/channels/669268347736686612' target='_blank'>Discord</a> or reach out on the <a href='https://forum.cosmos.network/c/tendermint' target='_blank'>SDK Developer Forum</a> to learn more."
      // },
      // // config newsletter.title for tutorials.cosmos.network
      // newsletter: {
      //   title: "default title"
      //   // @todo add newsletter form config
      // },
      logo: "/logo.svg",
      textLink: {
        text: "vuepress-theme-cosmos",
        url: "https://github.com/cosmos/vuepress-theme-cosmos"
      },
      services: [
        {
          service: "medium",
          url: "https://blog.cosmos.network/"
        },
        {
          service: "twitter",
          url: "https://twitter.com/cosmos"
        },
        {
          service: "linkedin",
          url: "https://www.linkedin.com/company/tendermint/"
        },
        {
          service: "reddit",
          url: "https://reddit.com/r/cosmosnetwork"
        },
        {
          service: "telegram",
          url: "https://t.me/cosmosproject"
        },
        {
          service: "youtube",
          url: "https://www.youtube.com/c/CosmosProject"
        }
      ],
      smallprint:
        `© ${new Date().getFullYear()} 🚀 Inc.`,
      links: [
        {
          title: "Documentation",
          children: [
            {
              title: "Cosmos SDK",
              url: "https://cosmos.network/docs"
            },
            {
              title: "Cosmos Hub",
              url: "https://hub.cosmos.network/"
            },
            {
              title: "Tendermint Core",
              url: "https://docs.tendermint.com/"
            }
          ]
        },
        {
          title: "Community",
          children: [
            {
              title: "Cosmos blog",
              url: "https://blog.cosmos.network/"
            },
            {
              title: "Forum",
              url: "https://forum.cosmos.network/"
            },
            {
              title: "Chat",
              url: "https://riot.im/app/#/room/#cosmos-sdk:matrix.org"
            }
          ]
        },
        {
          title: "Contributing",
          children: [
            {
              title: "Contributing to the docs",
              url:
                "https://github.com/cosmos/cosmos-sdk/blob/master/docs/DOCS_README.md"
            },
            {
              title: "Source code on GitHub",
              url: "https://github.com/cosmos/cosmos-sdk/"
            }
          ]
        }
      ]
    }
  }
};
