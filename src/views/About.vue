<template>
  <div class="about">
    <div class="myform">
      <h1>Formulario do {{ $store.state.user.name }}</h1>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="mypass" />
        <label for="username">Username</label>
      </span>
      <password /> 
      <calendar />
      <ColorPicker />
      <span>{{ $store.state.user.email }}</span>
      <span>{{ $store.state.user.senha }}</span>
      <button @click="savepass" type="submit">SAVE</button>
    </div>
  </div>
</template>

<script>
  export default{
    name: "About",
    data(){
      return{
        mypass: ''
      }
    },
    methods: {
      savepass(){
        console.log("salvando")
      }
    },
  }
</script>

<style scoped lang="scss">

  .about {
    background-color: grey;
    height: 88vh;
    width: 99vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .myform{
    width: 40%;
    height: 60%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>