import React from 'react';
import Card from './components/card';

class App extends React.Component {
  render() {
    return (
      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-nft d-flex align-items-center">
              <Card/>
            </div>
          </div>
        </div>

    )
  }
}

export default App;