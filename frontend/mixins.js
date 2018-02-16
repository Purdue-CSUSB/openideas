import Flash from '@/components/Flash';

const flash = {
  data() {
    return { flash: [] };
  },
  methods: {
    flash(message, type) {
      this.flash.push({ message, type });
    },
  },
  components: { Flash },
};

export default flash;
