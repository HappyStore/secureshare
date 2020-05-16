<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Скачанные файлы</v-toolbar-title>
        </v-toolbar>
        <file-list :value="fileItems" />
        <load-file-dlg @fileLoaded="onFileLoaded"/>
        <div style="height: 50px; position: relative" />
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import fileList from '@/components/fileList.vue';
import loadFileDlg from '@/components/loadFileDlg.vue';
import { FileItemModel } from '@/models/fileItem';

interface State {
    fileItems: FileItemModel[];
}

export default Vue.extend({
    components: {
        fileList,
        loadFileDlg
    },
    data: function(): State {
        return {
            fileItems: [],
        }
    },
    methods: {
        onFileLoaded(fileItem: FileItemModel) {
            console.log(fileItem.Name);
        }
    }
});
</script>
