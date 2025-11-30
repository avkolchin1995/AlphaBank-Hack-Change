import { useEffect, useState } from 'react';

export function useIncomeAnimation(
    income: number,
    config?: {
        calcDuration?: number;
        randomSpeed?: number;
        animationDuration?: number;
    }
) {
    const {
        calcDuration = 800,
        randomSpeed = 40,
        animationDuration = 1200,
    } = config || {};

    const [animatedIncome, setAnimatedIncome] = useState(0);

    useEffect(() => {
        if (!income) return;

        let calcInterval = setInterval(() => {
            const randomValue = Math.random() * income * 1.2;
            setAnimatedIncome(randomValue);
        }, randomSpeed);

        const timeout = setTimeout(() => {
            clearInterval(calcInterval);

            let start = 0;
            const stepTime = 16;
            const totalSteps = animationDuration / stepTime;
            const increment = income / totalSteps;

            const interval = setInterval(() => {
                start += increment;
                if (start >= income) {
                    start = income;
                    clearInterval(interval);
                }
                setAnimatedIncome(start);
            }, stepTime);
        }, calcDuration);

        return () => {
            clearInterval(calcInterval);
            clearTimeout(timeout);
        };
    }, [income]);

    return animatedIncome;
}
