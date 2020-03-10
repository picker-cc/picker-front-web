<template>
<v-content id="homePage">
  <v-container
          fluid
          class="grey lighten-5 mb-6"
          style="width: 1200px; padding-top: 140px"
  >
    <v-card v-for="(item, index) in items" :key="index">
      {{item}}
    </v-card>
  </v-container>
  <v-container class="grey lighten-5">
    <v-row
            no-gutters
            style="height: 150px;"
    >
      <v-col
              v-for="align in alignments"
              :key="align"
              :align-self="align"
      >
        <v-card
                class="pa-2"
                outlined
                tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-content>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class HomePage extends Vue {
  items: string[] = [
    'start',
    'center',
    'end'
  ]
}
</script>
<style lang="stylus">
  #homePage
    width 1236px
</style>
