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
              <q-input outlined v-model="form.title" class="custom-input"
                required name="title"
              />
            </div>
            <div class="col-11 q-mt-md">
              <div class="text-h7">Tool link</div>
              <q-input outlined v-model="form.link" class="custom-input"
                required name="link"
              />
            </div>
            <div class="col-11 q-mt-md">
              <div class="text-h7">Tool description</div>
              <q-input type="textarea" rows="3" outlined v-model="form.description"
                name="description"
              />
            </div>
            <div class="col-11 q-mt-md">
              <div class="text-h7">Tags</div>
              <q-input outlined v-model="form.tags" class="custom-input"
                name="tags"
              />
            </div>
            <!-- <div class="col-11 q-mt-md">
              <q-select
                outlined
                v-model="teste"
                use-input
                use-chips
                multiple
                hide-dropdown-icon
                input-debounce="0"
                new-value-mode="add-unique"
              />
            </div> -->
        </q-card-section>

        <q-card-section>
          <q-card-actions class="float-right">
            <q-btn label="Add tool" text-color="black" v-close-popup no-caps @click="addTool()"/>
          </q-card-actions>
        </q-card-section>

      </q-card>
  </q-dialog>
</template>

<script>
import { Notify } from 'quasar'

export default {
  name: 'AddDialog',
  data () {
    return {
      teste: [],
      form: {
        title: '',
        link: '',
        description: '',
        tags: ''
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
    addTool () {
      if (this.form.title === '' || this.form.description === '') {
        Notify.create({
          message: 'Oops! Insira pelo menos um título e uma descrição',
          color: 'red'
        })
      } else {
        this.$store.dispatch('tool/create', this.form)
        setTimeout(function () { location.reload() }, 1000)
      }
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
