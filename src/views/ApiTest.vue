<template>
<div>
  <h3>{{ msg }}</h3>
  <form action="">
    <input type="file" @change="getFileInfo" />
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      msg: 'Api Test'
    }
  },
  methods: {
    getFileInfo(e) {
      const file_name = e.target.files[0].name;
      const file = e.target.file[0]; // Stream -> text 변환

      let fr = new FileReader();
      fr.onload = (ev) => {
        let base64Txt = ev.target.result;
        console.log(base64Txt.slice(base64Txt.indexOf(';base64') + 8));
        const data = base64Txt.slice(base64Txt.indexOf(';base64') + 8);
        axios
        .post('/upload/' + file_name, {param: data})
        .then(result => console.log(result));
      }
      fr.readAsDataURL(file);
    }
  },
  // mounted() {
  //   axios({
  //     method: 'post',
  //     url: 'api/productList',
  //     data: {}
  //   })
  //   .then(result => console.log(result))
  //   .catch(err => console.error(err));
  // }
}
</script>

<style>

</style>