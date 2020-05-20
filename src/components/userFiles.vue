<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Мои файлы</v-toolbar-title>
        </v-toolbar>
        
        <file-list :value="fileItems"></file-list>
        <uploadFileDlg @fileUpload="onFileUpload" />
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { apiClient } from '@/api';

import fileList from '@/components/fileList.vue';
import uploadFileDlg from '@/components/uploadFileDlg.vue';
import { FileItemModel } from '@/models/fileItem';

interface State {
    fileItems: FileItemModel[];
}

export default Vue.extend({
    components: {
        fileList,
        uploadFileDlg
    },
    methods: {
        ...mapActions([
            'appendLog'
        ]),
        onFileUpload(filePath: string) {
            this.appendLog(`UPLOADING FILE: ${filePath}`);
            apiClient.upload({
                filePath: filePath
            });
        }
    },
    data(): State {
        return {
            fileItems: []
        }
    }
});
</script>
