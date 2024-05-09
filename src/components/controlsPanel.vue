<template>
  <div class="controls-panel">
    <div class="container pt-2 text-center">
      <move-coin-qr-code-modal :inventar="inventar"></move-coin-qr-code-modal>

    </div>
  </div>
</template>

<script>
import moveCoinQrCodeModal from "@/components/moveCoinQrCodeModal.vue";

export default {
  name: 'controlsPanel',
  props: {
    inventar: Object
  },
  components: {
    moveCoinQrCodeModal
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.controls-panel {
  min-height: 35vh;
//background-color: rgb(255 255 255 / 73%); //border-radius: 10px; //margin: 5px;
}
</style>