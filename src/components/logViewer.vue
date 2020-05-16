<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Логи</v-toolbar-title>
            <v-spacer />
            <v-btn @click="onClearLogsClick"  text>
                Очистить
            </v-btn>
        </v-toolbar>
        <v-card-text>
            <v-textarea v-model="text" readonly :rows="15" />
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
    data: function() {
        return {
            text: '',
        }
    },
    mounted: function() {
        this.text = this.logs.join('\n\n');
    },
    methods: {
        ...mapActions(['clearLogs']),
        onClearLogsClick() {
            this.clearLogs();
        }
    },
    computed: {
        ...mapState([
            'logs'
        ])
    },
    watch: {
        logs(newValue: [], oldValue: []) {
            if (newValue.length === 0) {
                this.text = '';
                return;
            }

            let separator = '\n\n';
            if (this.text.length === 0) {
                separator = '';
            }
            this.text = this.text + separator + newValue[newValue.length - 1];
        }
    }
});
</script>
