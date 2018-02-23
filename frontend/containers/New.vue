<template lang="pug">
#new.container.grid-lg
  h3 New Idea
  .form
    TextField(v-model='title' label='Title' placeholder='My Awesome Idea!')
    MyTextArea(v-model='description' label='Description' placeholder='Tell everyone about your idea- this is where the discussion begins!')
    .form-group
      custom-button(type="primary" :onClick='submitIdea({ title, description, author: user.name })') Submit
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CustomButton from '@/components/CustomButton';
import TextField from '@/components/TextField';
import MyTextArea from '@/components/TextArea';

export default {
  name: 'New',
  components: {
    CustomButton,
    TextField,
    MyTextArea,
  },
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: { ...mapActions('ideas', { submitIdea: 'create' }) },
  computed: { ...mapState('auth', ['user']) },
};
</script>
