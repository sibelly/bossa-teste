<template>
  <q-layout>
    <q-page-container>
      <q-page>

asdasdas
{{ processing }}

{{ tools }}

  <ul>
    <li
      v-for="tool in tools"
      :key="tool.id">
      {{ 't-' + tool.title }} - {{ 'z' + tool.link }}
      <br>
    </li>
  </ul>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Tool',
  computed: mapState({
    tools: state => state.tool.tools,
    processing: state => state.processing
  })
}
</script>

<style lang="scss" scoped>

</style>
