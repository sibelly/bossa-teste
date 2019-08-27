<template>
  <q-dialog ref="dialog" @hide="onDialogHide" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-btn icon="close" flat round dense v-close-popup />
        <div class="text-h6">Remove tool</div>
      </q-card-section>

      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h7">Are you sure you want to remove {{ toolToRemove.title }}</div>
          </div>

        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" text-color="black" v-close-popup no-caps />
        <q-btn label="Yes,remove" text-color="black" v-close-popup no-caps
          @click="onRemoveTool()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'RemoveDialog',
  props: {
    toolToRemove: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit('hide')
    },
    onOKClick () {
      this.$emit('ok')
      this.hide()
    },
    onCancelClick () {
      this.hide()
    },
    onRemoveTool () {
      this.$store.dispatch('tool/delete', this.toolToRemove)
      setTimeout(function () { window.reload() }, 1000)
    }
  }

}
</script>

<style>

</style>
