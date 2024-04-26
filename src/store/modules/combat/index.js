import { parse } from 'vue/compiler-sfc'

export default {
  namespaced: true,
  state() {
    return {
      currentCombatants: []
    }
  },
  mutations: {
    setCurrentCombatants(state, payload) {
      state.currentCombatants = payload
    },
    addCurrentCombatant(state, payload) {
      let tempCombatant = { ...payload }
      tempCombatant.id = Math.floor(Math.random() * 1000000)
      if (payload.dexterity !== undefined) {
        const initiativeMod = Math.floor((payload.dexterity - 10) / 2)
        tempCombatant.initiative = Math.floor(Math.random() * 20) + initiativeMod
      }
      tempCombatant.currentDamage = 0
      state.currentCombatants.push(tempCombatant)
    },
    removeCurrentCombatant(state, payload) {
      state.currentCombatants = state.currentCombatants.filter(
        (combatant) => combatant.id !== payload
      )
    },
    applyDamage(state, payload) {
      const combatant = state.currentCombatants.find(
        (combatant) => combatant.id === payload.combatant.id
      )
      let damage = parseInt(payload.damage)
      if (combatant.currentDamage + damage >= combatant.hit_points) {
        combatant.currentDamage = combatant.hit_points
      } else if (combatant.currentDamage + damage <= 0) {
        combatant.currentDamage = 0
      } else {
        combatant.currentDamage += damage
      }
    },
    changeInitiative(state, payload) {
      const combatant = state.currentCombatants.find((combatant) => combatant.id === payload.id)
      combatant.initiative = payload.initiative
    },
    changeMaxHp(state, payload) {
      const combatant = state.currentCombatants.find((combatant) => combatant.id === payload.id)
      combatant.hit_points = payload.hit_points
    },
    resetCombat(state) {
      state.currentCombatants = []
    }
  },
  actions: {
    setCurrentCombatants(context, payload) {
      context.commit('setCurrentCombatants', payload)
    },
    addCurrentCombatant(context, payload) {
      context.commit('addCurrentCombatant', payload)
    },
    removeCurrentCombatant(context, payload) {
      context.commit('removeCurrentCombatant', payload)
    },
    applyDamage(context, payload) {
      context.commit('applyDamage', payload)
    },
    changeInitiative(context, payload) {
      context.commit('changeInitiative', payload)
    },
    changeMaxHp(context, payload) {
      context.commit('changeMaxHp', payload)
    },
    resetCombat(context) {
      context.commit('resetCombat')
    }
  },
  getters: {
    currentCombatants(state) {
      return state.currentCombatants
    }
  }
}
