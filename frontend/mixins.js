import Flash from '@/components/Flash';

export const flash = {
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

export const initials = {
  filters: {
    initials(name) {
      try {
        const split = name.split(' ');
        return split[0][0] + split[1][0];
      } catch (error) {
        return name[0];
      }
    },
  },
};
