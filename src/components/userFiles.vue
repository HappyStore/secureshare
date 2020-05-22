<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Мои файлы</v-toolbar-title>
        </v-toolbar>
        
        <file-list :value="userFiles" @getFileLink="onGetLink" ></file-list>
        <uploadFileDlg @fileUpload="onFileUpload"/>
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
            try {
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
            } catch (err) {
                this.appendLog(`ОШИБКА ПРИ ЗАГРУЗКЕ ФАЙЛА ${err}`);
            }
        },
        async onGetLink(fileItem: FileItemModel) {
            try {
                const res = await apiClient.share({
                    uuid: fileItem.Uuid
                });
                this.appendLog(`SHARE FILE: port: ${res.port}; host: ${res.host}; uuid: ${res.uuid}`);
            } catch(err) {
                this.appendLog(`ОШИБКА: ${err}`);
            }
        }
    },
});
</script>
