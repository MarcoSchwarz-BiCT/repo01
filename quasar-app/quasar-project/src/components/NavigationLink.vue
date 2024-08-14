<template>
  <q-list bordered padding>
    <q-item
      v-for="page in routerArray"
      :key="page.name"
      clickable
      @click="navigateTo(page.path)"
    >
      <q-item-section>
        {{ logPageName(page.name) }}
        {{ page.name }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import routes from "src/router/routes.js";
import { generateRouterArray } from "src/data/pages.js";

export default {
  data() {
    return {
      routerArray: [], // Initialisiere das Array
    };
  },
  mounted() {
    // Generiere das Array dynamisch basierend auf den Routen
    this.routerArray = generateRouterArray(routes);

    // Überprüfe den Inhalt von testArray
    console.log("Dynamisch generiertes testArray:", this.routerArray);
  },
  methods: {
    navigateTo(path) {
      console.log("Navigiere zu:", path); // Überprüfe den Pfad bei der Navigation
      this.$router.push(path);
    },
    logPageName(name) {
      console.log('Page Name:', name);
      return ''; // Gib einen leeren String zurück, um die Anzeige nicht zu beeinflussen
    }
  },
};
</script>
