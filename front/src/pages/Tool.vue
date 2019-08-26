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
                <div class="col-lg-10 col-md-5 col-sm-5 col-xs-10">
                  <q-input outlined placeholder="search" bg-color="white" class="custom-input">
                    <template v-slot:prepend>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-md-7 col-sm-6 col-xs-3">
                  <q-checkbox v-model="isSearchInTagsOnly" label="search in tags only" class="custom-checkbox"/>
                </div>
                <div class="col-lg-6 col-md-3 col-sm-4 col-xs-2">
                  <q-btn icon="add" color="white" text-color="black" label="Add" no-caps @click="onAddTool()"/>
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
                  <q-btn flat icon="clear" no-caps
                    @click="onRemoveTool(tool)"
                  >
                    remove
                  </q-btn>
                </div>
              </div>
            </q-card-section>
          </q-card>

        </div>
        <add-dialog></add-dialog>
        <remove-dialog></remove-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
import AddDialog from '../components/AddDialog'
import RemoveDialog from '../components/RemoveDialog'

export default {
  name: 'Tool',
  components: {
    AddDialog,
    RemoveDialog
  },
  data () {
    return {
      isSearchInTagsOnly: false
    }
  },
  computed: mapState({
    tools: state => state.tool.tools,
    processing: state => state.processing
  }),
  methods: {
    onRemoveTool (tool) {
      console.log('### tool', tool)
      this.$q.dialog({
        component: RemoveDialog,
        toolToRemove: tool
      })
    },
    onAddTool () {
      console.log('### addTool')
      this.$q.dialog({
        component: AddDialog
      })
    }
  }
}
</script>

<style lang="css">

.custom-page-container {
  padding-top: 80px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: var(--q-color-secondary);
}

.custom-card-banner {
  background-color: var(--q-color-secondary);
}

.custom-card {
  width: 100%;
}

.custom-input .q-field__control {
  height: 40px;
}
</style>
