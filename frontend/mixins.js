import Flash from '@/components/Flash';
import { mapState } from 'vuex';

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

export const toggle = {
  data() {
    return { isShowing: false };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
  },
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

export const focus = {
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};

export const loadingIndicator = {
  computed: {
    ...mapState('ideas', ['isFindPending']),
  },
};

/* eslint-disable no-param-reassign */
export const autoresize = {
  directives: {
    autoresize: {
      inserted(el) {
        el.style.height = `${el.scrollHeight}px`;
        el.style.overflow = 'hidden';
        el.style.resize = 'none';
        function onInput() {
          this.style.height = 'auto';
          this.style.height = `${this.scrollHeight}px`;
          this.scrollTop = this.scrollHeight;
          window.scrollTo(
            window.scrollLeft,
            this.scrollTop + this.scrollHeight
          );
        }
        el.addEventListener('input', onInput, false);
      },
    },
  },
};
