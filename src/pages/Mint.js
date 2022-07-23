import { useSelector } from "react-redux";
import styled from "styled-components";
import GIF from "../assets/sample.gif";
import LOGO from "../assets/logo.png";
import PriceCard from "../components/PriceCard";
import SocialLinks from "../components/SocialLinks";
import Player from "../components/Player";
const Mint = ({ myFunctions }) => {
  const blockchain = useSelector((state) => state.blockchain);
  const {
    minted,
    cost,
    maxSupply,
    symbol,
    displayCost,
    mintAmount,
    setMaxMint,
    mintingStatus,
    saleEnded,
    decrement,
    increment,
    connectWallet,
    feedback,
    mintNFT,
    userBalance,
  } = myFunctions;
  return (
    <Wrapper>
      <div className="logo">
        <img src={LOGO} alt="" className="img" />
      </div>
      <div className="row container">
        <div className="mint__container col ">
          <h2 className="title">NFT Minten</h2>
          <h5 className="title">{minted} NFT Minted</h5>
          <div className="form-row">
            <h5>Balance</h5>
            <h5>
              {userBalance} {symbol}
            </h5>
          </div>
          <div className="form-row">
            <h5>Amount</h5>
            <div className="counter">
              <button onClick={decrement} className="btn">
                -
              </button>
              <span>{mintAmount}</span>
              <button onClick={increment} className="btn">
                +
              </button>
            </div>
            <button
              onClick={() => {
                setMaxMint();
              }}
              className="btn"
            >
              max
            </button>
          </div>
          <div className="form-row">
            <h5>Total</h5>
            <h5>
              {displayCost * mintAmount} {symbol}
            </h5>
          </div>
          <button
            disabled={mintingStatus === "MINTING" || saleEnded}
            className="btn btn-block"
            onClick={(e) => {
              blockchain.account === "" || blockchain.smartContract === null
                ? connectWallet(e)
                : mintNFT(e);
            }}
          >
            {blockchain.account === "" || blockchain.smartContract === null
              ? "CONNECT WALLET"
              : mintingStatus}
          </button>
          <p className="title">
            {blockchain.account
              ? `${blockchain.account.substring(
                  0,
                  7
                )}... is approved or presale`
              : feedback}
          </p>
        </div>
        <div className="mint__image col">
          <img src={GIF} alt="" className="img" />
        </div>
      </div>
      <PriceCard />
      <Player />
      <SocialLinks />
    </Wrapper>
  );
};

export default Mint;

const Wrapper = styled.section`
  .logo {
    max-width: 200px;
    width: 20%;
    margin: auto;
  }
  .mint__container {
    padding: 2rem 1rem;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
  }
  .mint__image {
    border-radius: var(--borderRadius);
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    .img {
      border-radius: inherit;
    }
  }
  .form-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid white;
  }
  .counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 40%; */
    .btn {
      background: transparent;
      font-size: 1rem;
    }
  }
  @media (min-width: 700px) {
    .mint__container {
      margin-bottom: 0;
    }
  }
`;
