import Vue from 'vue';
import Vuex from 'vuex';
import { FileItemModel, ValidateFileItem } from '@/models/fileItem';

Vue.use(Vuex);

interface ApplicationState {
  logs: string[];
  userFiles: FileItemModel[];
  downloadFiles: FileItemModel[];
}

export default new Vuex.Store<ApplicationState>({
  state: {
    logs: [],
    userFiles: [],
    downloadFiles: []
  },
  mutations: {
    PUSH_LOG(state, strToAppend: string) {
      state.logs.push(strToAppend);
    },
    CLEAR_LOGS(state) {
      state.logs = [];
    },
    PUSH_USER_FILE(state, fileItem: FileItemModel) {
      state.userFiles.push(fileItem);
    },
    UPDATE_USER_FILE(state, fileItem: FileItemModel) {
      // TODO: UPDATE_USER_FILE
    },
    PUSH_DOWNLOAD_FILE(state, fileItem: FileItemModel) {
      state.downloadFiles.push(fileItem);
    },
    UPDATE_DOWNLOAD_FILE(state, fileItem: FileItemModel) {
      // TODO: UPDATE_DOWNLOAD_FILE
    }
  },
  actions: {
    appendLog({ commit }, strToAppend: string) {
      if (!strToAppend || strToAppend.length === 0) {
        return;
      }
      commit('PUSH_LOG', strToAppend);
    },
    clearLogs({ commit }) {
      commit('CLEAR_LOGS');
    },
    addNewUserFile({ commit }, fileItem: FileItemModel) {
      const errMsg = ValidateFileItem(fileItem);
      if (errMsg) {
        throw new Error(errMsg);
      }
      commit('PUSH_USER_FILE', fileItem);
    },
    updateUserFile({ commit }, fileItem: FileItemModel) {
      const errMsg = ValidateFileItem(fileItem);
      if (errMsg) {
        throw new Error(errMsg);
      }
      commit('UPDATE_USER_FILE', fileItem);
    },
    addDownloadFile({ commit }, fileItem: FileItemModel) {
      const errMsg = ValidateFileItem(fileItem);
      if (errMsg) {
        throw new Error(errMsg);
      }
      commit('PUSH_DOWNLOAD_FILE', fileItem);
    },
    updateDownloadFile({ commit }, fileItem: FileItemModel) {
      const errMsg = ValidateFileItem(fileItem);
      if (errMsg) {
        throw new Error(errMsg);
      }
      commit('UPDATE_DOWNLOAD_FILE', fileItem);
    }
  },
})
