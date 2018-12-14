import React, { Component } from "react";
import Content from "./components/content";
import Nav from "./components/nav";
import Footer from "./components/footer";
import items from "./items.json";
import Grid from '@material-ui/core/Grid';
import "./App.css";

class App extends Component {

  state = {
    items,
    selected: [],
    topScore: 0,
    currentScore: 0
  }

  handleSelect = id => {
    if (this.state.selected.indexOf(id) === -1) {
      this.state.selected.push(id)
      this.setState({currentScore: this.state.currentScore + 1})
      this.state.currentScore >= this.state.topScore ? this.setState({topScore: this.state.topScore + 1}) : this.setState({topScore: this.state.topScore})
    } else {

      this.setState({currentScore: 0, selected: []})
    }
    
    const items = this.state.items.sort(() => 0.5 - Math.random())
    this.setState({ items })
  }

  render() {
    return (
    <>
      <Nav 
      currentScore={this.state.currentScore}
      topScore={this.state.topScore}
       />
      <Grid
        container 
        justify="space-around"
        alignContent="center" >   
      {this.state.items.map(i => 
      <Content
        handleSelect = {this.handleSelect}
        key = {i.id}
        id={i.id}
        name={i.name}
        image={i.image}
      />
        )}
      </Grid>
      <Footer />
    </>
    )
  }
};

export default App;
