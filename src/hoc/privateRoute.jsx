import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function privateRoute(Component) {
  return () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem("auth");

    useEffect(() => {
      if (!auth) navigate("/");
    }, [auth]);

    return <Component />;
  };
}

export default privateRoute;
