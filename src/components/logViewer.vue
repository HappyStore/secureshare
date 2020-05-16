<template>
    <v-textarea v-model="text" readonly outlined auto-grow filled>
    </v-textarea>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data: function() {
        return {
            text: 'text'
        }
    }
});
</script>
