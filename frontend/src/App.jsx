import { useState, useEffect } from "react";
import Loginpage from "./auth/Loginpage";
import FullScreenLoader from "./components/FullscreenLoader";
import Signuppage from "./auth/Signuppage";

function App() {
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timeout);
  }, []);

  return loading ? <FullScreenLoader /> : (
    <div className="min-h-screen">
      <Signuppage />
    </div>
  );
}

export default App;
