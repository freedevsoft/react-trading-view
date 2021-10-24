import './App.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
// "width": 980,
// "height": 610,
// "symbol": "BINANCE:BTCUSDT",
// "interval": "D",
// "timezone": "Etc/UTC",
// "theme": "dark",
// "style": "1",
// "locale": "en",
// "toolbar_bg": "#f1f3f6",
// "enable_publishing": false,
// "allow_symbol_change": true,
// "container_id": "tradingview_21771"
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Live Tokenz Charts</h1>
        <TradingViewWidget
          symbol="BTCUSDT"
          exchange
          theme={Themes.DARK}
          locale="EN"
        />
      </div>
    </div>
  );
}

export default App;
