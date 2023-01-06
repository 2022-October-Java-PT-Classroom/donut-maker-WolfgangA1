import DonutMaker from "./donut-maker.js";

describe("DonutMaker object", () => {
  test("Does donutMaker get donut count", () => {
    const underTest = new DonutMaker();
    underTest.getDonutCount();
    expect(underTest.donutCount).toEqual(0);
  });

  test("Does donutMaker Add one donut after click", () => {
    const underTest = new DonutMaker();
    underTest.addDonutCount();
    expect(underTest.CurrentClickValue).toEqual(1);
  })

  test("Does retrieve an Auto Clicker cost", () => {
    const underTest = new DonutMaker();
    underTest.getAutoClickerCount();
    underTest.getAutoClickerCost();
    expect(underTest.autoClickerCost).toEqual(100);
  });

  test("Does retrieve an Auto Clicker count", () => {
    const underTest = new DonutMaker();
    underTest.getAutoClickerCount();
    underTest.getAutoClickerCost();
    expect(underTest.autoClickerCount).toEqual(0);
  });

  test("Does add auto clicker", () => {
    const underTest = new DonutMaker()
    underTest.addAutoClicker();
    underTest.getAutoClickerCount();
    expect(underTest.autoClickerCount).toEqual(1)
  });

  test("Does increase amount of auto clicker after each purchase", () => {
    const underTest = new DonutMaker()
    underTest.getAutoClickerCost();
    underTest.updateAutoClickerCost();
    expect(underTest.autoClickerCost).toEqual(110)
  });

  test("Does retrieve an Multiplier Count", () => {
    const underTest = new DonutMaker()
    underTest.getClickMultiplierCount();
    underTest.getClickMultiplierCost();
    expect(underTest.clickMultiplierCount).toEqual(0)
  });

  test("Does retrieve an Multiplier Cost", () => {
    const underTest = new DonutMaker()
    underTest.getClickMultiplierCost();
    expect(underTest.clickMultiplierCost).toEqual(10);
  });

  test("Does Add Multiplier", () => {
    const underTest = new DonutMaker()
    underTest.addMultiplierCount();
    underTest.getClickMultiplierCount();
    expect(underTest.clickMultiplierCount).toEqual(1)
  })

  test("Does increase amount of Multiplier clicker after each purchase", () => {
    const underTest = new DonutMaker()
    underTest.updateClickMultiplierCost();
    expect(underTest.clickMultiplierCost).toEqual(11)
  });

});

