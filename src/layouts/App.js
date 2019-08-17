import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            {<Navigation />}
          </nav>
          <header>
            {<Header />}
          </header>
          <main>

            <section className="page">
              {<Page />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;