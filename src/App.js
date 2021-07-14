import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['BlockChain', 'ReactJS', 'TypeScript', 'JavaTpoint'] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter Item Name')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const FadeTransition = (props) => {
      return (
        <CSSTransition
          {...props}
          classNames="example"
          timeout={{ enter: 1000, exit: 1500 }} />
      )
    }

    const items = this.state.items.map((item, i) => {
      return (
        <FadeTransition key={i}>
          <div key={i} onClick={() => this.handleRemove(i)}>
            {item}
          </div>
        </FadeTransition>
      )
    });

    return (
      <div>
        <h1>Animation Example</h1>
        <button onClick={this.handleAdd}>Insert Item</button>
        <br /><br />
        <TransitionGroup>
          {items}
        </TransitionGroup>
        
      </div>
    );
  }
}

export default App;
