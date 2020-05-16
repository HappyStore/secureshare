<template>
  <v-app>
    <v-content>
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
