<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <div>
        <h1>hCard</h1>
        <form @submit.prevent="handleSubmit" >
          <div class="row">
            <div class="col">
              <input-text 
                :field-config="userDetails.givenName" 
                store-name="userDetails"
              />
            </div>
            <div class="col">
              <input-text 
                :field-config="userDetails.surname" 
                store-name="userDetails"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input-text 
                :field-config="userDetails.email" 
                store-name="userDetails"
              />
            </div>
            <div class="col">
              <input-text 
                :field-config="userDetails.phone" 
                store-name="userDetails"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input-text 
                :field-config="userDetails.houseNumber" 
                store-name="userDetails"
              />
            </div>
            <div class="col">
              <input-text 
                :field-config="userDetails.street" 
                store-name="userDetails"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input-text 
                :field-config="userDetails.suburb" 
                store-name="userDetails"
              />
            </div>
            <div class="col">
              <input-text 
                :field-config="userDetails.state" 
                store-name="userDetails"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input-text 
                :field-config="userDetails.postCode" 
                store-name="userDetails"
              />
            </div>
            <div class="col">
              <input-text 
                :field-config="userDetails.country" 
                store-name="userDetails"
              />
            </div>
          </div>
          <div class="row">
            <input type="file" id="fileUpload" name="fileUpload" @change="previewImage($event)" accept="image/*"/>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
            <button type="submit">Submit!</button>
          </div>
        </form>
      </div>
      <div>
        <pre>{{getUserDetails}}</pre>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import userDetails from '@/assets/formFieldConfig/userDetails';
import inputText from '@/components/inputText';

export default {
  components: {
    inputText
  },
  data() {
    return {
      userDetails,
      imageData: ''
    }
  },
  computed: {
    ...mapGetters({
      getUserDetails: 'userDetails/getUserDetails'
    })
  },
  methods: {
    handleSubmit() {
      console.log('done!', this.getUserDetails);
    },
    previewImage(event) {
          // Reference to the DOM input element
          var input = event.target;
          // Ensure that you have a file before attempting to read it
          if (input.files && input.files[0]) {
              // create a new FileReader to read this image and convert to base64 format
              var reader = new FileReader();
              // Define a callback function to run, when FileReader finishes its job
              reader.onload = (e) => {
                  // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                  // Read image as base64 and set to imageData
                  this.imageData = e.target.result;
              }
              // Start the reader job - read file as a data url (base64 format)
              reader.readAsDataURL(input.files[0]);
          }
      },
    fileUpload(fileData) {
      if (fileData.target.files[0]){
        let result = fileData.target.result;
        debugger

        var reader = new FileReader();

        reader.onload = function(e) {
          debugger
        }

        debugger

        // reader.onload = function (e) {
        //     $('#blah')
        //         .attr('src', e.target.result);
        // };

        // reader.readAsDataURL(input.files[0]);
      } else {
        debugger
      }

            // if (input.files && input.files[0]) {
            //     var reader = new FileReader();

            //     reader.onload = function (e) {
            //         $('#blah')
            //             .attr('src', e.target.result);
            //     };

            //     reader.readAsDataURL(input.files[0]);
            // }
        
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  @apply flex justify-between;
}

.col {
  @apply px-2;

  &:first-child {
    @apply pl-0;
  }
  &:last-child {
    @apply pr-0;
  }
}

</style>