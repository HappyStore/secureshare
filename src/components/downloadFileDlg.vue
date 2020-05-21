<template>
    <v-dialog v-model="dialogVisible" width="500" persistent>
        <template v-slot:activator="{ on }">
            <v-btn fab dark bottom right absolute v-on="on" color="primary">
                <v-icon>get_app</v-icon>
            </v-btn>
        </template>
        <v-card @dragover.prevent @drop="onFileDrop">
            <v-toolbar>
                <v-toolbar-title>Скачать файл</v-toolbar-title>
            </v-toolbar>

            <v-form class="ma-5" v-model="formValid">
                <v-text-field v-model="host" required :rules="validationRules" label="Хост" />
                <v-text-field v-model="port" required label="Порт" />
                <v-text-field v-model="savePath" required :rules="validationRules" label="Путь" />
                <v-text-field v-model="uuid" required :rules="validationRules" label="UUID" />
            </v-form>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="onLoadClick" :disabled="!formValid">
                    Скачать
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
import { FileItemModel } from '@/models/fileItem';

import { DownloadRequest } from '@/api';

interface State {
    dialogVisible: boolean;
    formValid: boolean;
    validationRules: Function[];
}

const imitateWork = (t: number) => new Promise(resolve => setTimeout(resolve, t));

export default Vue.extend({
    data: function(): State {
        return {
            dialogVisible: false,
            formValid: false,
            validationRules: [
                (val: string) => !!val && val.length > 0 || 'Введите значение'
            ]
        }
    },
    props: {
        host: { type: String, required: true },
        uuid: { type: String, required: true },
        port: { type: String, required: true },
        savePath: { type: String, required: true }
    },
    methods: {
        async onLoadClick(): Promise<void> {
            if (this.formValid) {
                const rq:  DownloadRequest = {
                    host: this.host,
                    port: Number(this.port),
                    savePath: this.savePath,
                    uuid: this.uuid
                };
                this.$emit('fileLoad', rq);
                this.closeDialog();
            }
        },
        onCancelClick() {
            this.closeDialog();
        },
        closeDialog() {
            this.dialogVisible = false;
            this.$emit('dialogClose');
        },
        async onFileDrop(event: DragEvent) {
            event.preventDefault();
            
            if (!event.dataTransfer) {
                return;
            }

            let droppedFiles = event.dataTransfer.files;

            if(!droppedFiles || droppedFiles.length < 1) {
                return;
            };

            const file = droppedFiles[0];

            this.$emit('fileInput', file);
        }
    }
});
</script>
