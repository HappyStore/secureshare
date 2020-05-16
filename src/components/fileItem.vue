<template>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="fileName" />
          <v-list-item-subtitle v-text="value.Path" />
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { FileItemModel } from '@/models/fileItem';

export default Vue.extend({
    props: {
        value: {
            type: Object,
            required: true
        } as PropOptions<FileItemModel> 
    },
    computed: {
        fileName(): string {
            return `${this.value.Name}.${this.value.Extension}`;
        }
    }
});
</script>
