<template lang="pug">
#new.container.grid-lg
  h1 New Idea
  form.form-horizontal
    div.form-group
      div.col-3.col-sm-12
        label.form-label(for="input-example-1") Title
      div.col-9.col-sm-12
        input.form-input(type="text" id="title" placeholder="My Awesome Idea")
    div.form-group
      div.col-3.col-sm-12
        label.form-label(for="input-example-1") Description
      div.col-9.col-sm-12
        textarea.form-input(type="text" id="description" placeholder="Tell everyone about your idea- this is where the discussion begins!")
    div.form-group

      div.col-9.col-sm-12.col-ml-auto
        button.btn.btn-primary Submit
</template>

<script>
export default {
  name: 'New',
};
</script>
