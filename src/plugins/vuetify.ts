import Vue from 'vue';
// @ts-ignore
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#162447',
        secondary: '#1f4068',
        accent: '#1b1b2f',
        error: '#e43f5a'
      }
    },
  },
  icons: {
    iconfont: 'md',
  },
});
