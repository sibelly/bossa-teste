<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="custom-card-add-tool">
      <q-card-section class="row">
        <q-btn icon="add" flat round dense v-close-popup />
        <div class="text-h6">Add new tool</div>
      </q-card-section>

        <q-card-section class="q-pa-lg">
            <div class="col-11">
              <div class="text-h7">Tool name</div>
              <q-input outlined v-model="form.tool" class="custom-input"/>
            </div>
            <div class="col-11 q-mt-md">
              <div class="text-h7">Tool link</div>
              <q-input outlined v-model="form.link" class="custom-input"/>
            </div>
            <div class="col-11 q-mt-md">
              <div class="text-h7">Tool description</div>
              <q-input type="textarea" rows="3" outlined v-model="form.description"/>
            </div>
            <div class="col-11 q-mt-md">
              <div class="text-h7">Tags</div>
              <q-input outlined v-model="form.tags" class="custom-input"/>
            </div>
        </q-card-section>

        <q-card-section>
          <q-card-actions class="float-right">
            <q-btn label="Add tool" text-color="black" v-close-popup no-caps/>
          </q-card-actions>
        </q-card-section>

      </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AddDialog',
  data () {
    return {
      form: {}
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
    }
  }

}
</script>

<style lang="css">

.custom-card-add-tool {
    min-width: 450px;
    min-height: 300px;
}

</style>
