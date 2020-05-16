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
            this.appendLog(`File uploading started! filename: ${file.name}`);
        }
    },
    data(): State {
        return {
            fileItems: []
        }
    }
});
</script>
