// import { useState, useEffect } from "react";
import { Fragment } from "react";
import FullScreenLoader from "./components/FullscreenLoader";
import Homepage from "./pages/Homepage";

function App() {
  // const [loading, setLoading] = useState(false);
  

  // useEffect(() => {
  //   setLoading(true);
  //   const timeout = setTimeout(() => setLoading(false), 500); 
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <Fragment>
      <Homepage />
    </Fragment>
      
  );
}

export default App;
