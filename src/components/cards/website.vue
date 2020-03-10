<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
            class="mx-auto"
            :elevation="hover ? 12: 1"
    >
      <v-img
              class="white--text align-end z-0"
              height="200px"
              :src="'https://design.maliquankai.com/' + post.cover"
      >
        <v-expand-transition>

          <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2  v-card--reveal white--text px-3 z-10"
                  style="height: 100%;"
          >
                <div>{{ post.content }}</div>

          </div>
        </v-expand-transition>
      </v-img>

      <v-card-title>{{ post.title }}</v-card-title>

      <v-card-text class="text--primary">
        <div>{{ post.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
                color="orange"
                text
        >
          Share
        </v-btn>

        <v-btn
                color="orange"
                text
        >
          Explore
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-hover>

</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { PostInterface } from '~/apollo/schema/posts'

@Component
export default class WebsiteCard extends Vue {
  @Prop(Object) post!: PostInterface
}
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    /*opacity: .8;*/
    position: absolute;
    width: 100%;
  }
</style>
