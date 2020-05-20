<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Мои файлы</v-toolbar-title>
        </v-toolbar>
        
        <file-list :value="fileItems"></file-list>
        <uploadFileDlg @fileUpload="onFileUpload" />
        <div style="height: 50px; position: relative" />
        <input id="file-input" type="file" name="name" style="display: none;" />
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
        onFileUpload(file: File) {
            const formData = new FormData();
            formData.append('file', file);
            // TODO: UPLOAD FILE
            this.appendLog(`UPLOADING FILE: ${file.name}`);
            
        }
    },
    data(): State {
        return {
            fileItems: []
        }
    }
});
</script>
