import './App.css';
import React from 'react';
import ChessTimer from './ChessTimer.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {timerOne: false, timerTwo: false}
        this.switchTimer = this.switchTimer.bind(this);
    }

    switchTimer() {
        if(this.state.timerOne === false && this.state.timerTwo === false){
            this.setState({timerOne: true});
        }
        else if (this.state.timerOne === true && this.state.timerTwo === false) {
            this.setState({timerOne: false, timerTwo: true});
        }
        else {
            this.setState({timerOne: true, timerTwo: false});
        }
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container" >
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <ChessTimer active={this.state.timerOne} />
                            </Grid>
                            <Grid item xs={6}>
                                <ChessTimer active={this.state.timerTwo} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={this.switchTimer} size="large">
                                    Switch
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
