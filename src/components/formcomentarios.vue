<template>
  <div>
    <h1>Comentarios</h1>
    <div class="container">
      <form>
        <div class="mb-4">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            placeholder="Nombre"
          />
        </div>
        <div class="mb-4">
          <label for="Correo Electronico" class="form-label">Correo Electronico</label>
          <input type="text"
          class="form-control"
          id="correo"
          placeholder="Correo Electronico"
          >
        </div>
        <div class="mb-4">
          <label for="comentario" class="form-label">Comentario</label>
          <textarea class="form-control" >Comentario</textarea>
          <p></p>
          <button type="submit" class="btn btn-primary">Enviar Comentario</button>
        </div>
        <p></p>
      </form>
      <div class="mb-5">
          <label for="comentarios" class="form-label">Comentario Publicado</label>
          <textarea class="form-control" id="comentarios" rows="4"></textarea>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HOLA",
  enviarAlerta() {
    var dato = document.getElementById("textBox").value;
    document.getElementById("set").innerHTML = dato;
  },
};
</script>
<style scoped>
.container {
 display: flex;
}
.mb-4{
  margin-left: 14vh;
  width: 40vh;
  text-align: left;
}
.mb-5{
  margin-left: 30vh;
  width: 40vh;
  text-align:center;
}
.button {
  margin-top: 5vh;
  width: 22%;
  height: 5vh;
}
</style>
