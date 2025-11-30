export const useClientLevel = (income: number) => {
    const levels = [
        { level: 1, min: 50000, max: 70000 },
        { level: 2, min: 70000, max: 150000 },
        { level: 3, min: 150000, max: 150000 },
        { level: 4, min: 150000, max: 300000 },
        { level: 5, min: 300000, max: 1000000 },
        { level: 6, min: 1000000, max: Infinity },
    ];

    const current =
        levels.find((l) => income >= l.min && income < l.max) ||
        levels[levels.length - 1];

    const progress =
        current.max === Infinity
            ? 100
            : ((income - current.min) / (current.max - current.min)) * 100;

    const missing = (current.max === Infinity ? 0 : current.max - income).toFixed(2);

    return {
        level: current.level,
        min: current.min,
        max: current.max,
        progress: Math.min(Math.max(progress, 0), 100),
        missing,
    };
};
