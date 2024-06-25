<template>
    <div>
      <form @submit.prevent="submitForm">
        <input v-model="formData.name" placeholder="Name" />
        <input v-model="formData.email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useForm } from './useForm';
  
  export default {
    setup() {
      const { formData, submitForm } = useForm();
  
      return {
        formData,
        submitForm
      };
    }
  };
  </script>
  