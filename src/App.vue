<template>
  <div class="container pt-3">
    <div class="section">
      <scanner @result="scanResult=$event"></scanner>
    </div>
    <tool-bar :inventar="inventar"></tool-bar>
    <controls-panel v-if="currentQuestion!==null"
                    :question="currentQuestion"
                    :inventar="inventar"
                    @close="currentQuestion=null"></controls-panel>


  </div>

</template>

<script>
import qrCodeScanner from "@/components/qrCodeScanner.vue";
import ControlsPanel from "@/components/controlsPanel.vue";
import ToolBar from "@/components/toolBar.vue";

export default {
  name: 'App',
  components: {
    ToolBar,
    ControlsPanel,
    scanner: qrCodeScanner,
  },
  data() {
    return {
      scanResult: null,
      inventarSrc: {
        coin: {
          icon: this.$attrs.publicPath + 'assets/icons/coin.png',
          count: 0,
          lastAddTime: 0
        },
      },
      inventar: {},
    }
  },
  mounted() {
    let savedInventar = localStorage.getItem('qr-coin-game-invetar');
    if (savedInventar) {
      try {
        this.inventar = JSON.parse(savedInventar);
      } catch (e) {
        console.info('Пустой сохраненный инвентарь');
        this.inventar = {};
      }
    }
  },
  watch: {
    inventar: {
      deep: true,
      handler() {
        localStorage.setItem('qr-coin-game-invetar', JSON.stringify(this.inventar));
      }
    },
    scanResult() {
      if (typeof this.scanResult === "object") {
        let data = this.scanResult.data.split('=');
        switch (data[0]) {
          case 'addCoin':
            if (!this.inventar.coin) {
              this.inventar.coin = JSON.parse(JSON.stringify(this.inventarSrc.coin));
            }

            /**
             * Пауза в 5 сек, чтобы не некидало большое число
             */
            if (this.inventar.coin.lastAddTime !== 0) {
              if (Date.now() - this.inventar.coin.lastAddTime < 5000) {
                break;
              }
            }

            this.inventar.coin.count += +data[1];
            this.inventar.coin.lastAddTime = Date.now();
            break;
        }
      }
    }
  },
  methods: {}
}
</script>

<style>
#app {
  height: 100vh;
  background-image: url('./assets/images/background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center
}
</style>
