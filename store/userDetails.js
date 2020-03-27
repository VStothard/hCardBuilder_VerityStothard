export const state = () => ({
  givenName: '',
  surname: '',
  email: '',
  phone: '',
  houseNumber: '',
  street: '',
  suburb: '',
  state: '',
  postCode: '',
  country: ''
});

export const getters = {
  getUserDetails(state) {
    return {
      ...state
    };
  }
};

export const actions = {
  setField({ state, commit }, params) {
    commit("setField", {
      fieldName: params.fieldName,
      value: params.value
    });
  }
};

export const mutations = {
  setField(state, { fieldName, value }) {
    state[fieldName] = value;
  }
};
