import React, { useEffect } from "react";
import { observer } from "mobx-react";
import axios from "axios";

const LandingPage: React.FC = observer(() => {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res.data));
  }, []);

  return <div>LandingPage</div>;
});

export default LandingPage;
