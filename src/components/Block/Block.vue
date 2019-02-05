<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'Block',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
