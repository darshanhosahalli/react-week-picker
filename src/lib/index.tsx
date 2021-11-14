import React from 'react';
import moment from 'moment';
import { Button } from './Button';
import { CalendarIcon } from './icons';
import { Calendar } from './Calendar';
import { RefObject } from 'react';
import './calendar.css';

interface AppState {
    currentDate: string,
    display: boolean
}

interface AppProps {
    theme?: string;
    onJumpToCurrentWeek?: (currentDate: string) => any;
    jumpToCurrentWeekRequired?: boolean;
    onWeekPick: (startDate: string, endDate: string) => any;
}

export class WeeklyCalendar extends React.Component<AppProps,AppState> {

    theme = 'primary';
    componentRef: RefObject<HTMLDivElement>;

    constructor(props: AppProps) {
        super(props);
        this.state = {
            currentDate: moment().format('DD MMM YYYY'),
            display: false
        };
        this.theme = props.theme || this.theme;
        this.componentRef = React.createRef();
    }

    globalFunction = (event: MouseEvent) => {
        const node: Node = event.target as Node;
        if(!this.componentRef.current?.contains(node)) {
            this.setState({ display: false});
        }
    }

    componentDidMount = () => {
        document.addEventListener('click', this.globalFunction);
    }

    componentWillUnmount = () => {
        document.removeEventListener('click', this.globalFunction);
    }

    getWeekStartDate = (currentDate: string): string => {
        return moment(currentDate).startOf('week').format('DD MMM YYYY');
    }

    getWeekEndDate = (currentDate: string): string => {
        return moment(currentDate).endOf('week').format('DD MMM YYYY');
    }

    getMonth = (format: string, currentDate: string): string => {
        format = format || 'MMM'
        return moment(currentDate).format(format);
    }

    getYear = (format: string, currentDate: string): string => {
        format = format === ''? 'YYYY' : format;
        return moment(currentDate).format(format);
    }

    getDaysInMonth = (currentDate: string): number => {
        return moment(currentDate).daysInMonth();
    }

    weekPickerOnClick = () => {
        this.setState({ display: !this.state.display })
    }

    jumpToCurrentWeekOnClick = () => {
        this.setState({ 
            currentDate: moment().format('DD MMM YYYY') 
        });
        if(this.props.onJumpToCurrentWeek != undefined) {
            this.props.onJumpToCurrentWeek(this.state.currentDate);
        }
    }

    nextWeekClick = () => {
        let newMoment = moment(this.state.currentDate).add(1, 'week');
        this.setState({ currentDate: newMoment.format('DD MMM YYYY')});
    }

    previousWeekClick = () => {
        let newMoment = moment(this.state.currentDate).subtract(1, 'week');
        this.setState({ currentDate: newMoment.format('DD MMM YYYY')});
    }

    onWeekClick = (startDate: string, endDate: string) => {
        this.setState({ currentDate: startDate })
        this.props.onWeekPick(startDate,endDate);
    }

    render(): JSX.Element {
      return <div className="outline" ref={this.componentRef}>
                <Button onClick={this.weekPickerOnClick}>
                    <CalendarIcon/> {this.getWeekStartDate(this.state.currentDate)} - {this.getWeekEndDate(this.state.currentDate)}
                </Button>
                <Calendar 
                    month={this.getMonth('', this.state.currentDate)} 
                    year={this.getYear('', this.state.currentDate)}
                    daysInMonth={this.getDaysInMonth(this.state.currentDate)}
                    onPreviousClick={this.previousWeekClick}
                    onNextClick={this.nextWeekClick}
                    currentDate={this.state.currentDate}
                    onWeekClick={this.onWeekClick}
                    onJumpToCurrentWeekRequired={this.props.jumpToCurrentWeekRequired}
                    onJumpToCurrentWeek={this.jumpToCurrentWeekOnClick}
                    display={this.state.display}
                />
            </div>
    }
}