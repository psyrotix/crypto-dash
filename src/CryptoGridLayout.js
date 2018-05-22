import React, {Component} from 'react';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import GridLayout from 'react-grid-layout';

class CryptoGridLayout extends Component {

  constructor() {
    super();
    this.layout = [
      {i: 'a', x: 1, y: 0, w: 5, h: 4, minW: 2, maxW: 6},
      {i: 'b', x: 1, y: 0, w: 3, h: 4, minW: 2, maxW: 4},
      {i: 'c', x: 1, y: 0, w: 3, h: 4, minW: 2, maxW: 4},
      {i: 'd', x: 4, y: 0, w: 1, h: 4},
      {i: 'e', x: 4, y: 0, w: 1, h: 4},
      {i: 'f', x: 4, y: 0, w: 1, h: 6},
      {i: 'g', x: 4, y: 0, w: 1, h: 6},
      {i: 'h', x: 4, y: 0, w: 1, h: 6}
    ];
  }

  render() {
    return (
      <div className="App">
        <GridLayout className="layout grid-layout-container" layout={this.layout} cols={12} rowHeight={30} width={1200}>
          <div className="grid-item" key="a">a</div>
          <div className="grid-item" key="b">b</div>
          <div className="grid-item" key="c">c</div>
          <div className="grid-item" key="d">d</div>
          <div className="grid-item" key="e">e</div>
          <div className="grid-item" key="f">f</div>
          <div className="grid-item" key="g">g</div>
          <div className="grid-item" key="h">h</div>
        </GridLayout>
      </div>

    );
  }
}

export default CryptoGridLayout;
