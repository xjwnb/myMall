<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="table" :key="index" v-for="(table, index) in paramInfo.rule.tables">
      <tr class="tr" :key="ind" v-for="(tr, ind) in table">
        <td class="td" :key="i" v-for="(td, i) in tr">{{td}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-param-info {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.table .tr {
  border-bottom: 1px solid #ccc;
  
  height: 45px;
}

.tabke .tr .td {
  width: 80px;
  padding: 0px 20px;
  border-bottom: 1px solid #ccc;
}
</style>
