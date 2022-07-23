import React from "react";
import styled from "styled-components";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdPolymer } from "react-icons/md";
import polygonLogo from "../assets/polygon.png";
const PriceCard = () => {
  return (
    <Wrapper className=" container">
      <div className="each__card">
        {/* <MdPolymer className="polygon" /> */}
        <img src={polygonLogo} alt="" className="polygon" />
        <h3>5.000 </h3>
        <h4>Einzgartige NFTs</h4>
      </div>
      <div className="each__card">
        <MdAccountBalanceWallet />
        <h3>8 Matic </h3>
        <h4> Preis Pro NFT</h4>
      </div>
    </Wrapper>
  );
};

export default PriceCard;
const Wrapper = styled.section`
  padding-top: 4rem;
  .polygon {
    width: 4rem;
  }
  svg,
  .polygon {
    color: var(--primary-500);
    font-size: 4rem;
    position: absolute;
    left: 1rem;
    top: -2rem;
    background-color: white;
    border-radius: 50%;
    padding: 0.5rem;
  }
  .each__card {
    position: relative;
    padding: 2rem;
    border: 2px solid var(--white);
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    border-radius: var(--borderRadius);
    text-align: center;
    /* text-overflow: clip; */
  }
  @media (min-width: 750px) {
    max-width: 700px;
    gap: 3rem;

    display: flex;
    .each__card {
    }
  }
`;
