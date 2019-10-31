<template>
  <div id="app" class="overflow-hidden">
    <div class="header bg-cover bg-center flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 text-center lg:text-left p-12 lg:p-0">
        <router-link class="inline-block lg:pl-62px lg:pt-43px" to="/">
          <img src="./assets/logo-white.png" alt="">
        </router-link>
      </div>
      <div class="w-full lg:w-1/2 text-center lg:text-left bg-blue-1 text-white p-4 lg:p-12 lg:py-117px lg:px-84px">
        <h1 class="text-18px text-center lg:text-left uppercase leading-normal">
          Koulutuksen tarkoitus on antaa viimeisintä tietoa tuotteistamme ja korostaa niiden tärkeimpiä ominaisuuksia.
          Koulutuksesta saat tukea päivittäiseen myyntityöhösi asiakkaiden kanssa.
        </h1>
      </div>
    </div>
    <div class="container mb-100px">
      <Steps/>
      <router-view/>
    </div>
    <div class="text-14px font-light text-center mb-30px opacity-50">© 2019 Geberit Oy</div>
  </div>
</template>

<script>
import Steps from '@/components/Steps'

export default {
  name: 'App',
  components: {
    Steps,
  }
}
</script>

<style lang="scss">
  body {
    @apply bg-gray-1 font-activegrotesk;
  }

  .header {
    background-image: url('./assets/main-bg@2x.jpg');
  }
  
  .container {
    width: 657px;
    margin: 0 auto;
  }

  [disabled] {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }

  .input-label {
    > span {
      display: flex;
    }
  }

  .fake-input-wrap {
    input + span {
      display: block;
      width: 18px;
      height: 18px;
      border: 1px solid #d1d1d1;
      margin-right: 1rem;
      margin-top: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input:checked + span > span {
      display: block;
      width: 8px;
      height: 8px;
      background-color: #d1d1d1;
    }
  }

  .fake-radio {
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #d1d1d1;
    margin-top: 5px;
    margin-right: 10px;
  }

  .custom-radio:checked + .fake-radio .fake-radio-inner {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
  }
</style>

<style src="./tailwind.css"></style>