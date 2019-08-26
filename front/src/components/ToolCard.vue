<template>
  <q-card flat bordered class="custom-card">
    <q-card-section>
      <div class="row no-wrap">
        <div class="col">
          <div class="text-h6">
            <a v-if="tool.link" :href="tool.link" target="_blank">{{ tool.title }}</a>
            </div>
          <div class="text-subtitle">{{ tool.description }}</div>
        </div>

        <div class="col-auto">
          <q-btn flat icon="clear" no-caps
            @click="confirmRemoveTool(tool)"
          >
            remove
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row no-wrap">
        <div class="col">
          <span class="text-subtitle text-bold"
            v-for="(tag, index) in tool.tags"
            :key="tag + index"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </q-card-section>
  <remove-dialog></remove-dialog>
  </q-card>
</template>

<script>
import RemoveDialog from './RemoveDialog'

export default {
  components: {
    RemoveDialog
  },
  data () {
    return {
      teste: {}
    }
  },
  props: {
    tool: {
      title: '',
      link: '',
      description: '',
      tags: []
    }
  },
  methods: {
    confirmRemoveTool (tool) {
      this.$q.dialog({
        component: RemoveDialog,
        toolToRemove: tool
      })
    }
  }

}
</script>

<style>

</style>
