<template lang="pug">
#home.container.grid-lg
    header.navbar
      <section class="navbar-section">
        <a href="#" class="navbar-brand mr-2">OpenIdeas</a>
        <a href="#" class="btn btn-link active"><span>Home</span></a>
        <a href="#" class="btn btn-link">All Ideas</a>
        <a href="#" class="btn btn-link">About</a>
      </section>
      <section class="navbar-section">
      user botton?
      </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'Hello Vue.js!',
      ideas: [
        {
          title: 'Make CS better',
          description: 'Fix stuff',
          author: 'mess@purdue.edu',
          votes: 1,
        },
        {
          title: 'Make CS worse',
          description: 'Break stuff',
          author: 'jh@purdue.edu',
          votes: 0,
        },
      ],
    };
  },
};
</script>
