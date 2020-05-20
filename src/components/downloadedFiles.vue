<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Скачанные файлы</v-toolbar-title>
        </v-toolbar>
        <file-list :value="fileItems" />
        <download-file-dlg 
            :uuid="uuid" :port="port" :host="host" :savePath="savePath"
            @fileLoad="onFileLoad" @dialogClose="onDialogClose" @fileInput="onFileInput"
        />
        <div style="height: 50px; position: relative" />
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';


import fileList from '@/components/fileList.vue';
import downloadFileDlg from '@/components/downloadFileDlg.vue';
import { apiClient } from '@/api';
import { FileItemModel } from '@/models/fileItem';
import { readDownloadConfigFile } from '@/logic/downloadConfigFileParser';

interface State {
    fileItems: FileItemModel[];
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
            fileItems: [],
            host: '',
            port: 8080,
            savePath: '',
            uuid: ''
        }
    },
    methods: {
        ...mapActions([
            'appendLog'
        ]),
        async onFileLoad() {
            this.appendLog(`DOWNLOADING FILE FROM port: ${this.host}; host: ${this.host}; uuid: ${this.uuid};`);
            const status = await apiClient.download({
                host: this.host,
                port: this.port,
                savePath: this.savePath,
                uuid: this.uuid
            });
            this.appendLog(`DOWNLOAD COMPLETE WITH STATUS: ${status}`);
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
