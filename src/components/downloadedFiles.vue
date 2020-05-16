<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Скачанные файлы</v-toolbar-title>
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
    data: function(): State {
        return {
            fileItems: [
                {
                    Name: 'biba',
                    Extension: 'boba',
                    Path: 'C:\\docs\\biba.boba'
                },
                {
                    Name: 'Heroes IV',
                    Extension: 'exe',
                    Path: 'C:\\games\\Heroes IV.exe'
                },
                {
                    Name: 'Diplomsyka',
                    Extension: 'ppt',
                    Path: 'C:\\docs\\Diplomsyka.ppt'
                },
                 {
                    Name: 'Diplomsyka',
                    Extension: 'doc',
                    Path: 'C:\\docs\\Diplomsyka.doc'
                },
                {
                    Name: 'Overwatch',
                    Extension: 'exe',
                    Path: 'C:\\games\\Overwatch.exe'
                },
            ],
        }
    },
});
</script>
