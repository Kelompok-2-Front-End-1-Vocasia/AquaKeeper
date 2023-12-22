import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function authRoute(Component) {
  return () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem("auth");

    useEffect(() => {
      if (auth) {
        navigate("/home");
      } 
    }, [auth]);

    return <Component />;
  };
}

export default authRoute;
