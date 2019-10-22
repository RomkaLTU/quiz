<template>
    <div class="flex py-70px">
        <div class="flex w-1/3">
            <div class="bg-blue-1 w-70px h-70px text-30px text-white font-light flex items-center justify-center">1</div>
            <div class="max-w-237px text-blue-1 ml-25px">
                <div class="font-bold">First Step:</div>
                <div class="font-light">You enter your information (we will send results by email)</div>
            </div>
        </div>
        <div class="flex w-1/3">
            <div :class="['text-blue-1 border border-blue-1 w-70px h-70px text-30px text-white font-light flex items-center justify-center', { 'active': step1Valid }]">2</div>
            <div class="max-w-237px text-blue-1 ml-25px">
                <div class="font-bold">Second Step:</div>
                <div class="font-light">You take the test</div>
            </div>
        </div>
        <div class="flex w-1/3">
            <div class="text-blue-1 border border-blue-1 w-70px h-70px text-30px text-white font-light flex items-center justify-center">3</div>
            <div class="max-w-237px text-blue-1 ml-25px">
                <div class="font-bold">Third Step:</div>
                <div class="font-light">You will get the results in a moment and see how...</div>
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
        ]),
    },
}
</script>

<style lang="scss" scoped>
.active {
    @apply bg-blue-1 text-white;
}
</style>