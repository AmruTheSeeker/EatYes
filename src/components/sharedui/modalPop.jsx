'use client';

import { useState } from 'react';
import { Modal } from 'flowbite-react';
 
export const BMRPopUp = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [bmr, setBMR] = useState(0);
  const calculateBMR = () => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    setBMR(bmr);
  };

  const handleCalculate = () => {
    calculateBMR(true);
  };

  const [openModal, setOpenModal] = useState(0);
  const props = { openModal, setOpenModal };

  return (
    <>
      <button onClick={() => props.setOpenModal("default")}>
        My Calory Needs
      </button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Basal Metabolic Rate (BMR) Calculation</Modal.Header>
        <Modal.Body>
          <div>
            <div className="text-secondary-300">
              <label>Age: </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="text-secondary-300">
              <label>Gender: </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-secondary-200"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="text-secondary-300">
              <label>Weight (kg): </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="text-secondary-300">
              <label>Height (cm): </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="text-secondary-300">
              <label>Activity Level: </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="bg-secondary-200"
              >
                <option value={1.2}>Sedentary (Little or no exercise)</option>
                <option value={1.375}>
                  Lightly active (Light exercise or sports 1-3 days a week)
                </option>
                <option value={1.55}>
                  Moderately active (Moderate exercise or sports 3-5 days a
                  week)
                </option>
                <option value={1.725}>
                  Very active (Hard exercise or sports 6-7 days a week)
                </option>
                <option value={1.9}>
                  Super active (Very hard exercise or physical job)
                </option>
              </select>
            </div>

            <button onClick={handleCalculate} className="w-full mt-5">
              Calculate BMR
            </button>
          </div>
          <div className='mt-5'>
            <h2>You need : {bmr.toFixed(0)} calories per day</h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='bg-secondary-400' onClick={() => props.setOpenModal(undefined)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 


