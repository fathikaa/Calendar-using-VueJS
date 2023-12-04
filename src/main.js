import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDu3KCMAouigECGy8xVEJ0oq0sCBjubW-c",
  authDomain: "vue-calendar-3054d.firebaseapp.com",
  projectId: "vue-calendar-3054d",
  storageBucket: "vue-calendar-3054d.appspot.com",
  messagingSenderId: "523749866414",
  appId: "1:523749866414:web:faa539ac712e658111a63f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db } ;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
