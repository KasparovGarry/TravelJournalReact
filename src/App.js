import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cardData from "./cardData";

function App() {
    const travelCards = cardData.map((item) => {
        return <Card key={item.id} {...item} />;
    });

    return (
        <div>
            <Navbar />
            <main>{travelCards}</main>
        </div>
    );
}

export default App;
