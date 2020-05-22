<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Скачанные файлы</v-toolbar-title>
        </v-toolbar>
        <file-list :value="downloadFiles" />
        <download-file-dlg 
            :uuid="uuid" :port="port" :host="host" :savePath="savePath"
            @fileLoad="onFileLoad" @dialogClose="onDialogClose" @fileInput="onFileInput"
        />
        <div style="height: 50px; position: relative" />
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

import fileList from '@/components/fileList.vue';
import downloadFileDlg from '@/components/downloadFileDlg.vue';
import { apiClient, DownloadRequest } from '@/api';
import { FileItemModel } from '@/models/fileItem';
import { readDownloadConfigFile } from '@/logic/downloadConfigFileParser';

interface State {
    host: string;
    port: number;
    savePath: string;
    uuid: string;
}

export default Vue.extend({
    components: {
        fileList,
        downloadFileDlg
    },
    data: function(): State {
        return {
            host: '',
            port: 8080,
            savePath: '',
            uuid: ''
        }
    },
    computed: {
        ...mapState(['downloadFiles'])
    },
    methods: {
        ...mapActions([
            'appendLog',
            'addDownloadFile'
        ]),
        async onFileLoad(downloadRq: DownloadRequest) {
            this.appendLog(`Скачивание файла: ${downloadRq.host}; host: ${downloadRq.port}; uuid: ${downloadRq.uuid};`);
            const status = await apiClient.download({
                host: downloadRq.host,
                port: downloadRq.port,
                savePath: downloadRq.savePath,
                uuid: downloadRq.uuid
            });
            const downloadedFile: FileItemModel = {
                Uuid: downloadRq.uuid,
                Path: downloadRq.savePath,
                Status: 'ready'
            }
            this.addDownloadFile(downloadedFile);
            this.appendLog(`Скачивание файла завершилось со статусом: ${status}`);
        },
        onDialogClose() {
            this.host = '';
            this.port = 0;
            this.savePath = '';
            this.uuid = '';
        },
        onFileInput(file: File) {
            readDownloadConfigFile(file)
                .then(c => {
                    this.port = c.port;
                    this.host = c.host;
                    this.savePath = c.savePath;
                    this.uuid = c.uuid;
                })
                .catch(err => console.log(err));
            
        }
    }
});
</script>
