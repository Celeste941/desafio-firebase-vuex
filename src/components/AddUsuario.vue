<template>
  <div class="add-colaborador">
    <form @submit.prevent="handleAddColaborador">
      <input v-model="nuevoColaboradorNombre" placeholder="Nombre" class="input-field" />
      <input v-model="nuevoColaboradorEmail" placeholder="Correo Electrónico" class="input-field" />
      <button type="submit" class="submit-btn">Agregar</button>
    </form>
    <p v-if="mensajeExito" class="mensaje-exito">{{ mensajeExito }}</p>
    <p v-if="mensajeError" class="mensaje-error">{{ mensajeError }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      nuevoColaboradorNombre: "",
      nuevoColaboradorEmail: "",
      mensajeExito: "",
      mensajeError: "",
    };
  },
  methods: {
    ...mapActions(["addColaborador"]),
    async handleAddColaborador() {
      if (
        this.nuevoColaboradorNombre.trim() === "" ||
        this.nuevoColaboradorEmail.trim() === ""
      ) {
        this.mensajeError = "Por favor, complete todos los campos.";
        return;
      }

      // Validar correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.nuevoColaboradorEmail)) {
        this.mensajeError = "Por favor, ingrese un correo electrónico válido.";
       
        return;
      }

      const nuevoColaborador = {
        nombre: this.nuevoColaboradorNombre,
        email: this.nuevoColaboradorEmail,
      };
      await this.addColaborador(nuevoColaborador);
      this.nuevoColaboradorNombre = "";
      this.nuevoColaboradorEmail = "";
      this.mensajeExito = "Usuario agregado correctamente!";
      this.mensajeError = "";
      setTimeout(() => {
        this.mensajeExito = "";
      }, 3000); // Oculta el mensaje después de 3 segundos
    },
  },
};
</script>

<style scoped>
.add-colaborador {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.add-colaborador form {
  display: flex;
  flex-direction: column;
}

.input-field {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.input-field:focus {
  outline: none;
  border-color: #23a2b8;
  box-shadow: 0 0 5px rgba(35, 162, 184, 0.5);
}

.submit-btn {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #23a2b8;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #1a889c;
}

.mensaje-exito {
  color: green;
  margin-top: 10px;
  text-align: center;
}

.mensaje-error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
