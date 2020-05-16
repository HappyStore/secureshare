<template>
    <v-dialog v-model="dialogVisible" width="500" persistent>
        <template v-slot:activator="{ on }">
            <v-btn fab dark bottom right absolute v-on="on" color="primary">
                <v-icon>get_app</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-toolbar>
                <v-toolbar-title>Загрузить файл по ссылке</v-toolbar-title>
            </v-toolbar>

            <v-form class="ma-5" v-model="linkValid">
                <v-text-field v-model="link" required :rules="validationRules" label="Ссылка на файл"></v-text-field>
            </v-form>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="onLoadClick" :disabled="!linkValid">
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
import { FileItemModel } from '@/models/fileItem';

interface State {
    dialogVisible: boolean;
    link: string;
    linkValid: boolean;
    validationRules: Function[];
}

const imitateWork = (t: number) => new Promise(resolve => setTimeout(resolve, t));

export default Vue.extend({
    data: function(): State {
        return {
            dialogVisible: false,
            link: '',
            linkValid: false,
            validationRules: [
                (link: string) => !!link && link.length > 0 || 'Пустая ссылка'
            ]
        }
    },
    methods: {
        async onLoadClick(): Promise<void> {
            if (this.linkValid) {
                this.closeDialog();
                // Вот тут надо начать грузить файл
                await imitateWork(5000);
                const fakeFile: FileItemModel = {
                    Name: 'fileName',
                    Extension: 'doc',
                    Link: 'fileLink',
                    Path: 'C:/downloads',
                    Status: "loading"
                }
                this.$emit('fileLoaded', fakeFile);
            }
        },
        onCancelClick() {
            this.closeDialog();
        },
        closeDialog() {
            this.dialogVisible = false;
            this.link = '';
        }
    }
});
</script>
