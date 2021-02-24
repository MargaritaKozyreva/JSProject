import { useState, useEffect } from "react";
import "./App.css";

function useAuthenticatedUser() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [user, setUser] = useState<any>(null);

  async function req<T>(): Promise<T> {
    const uri = `http://kozyreva.api/user/1`;
    return await fetch(uri).then(res => res.json());
  }

  useEffect(() => {
    const makeInitialRequest = async (): Promise<void> => {
      try {
        const data = await req();
        setUser(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    makeInitialRequest();
  }, []);

  return { user, isLoading, error };
}

const App: React.FC = (): any => {
  const { user, isLoading, error } = useAuthenticatedUser();

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `Error: ${error.message}`;
  }

  return user ? <div>Authenticated</div> : <div>Login page</div>;
};

export default App;
