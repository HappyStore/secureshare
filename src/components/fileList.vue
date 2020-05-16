<template>
    <v-simple-table fixed-header height="300px">
            <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-cetn">Name</th>
                    <th class="text-left">Path</th>
                    <th class="text-left">Link</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(filteItem, i) in value" :key="i">
                    <td>{{ filteItem.Name }}</td>
                    <td>{{ filteItem.Path }}</td>
                    <td>{{ filteItem.Link }}</td>
                    <td class="text-center">
                        <v-btn icon @click="onGetLinkClick(filteItem)">
                            <v-icon color="grey lighten-1">link</v-icon>
                        </v-btn>
                        <v-btn icon @click="onDeleteClick(filteItem)">
                            <v-icon color="grey lighten-1">delete</v-icon>
                        </v-btn> 
                    </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { FileItemModel } from '@/models/fileItem';

export default Vue.extend({
    props: {
        value: {
            type: Array,
            required: true
        } as PropOptions<FileItemModel[]>
    },
    methods: {
        onGetLinkClick(fileItem: FileItemModel) {
            this.$emit('getFileLink', fileItem);
        },
        onDeleteClick(fileItem: FileItemModel) {
            this.$emit('deleteFile', fileItem);
        }
    }
});
</script>