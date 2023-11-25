class DailyChallengesSingleton {
	constructor() {
		if (!DailyChallengesSingleton.instance) {
			this.CurrentDailyChallenges = null;
			DailyChallengesSingleton.instance = this;
		}
		return DailyChallengesSingleton.instance;
	}

	setDailyChallenges(CurrentDailyChallenges) {
		this.CurrentDailyChallenges = CurrentDailyChallenges;
	}

	getDailyChallenges() {
		return this.CurrentDailyChallenges;
	}
}

const CurrentDailyChallengesSingleton = new DailyChallengesSingleton();
export default CurrentDailyChallengesSingleton;
