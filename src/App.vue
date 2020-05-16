<template>
  <v-app>
    <v-content>
      <v-toolbar dense color="primary">
        <v-toolbar-title>Secure Share</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="onThemeSwitcherClick">
          <v-icon> {{ isDark ? 'brightness_4' : 'brightness_5' }}</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fluid>
        <v-row>
          <v-col :cols="12" :md="6" :lg="4">
            <user-files />
          </v-col>
          <v-col :cols="12" :md="6" :lg="4">
            <downloaded-files />
          </v-col>
          <v-col :cols="12" :md="12" :lg="4">
            <log-viewer />
          </v-col>
        </v-row>
      </v-container>
      <v-footer absolute color="transparent">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>МАИ</strong>
        </v-col>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import LogViewer from '@/components/logViewer.vue';
import DownloadedFiles from '@/components/downloadedFiles.vue';
import UserFiles from '@/components/userFiles.vue';

export default Vue.extend({
  components: {
    LogViewer,
    DownloadedFiles,
    UserFiles
  },
  data: function() {
    return {
      // @ts-ignore
      isDark: this.$vuetify.theme.dark,
    }
  },
  methods: {
    onThemeSwitcherClick(event: any) {
      this.isDark = !this.isDark;
      // @ts-ignore
      this.$vuetify.theme.dark = this.isDark;
    }
  }
});
</script>

<style>
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background: white;
    -webkit-box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
}
::-webkit-scrollbar-thumb {
    background: #8f8f8f;
    -webkit-box-shadow: inset 1px 1px 2px rgba(0,0,0,0.2);
}
::-webkit-scrollbar-thumb:hover {
    background: #5c5c5c;
}
::-webkit-scrollbar-thumb:active {
    background: #424242;
    -webkit-box-shadow: inset 1px 1px 2px rgba(0,0,0,0.3);
}
</style>
