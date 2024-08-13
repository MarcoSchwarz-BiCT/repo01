<template>
  <q-page class="flex flex-center column">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />
      <ButtonLink color="#FF0080" label="Test" @click="handleButtonClick"></ButtonLink>
  </q-page>
</template>

<script setup>
import ButtonLink from "components/ButtonLink.vue";
import {ref} from 'vue'

function handleButtonClick(event, label) {
  console.log('Button with label', label, 'was clicked!', event)
}

defineOptions({
  name: "TestPage",
});



</script>

<style scoped>
/* css styles */
</style>
