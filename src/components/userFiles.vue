<template>
    <v-card>
        <v-toolbar extended>
            <v-toolbar-title>Мои файлы</v-toolbar-title>
            <template v-slot:extension>
                <v-btn @click="onAddClick" color="pink" dark absolute bottom left fab>
                <v-icon>add</v-icon>
              </v-btn>
            </template>
        </v-toolbar>
        
        <file-list :value="fileItems"></file-list>
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
                Extension: 'txt'
            });
        }
    },
    data(): State {
        return {
            fileItems: [
                {
                    Name: 'biba',
                    Extension: 'boba'
                },
                {
                    Name: 'Heroes IV',
                    Extension: 'exe'
                },
                {
                    Name: 'Diplomsyka',
                    Extension: 'ppt'
                },
                 {
                    Name: 'Diplomsyka',
                    Extension: 'doc'
                },
                {
                    Name: 'Overwatch',
                    Extension: 'exe'
                },
            ]
        }
    }
});
</script>
