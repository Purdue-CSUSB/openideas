<template lang="pug">
.form-group
  label.form-label(v-if='label') {{ label }}
  input.form-input(
    :type='type'
    :placeholder='placeholder'
    :value='value'
    :class='className'
    @input='event => $emit("input", event.target.value)'
    v-focus="true"
  )
</template>

<script>
import { focus } from '@/mixins';

export default {
  mixins: [focus],
  props: {
    label: String,
    placeholder: String,
    type: { default: 'text' },
    valid: { default: 'neutral' },
    value: String,
  },
  computed: {
    className() {
      if (this.valid === 'true') {
        return 'is-success';
      } else if (this.valid === 'false') {
        return 'is-error';
      }
      return '';
    },
  },
};
</script>
