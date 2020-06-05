import React, { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import "./styles.css";

const Success = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push("/"), 1000);
  }, [history]);

  return (
    <div id="page-success">
      <FiCheckCircle color="#34CB79" size={64} />
      <br />
      <strong id="success-title">Cadastro concluído!</strong>
    </div>
  );
};

export default Success;
