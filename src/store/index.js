import { createStore } from 'vuex';
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import firebaseApp from '../firebaseConfig';

export default createStore({
  state: {
    colaboradores: []
  },
  mutations: {
    setColaboradores(state, colaboradores) {
      state.colaboradores = colaboradores;
    },
    addColaborador(state, colaborador) {
      state.colaboradores.push(colaborador);
    },
    deleteColaborador(state, colaboradorId) {
      state.colaboradores = state.colaboradores.filter(col => col.id !== colaboradorId);
    }
  },
  actions: {
    fetchColaboradores({ commit }) {
      const db = getFirestore(firebaseApp);
      const colaboradoresRef = collection(db, 'colaboradores');
      onSnapshot(colaboradoresRef, (snapshot) => {
        const colaboradores = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        commit('setColaboradores', colaboradores);
      });
    },
    async addColaborador({ commit }, colaborador) {
      const db = getFirestore(firebaseApp);
      const colaboradoresRef = collection(db, 'colaboradores');
      const docRef = await addDoc(colaboradoresRef, colaborador);
      commit('addColaborador', { id: docRef.id, ...colaborador });
    },
    async deleteColaborador({ commit }, colaboradorId) {
      const db = getFirestore(firebaseApp);
      const colaboradorRef = doc(db, 'colaboradores', colaboradorId);
      await deleteDoc(colaboradorRef);
      commit('deleteColaborador', colaboradorId);
    }
  }
});
