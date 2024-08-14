<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" today-btn />
    </div>
    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
          <h1 class="text-white">Basic</h1>
        </q-parallax>
      </div>
    </div>
    <div class="q-pa-md q-gutter-md">
      <q-btn label="Take Photo" @click="takePicture" />
    </div>
    <div class="q-pa-md q-gutter-md">
      <!-- Zeige das Bild an -->
      fff
      <img v-if="imageUrl" :src="imageUrl" alt="Captured Image" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Camera, CameraSource, CameraResultType } from "@capacitor/camera";

export default {
  setup() {
    // Initialisiere das Datum mit dem formatierten aktuellen Datum
    const date = ref(getFormattedDate());
    const imageUrl = ref(null);

    // Funktion zur Rückgabe des aktuellen Datums im Format 'YYYY/MM/DD'
    function getFormattedDate() {
      const today = new Date();
      console.log(today);
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Monate sind nullbasiert
      const day = String(today.getDate()).padStart(2, "0");

      return `${year}/${month}/${day}`;
    }

    const takePicture = async () => {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
        });

        // Speichere die Datei-URL
        imageUrl.value = image.webPath;
        console.log("Image URL:", imageUrl.value);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    };

    return {
      date,
      takePicture,
      imageUrl,
    };
  },
};
</script>
