class DonutMaker{
    constructor() {
        this.donutCount = 0;
        this.CurrentClickValue = 1;

        this.autoClickerCount = 0;
        this.autoClickerCost = 100;

        this.clickMultiplierCount = 0;
        this.clickMultiplierCost = 10;
    }

    getDonutCount() {
        return this.donutCount;
    }

    getCurrentClickValue() {
        return this.CurrentClickValue;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    getClickMultiplierCount() {
        return this.clickMultiplierCount;
    }

    getClickMultiplierCost() {
        return this.clickMultiplierCost;
    }

    addDonutCount(int) {
        this.donutCount += int;
    }

    addAutoClicker() {
        this.autoClickerCount++;
    }

    addMultiplierCount() {
        this.clickMultiplierCount++;
    }

    updateAutoClickerCost () {
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
    }

    updateClickMultiplierCost() {
        this.clickMultiplierCost *= 1.1;
    }

    updateCurrentClickValue() {
        this.CurrentClickValue = (1 * Math.pow(1.2, this.clickMultiplierCount));
    }
} 

export default DonutMaker;