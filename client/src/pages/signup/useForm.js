// src/composables/useForm.js

import { ref, onMounted } from 'vue';

export function useForm() {
  const formData = ref({
    name: '',
    email: ''
  });

  const getFormData = () => {
    // Logic to get form data, for example, from local storage
    const storedData = JSON.parse(localStorage.getItem('formData')) || { name: '', email: '' };
    formData.value = storedData;
  };

  const setFormData = () => {
    // Logic to set form data, for example, to local storage
    localStorage.setItem('formData', JSON.stringify(formData.value));
  };

  const submitForm = () => {
    setFormData();
    // @TODO: handle form submission logic
    console.log('yeah, submitting')
  };

  onMounted(() => {
    getFormData();
  });

  return {
    formData,
    submitForm
  };
}
