<template>
  <div id="app">
    <div class="header bg-cover bg-center flex">
      <div class="w-1/2">
        <router-link class="inline-block pl-62px pt-43px" to="/">
          <img src="./assets/logo-white.png" alt="">
        </router-link>
      </div>
      <div class="w-1/2 bg-blue-1 text-white py-117px px-84px">
        <h1 class="text-48px mb-57px uppercase leading-tight">
          Lorem ipsum dolor
          amet consectetur
        </h1>
        <p class="text-18px">
          Some explanation here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis.
        </p>
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
    @apply bg-gray-1;
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
</style>

<style src="./tailwind.css">