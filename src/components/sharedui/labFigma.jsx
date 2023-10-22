"use client";
import * as React from "react";

export const Figma = () => {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Today</div>
          </div>
          <div className="div-5">
            Welcome,
            <br />
            Guest
          </div>
          <img loading="lazy" srcSet="..." className="img" />
        </div>
        <div className="div-6">
          <div className="div-7">
            <div className="div-8">CALORIES</div>
            <img loading="lazy" srcSet="..." className="img-2" />
          </div>
          <div className="div-9">
            <div className="div-10">
              Check My
              <br />
              Calory Histories
            </div>
            <div className="div-11">Base Daily Goals</div>
            <div className="div-12">
              <div className="div-13">2500</div>
              <div className="div-14">CALORIES</div>
            </div>
            <div className="div-15">Food Consumption</div>
            <div className="div-16">
              <div className="div-17">0</div>
              <div className="div-18">CALORIES</div>
            </div>
          </div>
        </div>
        <div className="div-19">BMI</div>
        <div className="div-20">
          <div className="div-21" />
          <div className="div-22" />
          <div className="div-23" />
        </div>
        <div className="div-24">
          <div className="div-25">
            Under
            <br />
            Weight
          </div>
          <div className="div-26">18.5</div>
          <div className="div-27">
            Normal
            <br />
            Weight
          </div>
          <div className="div-28">25</div>
          <div className="div-29">
            Over
            <br />
            Weight
          </div>
          <div className="div-30">30</div>
          <div className="div-31">Obesity</div>
        </div>
        <div className="div-32">SCAN THE FOOD</div>
      </div>
      <style jsx>{`
        .div {
          background-color: #ffd185;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }
        .div-2 {
          align-self: center;
          display: flex;
          margin-top: 10px;
          width: 242px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 4px;
        }
        @media (max-width: 991px) {
          .div-2 {
            justify-content: center;
          }
        }
        .div-3 {
          border-radius: 18px;
          background-color: #13ce66;
          align-self: start;
          display: flex;
          width: 79px;
          max-width: 100%;
          flex-direction: column;
          padding: 8px 20px;
        }
        .div-4 {
          color: #fff;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 12px;
          font-weight: 700;
          align-self: center;
        }
        .div-5 {
          color: #000;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 8px;
          font-weight: 700;
          align-self: center;
          margin: auto 0;
        }
        .img {
          aspect-ratio: 0.97;
          object-fit: cover;
          object-position: center;
          width: 29px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-6 {
          border-radius: 27px;
          border: 3px solid #13ce66;
          background-color: #fff;
          align-self: center;
          display: flex;
          margin-top: 11px;
          width: 242px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 10px 19px 10px 11px;
        }
        .div-7 {
          align-self: start;
          display: flex;
          margin-top: 5px;
          flex-direction: column;
        }
        .div-8 {
          color: #f95f62;
          text-align: center;
          font-family: Chewy, sans-serif;
          font-size: 18px;
          font-weight: 400;
          align-self: center;
        }
        .img-2 {
          aspect-ratio: 1.02;
          object-fit: cover;
          object-position: center;
          width: 100%;
          stroke-width: 8px;
          overflow: hidden;
          border-radius: 50%;
          align-self: stretch;
          margin-top: 8px;
          flex-grow: 1;
        }
        .div-9 {
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-10 {
          color: #fff;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 6px;
          font-weight: 700;
          align-self: end;
          border-radius: 18px;
          background-color: #f95f62;
          width: 56px;
          max-width: 100%;
          padding: 3px 6px 3px 7px;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin-right: 1px;
          }
        }
        .div-11 {
          color: #47525e;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 10px;
          font-weight: 800;
          align-self: start;
          margin-top: 22px;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-left: 9px;
            text-wrap: initial;
          }
        }
        .div-12 {
          align-self: end;
          display: flex;
          margin-top: 8px;
          width: 58px;
          max-width: 100%;
          align-items: flex-start;
          gap: 5px;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-right: 1px;
          }
        }
        .div-13 {
          color: #f95f62;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 10px;
          font-weight: 800;
          align-self: stretch;
        }
        .div-14 {
          color: #47525e;
          text-align: center;
          font-family: Chewy, sans-serif;
          font-size: 8px;
          font-weight: 400;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-14 {
            text-wrap: initial;
          }
        }
        .div-15 {
          color: #47525e;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 10px;
          font-weight: 800;
          align-self: stretch;
          margin-top: 12px;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-15 {
            text-wrap: initial;
          }
        }
        .div-16 {
          align-self: end;
          display: flex;
          margin-top: 8px;
          width: 49px;
          max-width: 100%;
          align-items: flex-start;
          gap: 14px;
        }
        .div-17 {
          color: #f95f62;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 10px;
          font-weight: 800;
          align-self: stretch;
        }
        .div-18 {
          color: #47525e;
          text-align: center;
          font-family: Chewy, sans-serif;
          font-size: 8px;
          font-weight: 400;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-18 {
            text-wrap: initial;
          }
        }
        .div-19 {
          color: #fff;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 12px;
          font-weight: 700;
          align-self: start;
          border-radius: 18px;
          background-color: #f95f62;
          margin-top: 7px;
          width: 51px;
          max-width: 100%;
          padding: 9px 15px;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-left: 4px;
          }
        }
        .div-20 {
          align-self: center;
          display: flex;
          margin-top: 16px;
          width: 128px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-20 {
            justify-content: center;
          }
        }
        .div-21 {
          background-color: #000;
          height: 14px;
          flex: 1;
        }
        .div-22 {
          background-color: #000;
          height: 14px;
          flex: 1;
        }
        .div-23 {
          background-color: #000;
          height: 14px;
          flex: 1;
        }
        .div-24 {
          align-self: center;
          display: flex;
          width: 224px;
          max-width: 100%;
          align-items: flex-start;
          gap: 9px;
        }
        @media (max-width: 991px) {
          .div-24 {
            justify-content: center;
          }
        }
        .div-25 {
          color: #f95f62;
          text-align: center;
          font-family: Chewy, sans-serif;
          font-size: 8px;
          font-weight: 400;
          align-self: stretch;
        }
        .div-26 {
          color: #47525e;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 10px;
          font-weight: 800;
          align-self: center;
          margin: auto 0;
        }
        .div-27 {
          color: #f95f62;
          text-align: center;
          font-family: Chewy, sans-serif;
          font-size: 8px;
          font-weight: 400;
          align-self: stretch;
        }
        .div-28 {
          color: #47525e;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 10px;
          font-weight: 800;
          align-self: center;
          margin: auto 0;
        }
        .div-29 {
          color: #f95f62;
          text-align: center;
          font-family: Chewy, sans-serif;
          font-size: 8px;
          font-weight: 400;
          align-self: stretch;
        }
        .div-30 {
          color: #47525e;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 10px;
          font-weight: 800;
          align-self: center;
          margin: auto 0;
        }
        .div-31 {
          color: #f95f62;
          text-align: center;
          font-family: Chewy, sans-serif;
          font-size: 14px;
          font-weight: 400;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-31 {
            text-wrap: initial;
          }
        }
        .div-32 {
          color: #fff;
          text-align: center;
          font-family: Lato, sans-serif;
          font-size: 20px;
          font-weight: 700;
          border-radius: 18px;
          background-color: #13ce66;
          align-self: center;
          width: 215px;
          max-width: 100%;
          margin: 16px 0 12px;
          padding: 13px 20px;
        }
      `}</style>
    </>
  );
};
