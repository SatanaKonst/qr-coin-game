<template>
  <button class="btn btn-lg btn-success" data-bs-toggle="modal" data-bs-target="#moveCoinModal" v-if="inventar.coin">
    Передать монеты
  </button>

  <!-- Modal -->
  <div class="modal fade" id="moveCoinModal" tabindex="-1" aria-labelledby="moveCoinModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="moveCoinModalLabel">Передать монеты</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <qrcode-vue v-if="inventar.coin" :value="'addCoin='+inventar.coin.count" size="300"></qrcode-vue>
          <p v-else>Нет монет для передачи</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'moveCoinQrCodeModal',
  props: {
    inventar: Object
  },
  components: {
    QrcodeVue
  },
  mounted() {
    let moveCoinModal = document.getElementById('moveCoinModal')
    moveCoinModal.addEventListener('hidden.bs.modal', () => {
      delete this.$props.inventar.coin
    })
  }
}
</script>

<style scoped>

</style>