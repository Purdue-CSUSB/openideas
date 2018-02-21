<template lang="pug">
#new.container.grid-lg
  h3 New Idea
  form
    div.form-group
      label.form-label(for="title") Title
      input.form-input(type="text" id="title" placeholder="My Awesome Idea")
    div.form-group
      label.form-label(for="description") Description
      textarea.form-input(type="text" id="description" placeholder="Tell everyone about your idea- this is where the discussion begins!")
    div.form-group
      custom-button(type="primary") Submit
</template>

<script>
import CustomButton from '@/components/CustomButton';

export default {
  name: 'New',
  components: {
    CustomButton,
  },
};
</script>
