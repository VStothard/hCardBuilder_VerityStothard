<template>
  <div class="text-left">
    <label :for="fieldConfig.fieldName || uid" class="block text-gray-600 uppercase text-xs font-semibold">{{fieldConfig.label}}</label>
    <input
      :id="fieldConfig.fieldName || uid"
      :name="fieldConfig.fieldName"
      :type="fieldConfig.type"
      :placeholder="fieldConfig.placeholder"
      v-model="value"
      class="block border border-gray-400 rounded mb-2 p-2 w-full font-serif text-base"
    >
  </div>
</template>
<script>
export default {
  props: {
    storeName: {
      type: String,
      required: true
    },
    fieldConfig: {
      type: Object,
      required: true
    }
  },
  computed: {
    value: {
      get: function() {
        return this.$store.state[this.storeName][this.fieldConfig.fieldName];
      },
      set: function(value) {
        this.$store.dispatch(`${this.storeName}/setField`, {
          fieldName: this.fieldConfig.fieldName,
          value
        });
      }
    }
  },
  data() {
    return {
      uid: this._uid
    }
  }
};
</script>
