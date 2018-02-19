import Flash from '@/components/Flash';

const flash = {
  data() {
    return { flashes: [] };
  },
  methods: {
    flash(message, type = 'success') {
      this.flashes.push({ message, type });
    },
    removeFlash(index) {
      this.flashes.splice(index, 1);
    },
  },
  components: { Flash },
};

export default flash;
