import React, { useEffect, useState, useRef, Fragment } from "react";
import CheckoutSteps from "../../components/shipping/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../components/layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { CreditCard, Event, VpnKey } from "@material-ui/icons";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const payBtn = useRef(null);

  const submitHandler = () => {};
  return (
    <Fragment>
      <div className="h-auto py-24 px-8 md:px-0">
        <MetaData title="Payment" />

        <CheckoutSteps activeStep={2} />
        <div className="w-full md:w-[30%] mx-auto">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => submitHandler(e)}
          >
            <p className="w-fit mx-auto text-xl font-bold py-5 border-b-2 border-secondaryDark">
              Card Info
            </p>
            <div className="paymentInputFieldDivStyle">
              <CreditCard className="paymentInputFieldIconStyle" />
              <CardNumberElement className="paymentInputFieldStyle" />
            </div>
            <div className="paymentInputFieldDivStyle">
              <Event className="paymentInputFieldIconStyle" />
              <CardExpiryElement className="paymentInputFieldStyle" />
            </div>
            <div className="paymentInputFieldDivStyle">
              <VpnKey className="paymentInputFieldIconStyle" />
              <CardCvcElement className="paymentInputFieldStyle" />
            </div>

            <input
              className="slideableBtnStyles cursor-pointer"
              ref={payBtn}
              type="submit"
              value={`Pay - ${orderInfo && orderInfo.totalPrice}`}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
