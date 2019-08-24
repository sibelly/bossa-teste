<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">

        <div><h3>VUTTR</h3></div>
        <div><h3>Very Useful Tools to Remember</h3></div>
        <div class=" shadow-4 bg-white column items-center justify-center no-wrap">
          <q-card class="pb-login-card text-white">
            <q-card-section>
              <p>ashduashdusahduash</p>
            </q-card-section>
          </q-card>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Tool',
  data () {
    return {
      email: '',
      senha: ''
    }
  },
  created () {
    console.log('$$$$$$$$$$$$$$$$')
    this.$store.dispatch('modules/index')
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
