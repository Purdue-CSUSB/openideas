<template lang="pug">
#home.container.grid-lg
    header.navbar
      <section class="navbar-section">
        <a href="#" class="navbar-brand mr-2">OpenIdeas</a>
        <a href="#" class="btn btn-link">Docs</a>
        <a href="https://github.com/picturepan2/spectre" class="btn btn-link">GitHub</a>
      </section>
      <section class="navbar-section">
        <div class="input-group input-inline">
          <input class="form-input" type="text" placeholder="search">
          <button class="btn btn-primary input-group-btn">Search</button>
        </div>
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
