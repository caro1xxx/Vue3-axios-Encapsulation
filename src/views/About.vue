<template>
  <div class="about">
    <h1 @click="change">{{ a }}</h1>
    <button @click="getdata">click</button>
    <!-- <div v-for="d in data.datas">
      <h1>{{ d.name }}</h1> -->
    <!-- </div> -->
  </div>
</template>
<script>
import { ref,reactive,onMounted } from "vue"
import { get,post } from "../http/api"
export default {
  setup() {
    const a = ref('ok');
    const data = reactive({
        datas: {
          timestamp: String,
          code: Number,
          message: String,
          data: {
            deviceId: Number,
            regs: [
              {
                addr: Number,
                type: String,
                value: String,
              }
            ]
          }
        },
    });
    const change = () => {
      a.value = "No";
    };
    const getdata = () => {
      post("/test/device/writeReg",{device: 24318, addr: 40001, isBool: true})
      .then(function(res){
        // data.datas = res.data;
        console.log(data.datas);
      });
    };
    // onMounted(()=>{
    //   getdata()
    // })

    return { a,change,getdata,data }
  },
}
</script>

<style lang="sass">

</style>
