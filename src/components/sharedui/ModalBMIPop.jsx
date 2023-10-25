'use client';

import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { useEffect } from "react"; 
 
export const BMIPopUp = () => {
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

    const [openModal, setOpenModal] = useState(0);
    const props = { openModal, setOpenModal };
    
    return (
      <div className='mt-5'>
        <button onClick={() => props.setOpenModal("default")}>
          Calculate Your BMI
        </button>

        <Modal
          show={props.openModal === "default"}
          onClose={() => props.setOpenModal(undefined)}
        >
          <Modal.Header>
            <h1>Calculate Your BMI</h1>
          </Modal.Header>

          <Modal.Body>
            <div className="text-secondary-900 font-bold">Weight (kg)</div>
            <input
              className="font-black"
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <div className="text-secondary-900 font-bold">Height (cm)</div>
            <input
              className="font-black"
              type="number"
              placeholder="165 Height (m)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Modal.Body>

          <Modal.Footer>
            <div className="mb-9">
              <button
                className="bg-secondary-400"
                onClick={() => props.setOpenModal(undefined)}
              >
                Close
              </button>
            </div>
            <div className="mt-[-34px] ml-40">
              <h4 className="font-bold">Your BMI: {bmi.toFixed(2)}</h4>
            </div>
          </Modal.Footer>
        </Modal>

        <div className="mt-[-34px] ml-40">
          <h4 className="font-bold">Your BMI: {bmi.toFixed(2)}</h4>
        </div>
      </div>
    );
}