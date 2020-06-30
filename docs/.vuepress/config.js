// config.js

module.exports = {
  theme: "cosmos", // required, enable the theme
  title: "vuepress-cosmos-theme Docs", // config default title
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
          title: "Basic",
          children: [
            {
              title: "Basic",
              path: "/basic",
              directory: true,
            },
          ]
        },
        {
          title: "Advanced",
          children: [
            {
              title: "Advanced",
              path: "/advanced",
              directory: true,
            },
          ]
        },
        {
          title: "Group 1",
          children: [
            {
              title: "Used By",
              path: "/basic/03-used-by",
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
              path: "/advanced/00-markdown-extensions",
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
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page by suggesting edits on GitHub."
      }
    },
    footer: {
      // question: {
      //   text: "Chat with Cosmos developers in <a href='https://discordapp.com/channels/669268347736686612' target='_blank'>Discord</a> or reach out on the <a href='https://forum.cosmos.network/c/tendermint' target='_blank'>SDK Developer Forum</a> to learn more."
      // },
      // // @todo when we switch to a new newsletter platform
      // // config newsletter.title for tutorials.cosmos.network
      // newsletter: {
      //   title: "default title"
      //   // @todo add newsletter form config
      // },
      logo: "/logo.svg", // recommended ratio: 120 W x 48 H
      // root homepage of the project
      textLink: {
        text: "test-cosmos-theme",
        url: "https://github.com/lovincyrus/test-cosmos-theme"
      },
      services: [
        {
          service: "github",
          url: "https://github.com/lovincyrus/test-cosmos-theme/blob/master/README.md"
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
