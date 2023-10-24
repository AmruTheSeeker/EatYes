"use client"

import React, { useState } from "react";
import { useEffect } from "react"; 
import { Modal} from "flowbite-react";


export const BMIModal = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [modal, setModal] = useState(false);

    useEffect(() => {
    const calculateBmi = () => {
      setBmi(weight / ((height/100) * (height/100)));
    };

    calculateBmi();
  }, [weight, height]);
return (
  <div className="mt-5">
    <button
      variant="primary"
      onClick={() => {
        setModal(true);
      }}
    >
      Calculate Your BMI
    </button>

    <Modal show={modal} onHide={() => setModal(false)}>
      <Modal.Header>
        <h1>Calculate Your BMI</h1>
      </Modal.Header>
      <Modal.Body>
        <input
          className="font-black"
          type="number"
          placeholder="75 Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className="font-black"
          type="number"
          placeholder="165 Height (m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          variant="primary"
          onClick={() => {
            setModal(false);
          }}
        >
          Calculate
        </button>
      </Modal.Footer>
    </Modal>
    <div className="mt-[-34px] ml-40">
      <h4 className="font-bold">Your BMI: {bmi.toFixed(2)}</h4>
    </div>
  </div>
);
}



