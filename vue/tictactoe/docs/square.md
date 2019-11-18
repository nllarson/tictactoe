#### 1
`App.vue`
```
<Square></Square>
```


`Square.vue`
```
<template>
  <button class="square">X</button>
</template>

<script>
export default {};
</script>

<style></style>
```

#### 2
`App.vue`
```
<Square value="X"></Square>
```


`Square.vue`
```
<template>
  <button class="square">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
```

#### 3
`App.vue`
```
<Square value="X"></Square>
```


`Square.vue`
```
<template>
  <button class="square" @click="squareClick">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    squareClick() {
      alert("HELLO");
    }
  }
};
</script>

<style></style>
```