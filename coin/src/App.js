import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState(1);
  const [have, setHave] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const onChange = (event) => {
    setHave(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coin!({coins.length ? coins.length : ""})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleSelect}>
          {coins.map((coin, idx) => (
            <option key={idx} value={Math.round(coin.quotes.USD.price)}>
              {coin.name}({coin.symbol}) : ${Math.round(coin.quotes.USD.price)}
            </option>
          ))}
        </select>
      )}
      <h2>Please enter the amount</h2>
      <div>
        <input
          type="number"
          placeholder="how much?"
          onChange={onChange}
          value={have}
        />
      </div>
      {have / selected}
    </div>
  );
}

export default App;
