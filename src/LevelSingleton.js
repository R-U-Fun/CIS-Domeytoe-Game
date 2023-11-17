class LevelSingleton {
  constructor() {
    if (!LevelSingleton.instance) {
      this.CurrentLevel = null;
      LevelSingleton.instance = this;
    }

    return LevelSingleton.instance;
  }

  setLevel(CurrentLevel) {
    this.CurrentLevel = CurrentLevel;
  }

  getLevel() {
    return this.CurrentLevel;
  }
}

const CurrentLevelSingleton = new LevelSingleton();
export default CurrentLevelSingleton;
