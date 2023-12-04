<template>
  <v-app>
    <v-content>
      <Calendar/>
      <Clock />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar.vue';
import Clock from "./components/Clock.vue";

export default {
  name: 'App',
  components: {
    Calendar,
    Clock
},
  data: () => ({
    //
  }),
};
</script>
