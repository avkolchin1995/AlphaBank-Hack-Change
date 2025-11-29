import { useCallback, useState } from 'react';

export const useFetching = (callback: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const fetching = useCallback(
        async (...arg: any) => {
            try {
                setIsLoading(true);
                return await callback(...arg);
            } catch (e) {
                setError(e);
                console.error(e.response?.data?.reason);
                throw e;
            } finally {
                setIsLoading(false);
            }
        },
        [callback]
    );

    return [isLoading, error, fetching];
};
