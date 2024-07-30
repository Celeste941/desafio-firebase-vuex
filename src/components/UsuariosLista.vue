<template>
  <div class="list-user">
    <h2>Lista de Colaboradores</h2>
    <ul>
      <li v-for="colaborador in colaboradores" :key="colaborador.id" class="colaborador-item">
        <div class="colaborador-info">
          <span class="colaborador-email">{{ colaborador.email }}</span>
          <span class="colaborador-nombre">{{ colaborador.nombre }}</span>
        </div>
        <button class="delete-btn" @click="deleteColaborador(colaborador.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["colaboradores"]),
  },
  methods: {
    ...mapActions(["deleteColaborador"]),
  },
  mounted() {
    this.$store.dispatch("fetchColaboradores");
  },
};
</script>

<style scoped>
.list-user {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.list-user h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.list-user ul {
  list-style-type: none;
  padding: 0;
}

.colaborador-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.colaborador-item:hover {
  background-color: #f1f1f1;
}

.colaborador-info {
  display: flex;
  flex-direction: column;
}

.colaborador-email {
  font-weight: bold;
  color: #555;
}

.colaborador-nombre {
  color: #888;
}

.delete-btn {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #c0392b;
}
</style>
