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
                <v-file-input v-model="selectedFile" label="Файл" show-size/>
            </v-form> 

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="onLoadClick" :disabled="!canLoadFile">
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
    selectedFile: File | null;
}

export default Vue.extend({
    data: function(): State {
        return {
            dialogVisible: false,
            selectedFile: null
        }
    },
    methods: {
        onLoadClick() {
            if (this.canLoadFile) {
                this.$emit('fileUpload', this.selectedFile);
            }
        },
        onCancelClick() {
            this.closeDialog();
        },
        closeDialog() {
            this.dialogVisible = false;
            this.selectedFile = null;
        }
    },
    computed: {
        canLoadFile(): boolean {
            return !!this.selectedFile;
        }
    }
});
</script>
