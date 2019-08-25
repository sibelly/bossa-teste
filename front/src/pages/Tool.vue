<template>
  <q-layout>
    <q-page-container class="custom-page-container">
      <q-page>
        <div class="q-pa-lg row items-start q-gutter-md">

          <q-card flat class="custom-card-banner">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h3">VUTTR</div>
                  <div class="text-h5">Very Useful Tools to Remember</div>
                </div>

              </div>
            </q-card-section>
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col-3">
                  <q-input outlined placeholder="search" bg-color="white">
                    <template v-slot:prepend>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
                <div class="col-7">
                  <q-checkbox v-model="isSearchInTagsOnly" label="search in tags only" class="custom-checkbox"/>
                </div>
                <div class="col-3">
                  <q-btn icon="add" color="white" text-color="black" label="Add" no-caps/>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <q-card flat bordered class="custom-card"
                  v-for="tool in tools"
                  :key="tool.id"
          >
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">
                    <q-btn flat @click=tool.link> {{ tool.title }}</q-btn>
                    </div>
                  <div class="text-subtitle">{{ tool.description }}</div>
                </div>

                <div class="col-auto">
                  <q-btn flat icon="clear" no-caps>remove</q-btn>
                </div>
              </div>
            </q-card-section>
          </q-card>

        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Tool',
  data () {
    return {
      isSearchInTagsOnly: false
    }
  },
  computed: mapState({
    tools: state => state.tool.tools,
    processing: state => state.processing
  })
}
</script>

<style lang="css" scoped>

.custom-page-container {
  padding-top: 80px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: #eeeeee;
}

.custom-card-banner {
  background-color: #eeeeee;
}

.custom-card {
  width: 100%;
}

.custom-checkbox .q-checkbox__check {
  color: white;
}
</style>
