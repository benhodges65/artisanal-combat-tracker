export default {
    namespaced: true,
    state() {
        return {
            currentPlayers: [],
        }
    },
    mutations: {
        setCurrentPlayers(state, payload) {
            state.currentPlayers = payload
        },
        addCurrentPlayer(state, payload) {
            state.currentPlayers.push(payload)
        },
        removeCurrentPlayer(state, payload) {
            state.currentPlayers = state.currentPlayers.filter(player => player.id !== payload)
        }
    },
    actions: {
        setCurrentPlayers(context, payload) {
            context.commit('setCurrentPlayers', payload)
        },
        addCurrentPlayer(context, payload) {
            context.commit('addCurrentPlayer', payload)
        },
        removeCurrentPlayer(context, payload) {
            context.commit('removeCurrentPlayer', payload)
        }
    },
    getters: {
        getCurrentPlayers(state) {
            return state.currentPlayers
        },
        getCurrentLazyBenchmark(state) {
            let currentBenchmark = 0
            for (let player of state.currentPlayers) {
                if(player.level < 5){
                    currentBenchmark = currentBenchmark + (player.level * .25)
                }
                else if(player.level < 11)
                {
                    currentBenchmark = currentBenchmark + (player.level * .5)
                }
                else if(player.level < 17)
                {
                    currentBenchmark = currentBenchmark + (player.level * .75)
                }
                else
                {
                    currentBenchmark = currentBenchmark + player.level
                }
            }
            return currentBenchmark
        }
    }
}

