<template>
    <div id="questions" class="bg-white p-8 lg:p-70px">
        <h2 class="text-30px lg:text-36px mb-8 lg:mb-66px">Vaihe 2 - Koulutus</h2>
        <ValidationObserver v-slot="{ invalid }" ref="observer" tag="form" @submit.prevent="submit()">
            <div class="mb-12 lg:mb-84px" v-for="(q,index) in questions" :key='`q_${index}`'>
                <div class="mb-38px text-20px"><span class="mr-2">{{ index + 1 }})</span> {{ q.question }}</div>
                <div class="pl-8">
                    <ValidationProvider :name="`pa_${index}`" rules="required" v-slot="{ errors }">
                        <span class="text-red-1 text-13px">{{ errors[0] }}</span>
                        <div class="flex flex-col">
                            <label class="input-label flex mb-2 text-18px font-light cursor-pointer" v-for="(pa,pa_index) in q.possible_answers" :key="`pa_${pa_index}`">
                                <input type="radio" :name="`pa_${index}`" v-model="answers[index]" :value="pa_index" class="mr-2 invisible absolute custom-radio">
                                <span class="fake-radio">
                                    <span class="fake-radio-inner"></span>
                                </span>
                                {{ pa }}
                            </label>
                        </div>
                    </ValidationProvider>
                </div>
            </div>
            <div class="flex items-center justify-between mt-50px">
                <div v-if="error" class="text-red-1 text-13px font-light">Tapahtui virhe - ole hyvä ja vastaa kaikkiin kysymyksiin, näet avoimet kysymykset yllä</div>
                <div class="flex items-center justify-end flex-1">
                    <div class="mr-4 text-18px font-light opacity-50">Vaihe 3:</div>
                    <button type="submit" class="bg-blue-1 text-white text-16px lg:text-18px px-4 lg:px-12 py-3 flex items-center">
                        <img src="../assets/arrow_right_white.svg" alt="Save the answers" class="mr-5">
                        Tallenna vastaukset
                    </button>
                </div>
            </div>
        </ValidationObserver>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
const VueScrollTo = require('vue-scrollto');

export default {
    name: 'Step2',
    data: function() {
        return {
            error: false,
            questions: [
                {
                    question: 'Montako materiaalivaihtoehtoa Geberit Mapress -järjestelmässä on?',
                    possible_answers: [
                        '1',
                        '2',
                        '3',
                        '4',
                    ],
                    correct_answer: 3,
                    selected_answer: null,
                },
                {
                    question: 'Voiko Geberit Mapress -järjestelmään vaihtaa tiivisteen?',
                    possible_answers: [
                        'Kyllä',
                        'Ei',
                    ],
                    correct_answer: 0,
                    selected_answer: null,
                },
                {
                    question: 'Millä profiililla Geberit Mapress -järjestelmää voi puristaa?',
                    possible_answers: [
                        'V',
                        'C',
                        'M',
                        'U',
                    ],
                    correct_answer: 2,
                    selected_answer: null,
                },
                {
                    question: 'Mitä putkikokoja Geberit Mapress -järjestelmässä on?',
                    possible_answers: [
                        '15 mm – 54 mm',
                        '12 mm – 108 mm',
                        '8 mm – 76 mm',
                        '20 mm – 125 mm',
                    ],
                    correct_answer: 1,
                    selected_answer: null,
                },
                {
                    question: 'Montako Geberit-viemärijärjestelmää on Onnisen varasto-ohjelmassa?',
                    possible_answers: [
                        '1',
                        '2',
                        '3',
                        '4',
                    ],
                    correct_answer: 2,
                    selected_answer: null,
                },
                {
                    question: 'Mikä massiiviviemärin ominaispaino on per metri?',
                    possible_answers: [
                        '1 kg',
                        '2 kg',
                        '3 kg',
                        '4 kg',
                    ],
                    correct_answer: 2,
                    selected_answer: null,
                },
                {
                    question: 'Saako Geberit Silent-Pro -järjestelmässä käyttää yleiskannakkeita?',
                    possible_answers: [
                        'Kyllä',
                        'Ei',
                    ],
                    correct_answer: 1,
                    selected_answer: null,
                },
                {
                    question: 'Millä tavoin viemärijärjestelmä Silent-db20 voidaan liittää',
                    possible_answers: [
                        'Juottamalla, liimaamalla ja sulattamalla',
                        'Hitsaamalla, peilillä ja pannoilla',
                        'Pannoilla, muhveilla ja liimaamalla',
                    ],
                    correct_answer: 1,
                    selected_answer: null,
                },
                {
                    question: 'Mikä IDOn malleista on huuhtelukaulukseton wc-sarja (Rimfree)',
                    possible_answers: [
                        'Trevi',
                        'Seven D',
                        'Glow',
                    ],
                    correct_answer: 2,
                    selected_answer: null,
                },
                {
                    question: 'Mihin s-lukollinen wc viemäröidään?',
                    possible_answers: [
                        'lattiaan',
                        'seinään',
                        'kattoon',
                    ],
                    correct_answer: 0,
                    selected_answer: null,
                },
                {
                    question: 'Myydäänkö IDOn wc-istuimet ilman kantta?',
                    possible_answers: [
                        'Kyllä',
                        'Ei',
                    ],
                    correct_answer: 0,
                    selected_answer: null,
                },
                {
                    question: 'IDOn wc-istuimet valmistetaan',
                    possible_answers: [
                        'Puolassa',
                        'Tšekissä',
                        'Suomessa',
                        'Thaimaassa',
                    ],
                    correct_answer: 2,
                    selected_answer: null,
                },
                {
                    question: 'IDOn kylpyhuonekalusteet valmistetaan',
                    possible_answers: [
                        'Puolassa',
                        'Tšekissä',
                        'Suomessa',
                        'Italiassa',
                    ],
                    correct_answer: 2,
                    selected_answer: null,
                },
                {
                    question: 'Montako eri IDO-kalustesarjaa on olemassa?',
                    possible_answers: [
                        '1',
                        '2',
                        '3',
                        '4',
                    ],
                    correct_answer: 2,
                    selected_answer: null,
                },
                {
                    question: 'IDOn suihkutuotteet ovat nimeltään',
                    possible_answers: [
                        'Showerama',
                        'Showerbama',
                        'Showerbona',
                        'Showeshower',
                    ],
                    correct_answer: 0,
                    selected_answer: null,
                },
                {
                    question: 'Voiko IDOn suihkuoven lähtökulmaa säätää?',
                    possible_answers: [
                        'Kyllä',
                        'Ei',
                    ],
                    correct_answer: 0,
                    selected_answer: null,
                },
            ],
            answers: [],
        }
    },
    mounted() {
        const questions = document.getElementById('questions');
        VueScrollTo.scrollTo(questions);
    },
    computed: {
        ...mapGetters([
            'getUserInfo',
        ]),
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();

            if ( !isValid ) {
                this.error = true;
                return;
            }

            if ( this.answers.length ) {
                this.answers.forEach( (answer,question) => {
                    this.questions[question]['selected_answer'] = answer;
                } );

                this.$http.post(`${process.env.VUE_APP_API_DOMAIN}/backend/index.php/proccess/post-submit`, {
                    questions: this.questions,
                    user: this.getUserInfo,
                }).then( () => {
                    this.$store.dispatch('setAnswers', this.questions);
                    this.$store.dispatch('setStep2Valid', true);
                    this.$router.push({ name: 'step3' });
                } );
            }
        },
    },
}
</script>