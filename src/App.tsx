import WormholeConnect from '@wormhole-foundation/wormhole-connect';
import wormholeConfig from './wormhole.config';
    
  function App() {
    return (
      <div>
        <WormholeConnect config={wormholeConfig} />
      </div>
    )
  }
  export default App