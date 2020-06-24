---
order: 1
---

# Get started

### Pre-requisite Readings

- [Installation](./installation) {prereq}

## Usage
Minimal config in .vuepress/config.js to enable the theme:
```js
module.exports = {
  theme: "cosmos",
  themeConfig: {
    custom: true,
    sidebar: {
      auto: true
    }
  }
}
```