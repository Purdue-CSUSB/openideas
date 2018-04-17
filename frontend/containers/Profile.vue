<template lang="pug">
.container.grid-lg
  h3 Profile
  .columns
    .column.col-6.col-lg-12
      TextField(
          label='Name'
          v-model='name'
        )
      TextField(
          label='Email'
          v-model='email'
        )
      CustomButton(type="primary") Submit
</template>


<script>
import TextField from '@/components/TextField';
import CustomButton from '@/components/CustomButton';

export default {
  name: 'Profile',
  components: { TextField, CustomButton },
};
</script>

<style lang="sass" scoped>

</style>
