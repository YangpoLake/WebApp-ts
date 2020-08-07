import Vue from 'vue';
import MainApi from './service/MainApi';

declare module 'vue/types/vue' {
  interface Vue {
    $mainApi: MainApi;
  }
}
