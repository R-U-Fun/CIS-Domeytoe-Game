class DailyStreaksSingleton {
	constructor() {
		if (!DailyStreaksSingleton.instance) {
			this.CurrentDailyStreaks = null;
			DailyStreaksSingleton.instance = this;
		}
		return DailyStreaksSingleton.instance;
	}

	setDailyStreaks(CurrentDailyStreaks) {
		this.CurrentDailyStreaks = CurrentDailyStreaks;
	}

	getDailyStreaks() {
		return this.CurrentDailyStreaks;
	}
}

const CurrentDailyStreaksSingleton = new DailyStreaksSingleton();
export default CurrentDailyStreaksSingleton;
