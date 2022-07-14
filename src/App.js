// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import ChipList from "./components/ChipList";
import Banner from "./components/Banner";
// import { ProgressBar } from "loading-animations-react";

function App() {
 const [chipListData, setChipListData] = useState([]);
 const [selectedChip, setSelectedChip] = useState(0);

 const Loading = () => {
  <div className='loading' style={{ color: "white" }}>
   Loading...
  </div>
 };

 useEffect(() => {
  const getMyNfts = async () => {
   const openseaData = await fetch(
    "https://testnets-api.opensea.io/assets?asset_contract_address=0x33baB90d2FDa4a979c93323a88BD9216E072112d&order_direction=asc",{
    'Access-Control-Allow-Origin':'*'
}
   ).then((response) => {
    return response.json();
   });

   setChipListData(openseaData.assets.reverse());
  };

  getMyNfts();
 }, []);

 return (
  <div className='App'>
   <Header />
   {chipListData ? (
    chipListData.length > 0 && (
     <>
      <Banner
       chipListData={chipListData}
       setSelectedChip={setSelectedChip}
       selectedChip={selectedChip}
      />
      <ChipList chipListData={chipListData} setSelectedChip={setSelectedChip} />
     </>
    )
   ) : (
    <Loading />
   )}
  </div>
 );
}

export default App;
