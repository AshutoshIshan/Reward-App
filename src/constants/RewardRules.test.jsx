import calculatePoints from '..constants/RewardRules'

describe('Reward Points Calculations', () => {
    //positive cases
    it("should return 0 points for purchase <= $50", () => {
        expect(calculatePoints(50)).toBe(0);
        expect(calculatePoints(10)).toBe(0);
    })

    it("should return correct points for ourchase between $51 and $100", () => {
        expect(calculatePoints(75)).toBe(25); //75-50 = 25
        expect(calculatePoints(100)).toBe(50); //100-50 = 50
    })

    it("should return correct points for purchase > $100", () => {
        expect(calculatePoints(120)).toBe(90);
        expect(calculatePoints(130)).toBe(110);
        expect(calculatePoints(130)).toBe(110);
    })

    //functional/decimal values
    it("should handle decimal values correctly", () => {
        expect(calculatePoints(99.99)).toBeCloseTo(49.99, 2);
        expect(calculatePoints(120.5)).toBeCloseTo(91, 1);
    })

    //Negative / Edge cases
    it("should return 0 for 0 or negative purchase", () => {
        expect(calculatePoints(0)).toBe(0);
        expect(calculatePoints(-100)).toBe(0);
    })

    it("should return 0 for NaN or non-numeric values (fail-safe)", () => {
        expect(calculatePoints(NaN)).toBe(0);
        expect(calculatePoints(undefined)).toBe(0);
        expect(calculatePoints(null)).toBe(0);
    })

});