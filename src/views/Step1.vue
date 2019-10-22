<template>
    <div class="bg-white p-70px">
        <h2 class="text-36px mb-66px">Step 1 - Your information</h2>
        <ValidationObserver v-slot="{ invalid }">
            <div class="flex flex-wrap -mx-12">
                <div class="w-1/2 px-12">
                    <ValidationProvider name="name" rules="required">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">Your full name *</label>
                            <input v-model="user_info.name" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="w-1/2 px-12">
                    <ValidationProvider name="company_name" rules="required">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">Company name *</label>
                            <input v-model="user_info.company_name" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="w-1/2 px-12 mt-4">
                    <ValidationProvider name="city" rules="required">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">City *</label>
                            <input v-model="user_info.city" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="w-1/2 px-12 mt-4">
                    <ValidationProvider name="email" rules="required|email">
                        <div class="flex flex-col" slot-scope="{ errors }">
                            <label class="text-18px font-light mb-2">Your e-mail *</label>
                            <input v-model="user_info.email" class="border border-gray-2 px-2 py-2">
                            <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
                        </div>
                    </ValidationProvider>
                </div>
            </div>
            <ValidationProvider name="gdpr" :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
                <label :class="['flex items-start font-light border border-gray-3 bg-gray-3 p-8 mt-40px',{'border-red-1':errors[0]}]">
                    <input type="checkbox" name="gdpr" v-model="user_info.gdpr" class="mt-1 mr-4">
                    GDPR: I agree to add my personal information ... keeping their personal data (name and e-mail) for x period of time for test result prooving reason. After X period test results are deleted.
                </label>
                <p class="text-red-1 text-13px font-light text-right pt-2">{{ errors[0] }}</p>
            </ValidationProvider>
            <div class="flex items-center justify-end mt-50px">
                <div class="mr-4 text-18px font-light opacity-50">Step 2:</div>
                <router-link to="/2">
                    <button :disabled="invalid" @click="submit" class="bg-blue-1 text-white text-18px px-12 py-3 flex items-center">
                        <img src="../assets/arrow_right_white.svg" alt="Take the test" class="mr-5"> 
                        Take the test
                    </button>
                </router-link>
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
        submit() {
            this.$store.dispatch('setUserInfo', this.user_info);
            this.$store.dispatch('setStep1Valid', true);
        }
    },
}
</script>