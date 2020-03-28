<template>
  <div class="w-full max-w-md my-12 md:my-0">
    <p class="text-right text-sm mb-1 uppercase text-gray-500 font-semibold">hCard Preview</p>
    <div class="w-full bg-white shadow">
      <div class="h-24 bg-gray-700 text-white flex justify-between p-4 items-end">
        <p class="text-2xl font-serif font-bold">{{getUserDetails.givenName }} {{getUserDetails.surname }}</p>
        <img v-if="imageData.length" class="display-img" :src="imageData" :alt="`${getUserDetails.givenName } ${getUserDetails.surname } profile photo`">
        <img v-else class="display-img" src="~/assets/img/defaultImg.png" alt="`default profile photo`">
      </div>
      <div class="p-4">
        <div class="card-field">
          <p class="card-label  w-1/4">Email</p>
          <p class="w-3/4 font-serif">{{ getUserDetails.email }}</p>
        </div>
        <div class="card-field">
          <p class="card-label  w-1/4">Phone</p>
          <p class="w-3/4 font-serif">{{ getUserDetails.phone }}</p>
        </div>
        <div class="card-field">
          <p class="card-label  w-1/4">Address</p>
          <p class="w-3/4 font-serif">{{ addressLineOne }}</p>
        </div>
        <div class="card-field">
          <p class="card-label  w-1/4"></p>
          <p class="w-3/4 font-serif">{{ addressLineTwo }}</p>
        </div>
        <div class="flex">
          <div class="w-1/2 card-field">
            <p class="card-label  w-1/2">Post Code</p>
            <p class="w-1/2 font-serif">{{ getUserDetails.postCode }}</p>
          </div>
          <div class="w-1/2 card-field">
            <p class="card-label  w-1/3">Country</p>
            <p class="w-2/3 font-serif">{{ getUserDetails.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import userDetails from '@/assets/formFieldConfig/userDetails';

export default {
  name: 'hCard',
  props: {
    imageData: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      getUserDetails: 'userDetails/getUserDetails'
    }),
    addressLineOne() {
      return `${this.getUserDetails.houseNumber || ''} ${this.getUserDetails.street || ''} ${this.getUserDetails.suburb || ''}`
    },
    addressLineTwo () {
      return `${this.getUserDetails.state || ''}, ${this.getUserDetails.country || ''}`
    }
  }
}
</script>
<style lang="scss" scoped>

.lower-img {
  margin-bottom: -30px;
}

.display-img {
  @apply lower-img w-20 h-24 shadow object-cover bg-white;
}

.card-field {
  min-height: 24px; // keep the line height even if there is no data
  @apply mb-1 border-b border-gray-300 flex justify-between items-end;
}

.card-label {
  @apply text-xs font-semibold text-gray-600;
}

</style>