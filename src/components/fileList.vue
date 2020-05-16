<template>
    <v-list two-line max-height="500" class="overflow-y-auto">
        <div v-if="value.length > 0">
            <file-item v-for="(item, i) in value" :key="i" :value="item"></file-item>
        </div>
        <v-list-item v-else disabled>
            <v-list-item-content >
                <v-list-item-title class="d-flex justify-center" v-text="'Пусто!'" />
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import FileItem from '@/components/fileItem.vue';
import { FileItemModel } from '@/models/fileItem';

export default Vue.extend({
    components: {
        FileItem
    },
    props: {
        value: {
            type: Array,
            required: true
        } as PropOptions<FileItemModel[]>
    }
});
</script>