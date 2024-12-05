import WormholeConnect from '@wormhole-foundation/wormhole-connect';
import wormholeConfig, { theme } from './wormhole.config';
    
  function App() {
    return (
      <div>
        <WormholeConnect config={wormholeConfig} theme={theme} />
      </div>
    )
  }
  export default App