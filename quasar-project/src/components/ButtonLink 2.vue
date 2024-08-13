<template>
  <q-btn :style="buttonStyle" :label="label" @click="handleClick" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  textColor: {
    type: String,
    default: ''
  },
  outline: {
    type: String,
    default: ''
  },
  onClick: {
    type: Function,
    default: () => {} // Standardmässig leere Funktion
  }
})

const buttonStyle = computed(() => ({
  backgroundColor: props.color,
  color: props.textColor || (props.outline ? props.color : 'white')
}))

function handleClick(event) {
  props.onClick(event, props.label)
}
</script>

<style scoped>
/* Hier kannst du spezifische Styles für die ButtonLink-Komponente definieren */
</style>
