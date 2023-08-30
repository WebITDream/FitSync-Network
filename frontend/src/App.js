import React from 'react';
import Header from './pages/header';
import WhyJoin from './pages/whyJoin';
import Plans from './pages/plans';
import AboutUs from './pages/aboutUs';
import Footer from './pages/footer';
import 'animate.css/animate.min.css'; // Import the CSS module
import './styles.css'; // Import your CSS styles
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
        <AboutUs />
        <WhyJoin />
        <Plans />
        <Footer />
      </div>
    );
  }
}

export default App;
