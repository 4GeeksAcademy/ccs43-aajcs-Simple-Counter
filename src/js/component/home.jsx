import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCouter";
import ReactDOM from "react-dom";

//include images into your bundle

//create your first component
const Home = () => {
  const [seconds, setSeconds] = useState(0);

  const [condicion, setCondicion] = useState(true);
  const [visible, setVisible] = useState(false);
  const [valor, setValor] = useState(0);
  const [alerta, setAlerta] = useState(false);
  useEffect(() => {
    if (condicion) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [condicion]);
  useEffect(() => {
    if (visible && valor > 0) {
      const interval = setInterval(() => {
        setValor((valor) => valor - 1);
        if (valor === 1) {
          setAlerta(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [valor, visible]);
  useEffect(() => {
    if (alerta) {
      const timer = setTimeout(() => {
        setAlerta(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alerta]);
  const contadorReverso = () => {
    return (
      <React.Fragment>
        <div className="my-2 ">
          <Button
            label="Nuevo"
            icon="pi pi-plus"
            className="p-button-success mr-2"
            onClick={() => setIsVisible(true)}
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            className="p-button-danger"
          />
        </div>
      </React.Fragment>
    );
  };
  let contar = 0;
  return (
    <div className="container">
      {setInterval(function () {
        ReactDOM.render(
          <div className="bg-black text-white fs-1 mt-4">
            <SecondsCounter seconds={contar} />
          </div>,
          document.querySelector("#app2")
        );
        contar += 1;
      }, 1000)}
      <div className="bg-black text-white fs-1 mt-4">
        <SecondsCounter seconds={seconds} />
        <div className="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-danger m-2 "
            onClick={() => setCondicion(false)}
          >
            Parada
          </button>
          <button
            type="button"
            class="btn btn-outline-success m-2"
            onClick={() => setSeconds(0)}
          >
            Reinicio
          </button>
          <button
            type="button"
            class="btn btn-outline-primary m-2"
            onClick={() => setCondicion(true)}
          >
            Reanudacion
          </button>
        </div>
        <div className="container pb-2">
          <label for="exampleInputEmail1" class="form-label">
            Ingrese un numero
          </label>
          <div class="mb-3 d-flex">
            <input
              type="number"
              class="form-control me-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setValor(e.target.value)}
            />
            <button onClick={() => setVisible(true)} class="btn btn-primary">
              enviar
            </button>
          </div>
          {visible && valor > 0 && <SecondsCounter seconds={valor} />}
          {alerta && (
            <div
              class="alert alert-primary d-flex align-items-center"
              role="alert"
            >
              <div>se alcanzó su tiempo</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
