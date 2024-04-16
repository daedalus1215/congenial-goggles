<template>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return { changesSaved: false }
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('UserList\'s component\'s beforeRouteEnter');
    next();
  },
  umounted() {
    console.log('unmounted');
  },
  beforeRouteLeave(to, from, next) {
    // calls this before we leave the component
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      next(confirm('Are you sure? You got unsaved changes!'));
    }
  },
  methods: {
    saveChanges() {
      this.changesSaved = true;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>