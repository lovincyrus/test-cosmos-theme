module.exports = {
  theme: "cosmos", // required, enable the theme
  title: "Default title", // config default title
  themeConfig: {
    editLinks: true, // true for gutter.editLink & gutter.github
    repo: "cosmos/sdk-tutorials", // repo for gutter.editLink & gutter.github
    docsRepo: "cosmos/sdk-tutorials", // docsRepo for gutter.editLink & gutter.github
    docsDir: "docs",
    // label: "sdk", // [sdk, ibc, hub, core]
    // @todo standardize themeConfig.logo / themeConfig.logo.src
    // cosmos: must include project's themeConfig.label [sdk, ibc, hub, core]
    // others: if themeConfig.logo then logo only
    // cosmos: else if no themeConfig.logo then themeConfig.label logo + themeConfig.title
    logo: {
      src: "/logo.svg",
    },
    // @todo check other existing docs
    sidebar: {
      auto: true,
      nav: [
        {
          title: 'Default',
          children: [
            {
              title: 'Hellochain',
              path: '/hellochain/tutorial/',
              directory: true,
            },
          ]
        },
        {
          children: [
            {
              title: "or Without Default Title",
              path: "https://github.com/cosmos/vuepress-theme-cosmos"
            }
          ]
        },
        {
          title: "Group 1",
          children: [
            {
              title: 'Basics',
              path: '/basics/',
              directory: false,
            },
            {
              title: "External link",
              path: "https://github.com/cosmos/vuepress-theme-cosmos"
            },
          ]
        },
        {
          title: "Group 2",
          children: [
            {
              title: "External link",
              path: "https://github.com/cosmos/vuepress-theme-cosmos"
            },
            {
              title: "Internal link",
              path: "/url/path/",
              directory: false
            },
          ]
        },
        {
          title: "Resources",
          children: [
            {
              title: "Default resource 1",
              path: "https://github.com/cosmos/vuepress-theme-cosmos"
            },
            {
              title: "Default resource 2",
              path: "https://github.com/cosmos/vuepress-theme-cosmos"
            }
          ]
        }
      ],
      footer: [
        {
          label: "sdk",
          name: "Cosmos<br>SDK",
          url: "https://docs.cosmos.network/",
          color: "#5064FB",
        },
        {
          label: "hub",
          name: "Cosmos<br>Hub",
          url: "https://hub.cosmos.network/",
          color: "#BA3FD9",
        },
        {
          label: "ibc",
          name: "IBC<br>Protocol",
          url: "https://github.com/cosmos/ics/tree/master/ibc",
          color: "#E6900A",
        },
        {
          label: "core",
          name: "Tendermint<br>Core",
          url: "https://docs.tendermint.com/",
          color: "#00BB00",
        },
      ],
    },
    gutter: {
      // title: "Help & Support",
      editLink: true,
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page by suggesting edits on GitHub."
      }
    },
    footer: {
      // question: {
      //   text: "Chat with Cosmos developers in <a href='https://discordapp.com/channels/669268347736686612' target='_blank'>Discord</a> or reach out on the <a href='https://forum.cosmos.network/c/tendermint' target='_blank'>SDK Developer Forum</a> to learn more."
      // },
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
