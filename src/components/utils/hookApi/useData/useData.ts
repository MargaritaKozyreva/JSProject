import { useState, useEffect } from "react";

const fetchHeaders = (method: string, data: any) => {
  const fetchObj: RequestInit = {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }

  return fetchObj
}

async function req<T>(method = "GET", endPoint: string, query: any = null): Promise<T> {
  const uri = `http://kozyreva.api/${endPoint}`;
  return await fetch(uri, fetchHeaders(method, query)).then(res => res.json());
}

export function useData<T>(method = "GET", endPoint: string, query: any) {

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const data = await req<T>(method, endPoint, query);

        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]);

  return { data, isLoading, error };
};



export default useData;