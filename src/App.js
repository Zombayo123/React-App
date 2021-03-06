import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage/HomePage';
import Weather from './components/Weather/Weather';
import Hydro from './components/Hydro/Hydro';
import ASBD from './components/ASBD/ASBD';
import Meteogram from './components/Meteogram/Meteogram';
import RainMap from './components/RainMap/RainMap';
import HydroAnalyze from './components/HydroAnalyze/HydroAnalyze';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './components/Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Header />
                    <div className="main-content">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/Weather" component={Weather} />
                            <Route path="/Hydro" component={Hydro} />
                            <Route path="/ASBD" component={ASBD} />
                            <Route path="/Meteogram" component={Meteogram} />
                            <Route path="/RainMap" component={RainMap} />
                            <Route path="/HydroAnalyze" component={HydroAnalyze} />
                        </Switch>
                    </div>
                    <Footer />
                </div>

            </MuiThemeProvider>
        );
    }
}

export default withRouter(App);
