<template>
  <v-container text-center>
    <div>
      Test de https://github.com/gruhn/vue-qrcode-reader
      <p class="error">{{ error }}</p>

      <p>
        Last result: <b>{{ result }}</b>
      </p>

      <!-- <qrcode-stream @decode="onDecode" @init="onInit" /> -->
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
  </v-container>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  name: "Qrcodereader",
  components: QrcodeStream,
  data() {
    return {
      result: "",
      error: "",
    };
  },
  mounted() {},
  methods: {
    onDecode(decodedString) {
      this.result = decodedString;
      console.log(decodedString);
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    },
  },
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
