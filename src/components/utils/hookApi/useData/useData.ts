import { useState, useEffect } from "react";

async function req<T>(endPoint: string): Promise<T> {
  const uri = `http://kozyreva.api/${endPoint}`;
  return await fetch(uri).then(res => res.json());
}

export function useData<T>(endPoint: string){

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const data = await req<T>(endPoint);

        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { data, isLoading, error };
};



export default useData;