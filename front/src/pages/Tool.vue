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
                  <q-input outlined placeholder="search" bg-color="white"
                    class="custom-input"
                    @input="searchTools()"
                    v-model="searchTerm"
                    debounce="700"
                  >
                    <template v-slot:prepend>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
                <div class="col-lg-6 col-md-7 col-sm-6 col-xs-3">
                  <q-checkbox v-model="isSearchInTagsOnly" label="search in tags only" />
                </div>
                <div class="col-lg-6 col-md-3 col-sm-4 col-xs-2">
                  <q-btn icon="add" color="white" text-color="black" label="Add" no-caps @click="onAddTool()"/>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <tool-card
            v-for="tool in tools"
            :key="tool.id"
            :tool="tool"
          >
          </tool-card>

        </div>
        <add-dialog></add-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import AddDialog from '../components/AddDialog'
import ToolCard from '../components/ToolCard'

export default {
  name: 'Tool',
  components: {
    AddDialog,
    ToolCard
  },
  data () {
    return {
      isSearchInTagsOnly: false,
      searchTerm: '',
      tools: []
    }
  },
  computed: {
    ...mapGetters(['tool/getTools']),
    toolsGet () {
      return this.$store.getters['tool/getTools']
    },
    toolsDirect () {
      return this.$store.state.tools
    }
  },
  methods: {
    onAddTool () {
      this.$q.dialog({
        component: AddDialog
      })
    },
    searchTools () {
      if (this.searchTerm !== '') {
        if (this.isSearchInTagsOnly) {
          let params = `?tag=${this.searchTerm}`
          this.$store.dispatch('tool/index', params)
        } else {
          let params = `?filter=${this.searchTerm}`
          this.$store.dispatch('tool/index', params)
        }
      }
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
