import React, { useState } from "react";
import { useFormik } from "formik";
import CommonModal from "../CommonModal/CommonModal";
import "./ChooseNetwork.scss";
import { setNetworkListFrom } from "../../../../Redux/reducers/user/user";
import { useDispatch } from "react-redux";
import { useSwitchNetwork } from "wagmi";

const ChooseNetwork = ({
  networks,
  show,
  heading,
  handleClose,
  onSelect,
  disabledNetwork,
}) => {
  const formik = useFormik({
    initialValues: {
      network: "",
    },
    onSubmit(values, formikHelpers) {},
  });

  const { error, isLoading, pendingChainId, switchNetwork }: any =
    useSwitchNetwork();

  const switchNetworkFunction = async (id: any) => {
    await switchNetwork(id);
  };

  // Function to handle network selection
  const handleNetworkSelect = async (network: any) => {
    formik.setFieldValue("network", network.name);
    formik.setFieldValue("icon", network.icon);
    onSelect(network);
    await switchNetworkFunction(network.chainId);
  };

  return (
    <CommonModal
      heading={heading}
      show={show}
      handleClose={handleClose}
      className="choose_network_modal"
    >
      <form onSubmit={formik.handleSubmit}>
        <ul className="network_list">
          {networks.map((network: any, index: any) => (
            <li key={index}>
              <button
                onClick={() => handleNetworkSelect(network)}
                className={disabledNetwork === network.name ? "disabled" : ""}
                disabled={disabledNetwork == network.name}
              >
                <img src={network.icon} alt={network.name} />
                {network.name}
              </button>
            </li>
          ))}
        </ul>
      </form>
    </CommonModal>
  );
};

export default ChooseNetwork;
