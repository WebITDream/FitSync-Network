import React from 'react';
import Header from './pages/header';
import WhyJoin from './pages/whyJoin';
import Plans from './pages/plans';
import 'animate.css/animate.min.css'; // Import the CSS module
import './styles.css'; // Import your CSS styles
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="bg-slate-950">
        <Header />
        <WhyJoin />
        <Plans />
      </div>
    );
  }
}

export default App;
