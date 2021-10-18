<template>
  <div class="about">
    <div class="myform">
      <h1>Meu Formulario</h1>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="value" />
        <label for="username">Username</label>
      </span>
      <password /> 
      <calendar />
    </div>
  </div>
</template>

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