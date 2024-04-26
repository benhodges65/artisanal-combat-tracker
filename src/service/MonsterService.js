export const MonsterService = {
    async getMonsterData() {
        try {
            const response = await fetch('src/service/monsters.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching monsters data:', error);
            return []; // Return an empty array if there's an error
        }
    },

    async getMonsters() {
        try {
            const monsters = await this.getMonsterData();
            return monsters;
        } catch (error) {
            console.error('Error fetching mini monsters data:', error);
            return []; // Return an empty array if there's an error
        }
    },
};

