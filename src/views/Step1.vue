<template>
    <div class="bg-white p-8 lg:p-70px">
        <h2 class="text-30px lg:text-36px mb-8 lg:mb-66px">Vaihe 1 - Tietosi</h2>
        <ValidationObserver v-slot="{ invalid }" ref="observer" tag="form" @submit.prevent="submit()">
            <div class="flex flex-wrap -mx-12">
                <div class="w-full lg:w-1/2 px-12">
                    <ValidationProvider name="name" rules="required">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">Etu- ja sukunimi *</label>
                            <input v-model="user_info.name" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="w-full lg:w-1/2 px-12 mt-3 lg:mt-0">
                    <ValidationProvider name="company_name" rules="required">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">Yrityksen nimi *</label>
                            <input v-model="user_info.company_name" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="w-full lg:w-1/2 px-12 mt-4">
                    <ValidationProvider name="city" rules="required">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">Kaupunki *</label>
                            <input v-model="user_info.city" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="w-full lg:w-1/2 px-12 mt-4">
                    <ValidationProvider name="email" rules="required|email">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">Sähköpostiosoite *</label>
                            <input v-model="user_info.email" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
            </div>
            <ValidationProvider name="gdpr" :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
                <label :class="['flex items-start fake-input-wrap font-light border border-gray-3 bg-gray-3 p-8 mt-40px',{'border-red-1':errors[0]}]">
                    <input type="checkbox" name="gdpr" v-model="user_info.gdpr" class="mt-1 mr-4 invisible absolute">
                    <span><span></span></span>
                    <div class="flex-1">
                        GDPR: Suostun, että Geberit Oy voi lähettää minulle tietoja uutuustuotteista, tarjouksista ja kampanjoista (saniteettijärjestelmistä, keramiikkatuotteista, putkijärjestelmistä ja muista tuotteistamme) sähköpostilla, puhelimella tai tekstiviestillä.
                        Tämän suostumuksen saa peruuttaa milloin tahansa tulevien yhteydenottojen osalta ottamalla yhteyttä Geberit Oy:hyn (Tahkotie 1, 01530 Vantaa) tai lähettämällä sähköpostia osoitteeseen asiakaspalvelu@geberit.com.
                        Tietojasi käytetään asiakastietojen hallintaan, kyselyiden käsittelyyn sekä sopimustietoja varten Geberit-konserniin kuuluvissa yhtiöissä sekä lakisääteisten oikeuksien perusteella kolmansien osapuolien palveluntarjontaan (esim. posti ja IT-palveluntarjoajat). Voimassa on yleinen tietosuojalausuntomme, joka löytyy osoitteesta www.geberit.fi
                    </div>
                </label>
                <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
            </ValidationProvider>
            <div class="flex items-center justify-end mt-50px">
                <div class="mr-4 text-18px font-light opacity-50">Vaihe 2:</div>
                <button type="submit" class="bg-blue-1 text-white text-16px lg:text-18px px-4 lg:px-12 py-3 flex items-center">
                    <img src="../assets/arrow_right_white.svg" alt="Take the test" class="mr-5">
                    Aloita koulutus
                </button>
            </div>
        </ValidationObserver>
    </div>
</template>

<script>
export default {
    name: 'Step1',
    data: function() {
        return {
            user_info: {
                name: this.$store.state.user_info.name,
                company_name: this.$store.state.user_info.company_name,
                city: this.$store.state.user_info.city,
                email: this.$store.state.user_info.email,
                gdpr: this.$store.state.user_info.gdpr,
            },
        }
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.observer.validate();

            if ( !isValid ) {
                return;
            }

            this.$store.dispatch('setUserInfo', this.user_info);
            this.$store.dispatch('setStep1Valid', true);
            this.$router.push({ name: 'step2' });
        }
    },
}
</script>