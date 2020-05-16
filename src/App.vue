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
