export const RewardRules = {
    base: 50,
    mid: 100,
    midRate: 1,
    highRate: 2
}

export const calculatePoints = (amount) => {
    const { base, mid, midRate, highRate } = RewardRules;
    if (amount <= base) return 0;
    if (amount <= mid) return (amount - base) * midRate;
    return (mid - base) * midRate + (amount - mid) * highRate;
};

