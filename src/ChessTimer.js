import * as React from "react";
import Paper from '@material-ui/core/Paper';

class ChessTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {time: {}, seconds: 600, timer: 0};
        this.toggleTimer = this.toggleTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let minute_divisor = secs % (60 * 60);
        let minutes = Math.floor(minute_divisor / 60);

        let seconds_divisor = minute_divisor % 60;
        let seconds = Math.ceil(seconds_divisor)

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };

        return obj;
    }

    componentDidMount() {
        let timeLeft = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeft})
    }

    componentDidUpdate(prevProps) {
        if (this.props.active !== prevProps.active){
            this.toggleTimer()
        }
    }

    toggleTimer() {
        if (this.state.timer === 0 && this.state.seconds > 0) {
            this.setState({timer: setInterval(this.countDown, 1000)});
        } else {
            clearInterval(this.state.timer)
            this.setState({timer: 0})
        }
    }

    countDown(){
        // remove one second, set state for re-render
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (seconds === 0 ) {
            clearInterval(this.state.timer);
        }
    }

    render() {
        return(
            <Paper>
                m: {this.state.time.m} s: {this.state.time.s}
            </Paper>
        )
    }
}
export default ChessTimer;