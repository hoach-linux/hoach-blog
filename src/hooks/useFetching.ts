import { useState } from "react";

export const useFetching = (callback: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetching = async () => {
    try {
      await callback();
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, errorMessage] as const;
};
