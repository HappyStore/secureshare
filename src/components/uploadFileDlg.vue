<template>
    <v-dialog v-model="dialogVisible" width="500" persistent>
        <template v-slot:activator="{ on }">
            <v-btn fab dark bottom right absolute v-on="on" color="primary">
                <v-icon>add</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-toolbar>
                <v-toolbar-title>Загрузить файл с устройства</v-toolbar-title>
            </v-toolbar>

            <v-form class="ma-5">
                <v-file-input v-model="selectedFiles" label="Файл" show-size/>
            </v-form> 

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="onLoadClick" :disabled="!selectedFiles || selectedFiles.length === 0">
                    Загрузить
                </v-btn>
                <v-btn text @click="onCancelClick">
                    Отмена
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

interface State {
    dialogVisible: boolean;
    selectedFiles: Array<File>;
}

export default Vue.extend({
    data: function(): State {
        return {
            dialogVisible: false,
            selectedFiles: []
        }
    },
    methods: {
        async onLoadClick() {
        },
        onCancelClick() {
            this.closeDialog();
        },
        closeDialog() {
            this.dialogVisible = false;
            this.selectedFiles = [];
        }
    }
});
</script>
