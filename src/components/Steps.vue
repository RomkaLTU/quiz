<template>
    <div class="flex flex-col lg:flex-row py-10 lg:py-70px px-4 lg:px-0 lg:max-w-900px lg:mx-auto">
        <div class="flex w-full lg:w-1/3 mb-2 lg:mb-0">
            <div :class="['text-blue-1 border border-blue-1 w-70px h-70px text-30px text-white font-light flex items-center justify-center', { 'active': $route.name === 'step1' }]">1</div>
            <div class="max-w-237px text-blue-1 ml-25px">
                <div class="font-bold">Vaihe 1 - Tietosi:</div>
            </div>
        </div>
        <div class="flex w-full lg:w-1/3 mb-2 lg:mb-0 justify-end">
            <div :class="['text-blue-1 border border-blue-1 w-70px h-70px text-30px text-white font-light flex items-center justify-center', { 'active': $route.name === 'step2' }]">2</div>
            <div class="max-w-237px text-blue-1 ml-25px">
                <div class="font-bold">Vaihe 2 - Koulutus:</div>
            </div>
        </div>
        <div class="flex w-full lg:w-1/3 mb-2 lg:mb-0 justify-end">
            <div :class="['text-blue-1 border border-blue-1 w-70px h-70px text-30px text-white font-light flex items-center justify-center', { 'active': $route.name === 'step3' }]">3</div>
            <div class="max-w-237px text-blue-1 ml-25px">
                <div class="font-bold">Tulos:</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Steps',
    computed: {
        ...mapGetters([
            'step1Valid',
            'step2Valid',
        ]),
    },
}
</script>

<style lang="scss" scoped>
.active {
    @apply bg-blue-1 text-white;
}
</style>