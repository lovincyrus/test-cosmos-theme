---
order: 2
---

# Markdown Cheatsheet

### Pre-requisite Readings

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) {prereq}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur, neque posuere condimentum eleifend {synopsis}

### Codeblock

```js
module.exports = {
  theme: "cosmos"
}
```

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```rust
pub trait Actor {
    fn handle(msgPayload: &[u8]) -> Vec<Msg>;
}

pub struct Msg {
    pub destination: Vec<u8>,
    pub payload: Vec<u8>,
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

### Ordered list
1. A
2. Very
3. Good
4. Number

### Unordered list
- A
- Bulleted
- List

## Next {hide}

Learn about [custom containers](./custom-containers) {hide}
