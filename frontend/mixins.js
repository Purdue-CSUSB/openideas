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

/* eslint-disable */
export const autoresize = {
  directives: {
    autoresize: {
      inserted(el) {
        console.log(el)
        el.style.height = `${el.scrollHeight}px`;
        el.style.overflow = 'hidden';
        el.style.resize = 'none';
        console.log ('Done did.')
        function OnInput() {
          this.style.height = 'auto';
          this.style.height = `${this.scrollHeight}px`;
          this.scrollTop = this.scrollHeight;
          window.scrollTo(
            window.scrollLeft,
            this.scrollTop + this.scrollHeight
          );
        }
        el.addEventListener('input', OnInput, false);
      },
    },
  },
};
