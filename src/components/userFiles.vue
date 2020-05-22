<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Мои файлы</v-toolbar-title>
        </v-toolbar>
        
        <file-list :value="userFiles"></file-list>
        <uploadFileDlg @fileUpload="onFileUpload" />
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import { apiClient } from '@/api';

import fileList from '@/components/fileList.vue';
import uploadFileDlg from '@/components/uploadFileDlg.vue';
import { FileItemModel } from '@/models/fileItem';

interface State {
    
}

export default Vue.extend({
    components: {
        fileList,
        uploadFileDlg
    },
    computed: {
        ...mapState(['userFiles'])
    },
    methods: {
        ...mapActions([
            'appendLog',
            'addNewUserFile'
        ]),
        async onFileUpload(filePath: string) {
            this.appendLog(`Загружаем файл: ${filePath}`);
            const res = await apiClient.upload({
                filePath: filePath
            });
            const uploadedFile: FileItemModel = {
                Uuid: res.uuid,
                Path: filePath,
                Status: 'ready'
            }
            this.addNewUserFile(uploadedFile);
            this.appendLog(`Файл был загружен с uuid: ${res.uuid}`);
        }
    },
});
</script>
