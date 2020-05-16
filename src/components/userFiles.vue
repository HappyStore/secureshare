<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Мои файлы</v-toolbar-title>
        </v-toolbar>
        
        <file-list :value="fileItems"></file-list>
        <v-btn fab dark bottom right absolute @click="onAddClick" color="primary">
            <v-icon>add</v-icon>
        </v-btn>
        <div style="height: 50px; position: relative" />
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import fileList from '@/components/fileList.vue';
import { FileItemModel } from '@/models/fileItem';

interface State {
    fileItems: FileItemModel[];
}

export default Vue.extend({
    components: {
        fileList
    },
    methods: {
        onAddClick(event: any) {
            this.fileItems.push({
                Name: 'bloba',
                Extension: 'txt',
                Path: 'C:\\projects\\bloba.txt',
                Status: "ready"
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
