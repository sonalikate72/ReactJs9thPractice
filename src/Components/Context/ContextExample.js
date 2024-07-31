import { Button } from "@mui/material";
import React, { useContext, useState } from "react";

const MyContext = React.createContext();
export function ContextExample() {
  const [theme, setTheme] = useState("Light");
  return (
    <div>
      <h3>Parent Componenet:{theme}</h3>

      <MyContext.Provider value={theme}>
        <ChildComponet />
      </MyContext.Provider>
      <br />
      <br />
      {/* <button onClick={()=>{
            setTheme(theme=="Light"?"dark":"Light")
        }}>Theme</button> */}
      <Button
        variant="contained"
        onClick={() => {
          setTheme(theme == "Light" ? "Dark" : "Light");
        }}
      >
        Theme
      </Button>
    </div>
  );
}

function ChildComponet() {
  // const theme = useContext(MyContext);
  return (
    <div>
      <h3>Child:</h3>
      <br />
      <GarandChildComponete />
    </div>
  );
}

function GarandChildComponete() {
  const theme = useContext(MyContext);
  return (
    <div>
      <h3>GrandChild:{theme}</h3>
    </div>
  );
}
