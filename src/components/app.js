import React, { Component } from "react";
import ReactDOM from "react-dom";
import SortableTree from "react-sortable-tree";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: "root", expanded: true, 
        children: [
          {
            title: "default",
            children: [ 
              {title: "egg", children: [
                { title: "default", children: [{ title:"chicken" }]} ,
                { title: "overrides", children: [{ title: "dogs" }] },
              ]}
            ] 
          },
          {
            title: "overrides",
            children: [{ title: "eggs" }]
          }
        ] }
      ]
    };
  }

  render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
