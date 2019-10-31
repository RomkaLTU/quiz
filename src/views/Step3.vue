<template>
    <div id="questions" class="bg-white p-8 lg:p-70px">
        <h2 class="text-30px lg:text-36px mb-8 lg:mb-66px">Tulos</h2>
        <div class="mb-8">
            <div class="font-bold">Olet vastannut oikein {{ correct_percentage }}%:iin kysymyksistä ({{ correct_count }} kysymystä oikein {{ questions_count }}:sta)</div>
            <div>Voit tarkistaa oikeat vastaukset alta.</div>
        </div>
        <div class="mb-12 lg:mb-84px" v-for="(answer,index) in this.getAnswers" :key='`a_${index}`'>
            <div class="mb-4 text-20px"><span class="mr-2">{{ index + 1 }})</span> {{ answer.question }}</div>
            <div class="pl-8 flex flex-col">
                <div class="mb-4">
                    <div v-if="isCorrect(answer)" class="text-green-1">Vastauksesi: oikein</div>
                    <div v-else class="text-red-1">Vastauksesi: väärin</div>
                </div>
                <label class="mb-2 text-18px font-light flex cursor-pointer" v-for="(pa,pa_index) in answer.possible_answers" :key="`pa_${pa_index}`">
                    <input type="radio" :checked="answer.selected_answer === pa_index" :name="`pa_${index}`" disabled class="mr-2 invisible absolute custom-radio">
                    <span class="fake-radio mr-3 flex">
                        <span class="fake-radio-inner"></span>
                    </span>
                    {{ pa }} 
                    <span class="text-green-1 ml-1" v-if="isCorrect(answer) && answer.selected_answer === pa_index"> - Oikea vastaus</span>
                    <span class="text-red-1 ml-1" v-if="!isCorrect(answer) && answer.selected_answer === pa_index"> - Väärä vastaus</span>
                    <span class="text-green-1 ml-1" v-if="!isCorrect(answer) && answer.correct_answer === pa_index"> - Oikea vastaus</span>
                </label>
            </div>
        </div>
        <div class="text-16px lg:text-18px">
            <div class="font-bold mb-8">Kiitos osallistumisestasi koulutukseen. </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
const VueScrollTo = require('vue-scrollto');

export default {
    name: 'Step3',
    data: function() {
        return {
            questions_count: 0,
            correct_count: 0,
            correct_percentage: 0,
        }
    },
    created() {

        this.correct_count = this.getAnswers.filter( (obj) => {
            return obj.correct_answer === obj.selected_answer;
        } ).length;

        this.questions_count = this.getAnswers.length;

        this.correct_percentage = this.correct_count * 100 / this.questions_count;

    },
    computed: {
        ...mapGetters([
            'getUserInfo',
            'getAnswers',
        ]),
    },
    mounted() {
        const questions = document.getElementById('questions');
        VueScrollTo.scrollTo(questions);
    },
    methods: {
        isCorrect(answer) {
            return answer.selected_answer === answer.correct_answer;
        },
        reset() {
            this.$store.dispatch('resetForm');
            this.$router.push({ name: 'step2' });
        },
    },
}
</script>