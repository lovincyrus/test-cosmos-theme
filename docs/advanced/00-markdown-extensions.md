---
order: 0
---

# Markdown Extensions

### Pre-requisite Readings

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) {prereq}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur, neque posuere condimentum eleifend {synopsis}

### Import Code Snippets

`+++ https://github.com/cosmos/cosmos-sdk/blob/7d7821b9af132b0f6131640195326aa02b6751db/types/address.go#L229-L243`

+++ https://github.com/cosmos/cosmos-sdk/blob/7d7821b9af132b0f6131640195326aa02b6751db/types/address.go#L229-L243

### Codeblock

The [default supported languages](https://prismjs.com/#supported-languages) by Prismjs are:
- Markup - `markup`, `html`, `xml`, `svg`, `mathml`, `ssml`, `atom`, `rss`
- CSS - `css`
- C-like - `clike`
- JavaScript - `javascript`, `js`

The manually added languages can be found [here](https://github.com/tendermint/cosmos-ui/blob/develop/src/CodeBlock/CodeBlock.vue#L403)

---

JavaScript source:
```js
module.exports = {
  theme: "cosmos"
}
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```javascript{5-6,12-17,19}
export function getLocalVueByMode (mode) {
  const localVue = createLocalVue()
  localVue.use(Router)

  // register global component
  localVue.component('OutboundLink', mockComponent('outbound-link'))

  // register page component in root route.
  localVue.component(i18nSiteData.pages[0].key, mockComponent('page-component'))
  localVue.component(simpleSiteData.pages[0].key, mockComponent('page-component'))

  // data mixin
  if (mode === 'i18n') {
    localVue.mixin(dataMixin(i18nSiteData))
  } else {
    localVue.mixin(dataMixin(simpleSiteData))
  }

  return localVue
}
```

Rust source:
```rust
pub trait Actor {
  fn handle(msgPayload: &[u8]) -> Vec<Msg>;
}

pub struct Msg {
  pub destination: Vec<u8>,
  pub payload: Vec<u8>,
}
```

HTML source:
```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

Bash source:
```bash
echo hello, world.
```

Markdown source:
```md
### hello, world.
```

Python source:
```python
print("hello, world.")
```

::: tip
There are too many languages to make an exhaustive list here, but you can find them in the PrismJS source file [components.json](https://github.com/PrismJS/prism/blob/master/components.json#L42) under `languages`.
:::

<!-- ## Next {hide}

Learn about [features](./03-features) {hide} -->

### Block quotes
As the great Tony Stark once said:

> I'm a huge fan of the way you lose control and turn into an enormous green rage monster.