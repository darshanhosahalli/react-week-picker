import React from 'react';
import { NavBar } from '../NavBar';
import { CalendarTable } from '../CalendarTable';
import { Button } from '../Button';
import '../calendar.css';

interface AppProps {
    theme?: string,
    month: string,
    year: string,
    daysInMonth: number,
    onPreviousClick: () => void,
    onNextClick: () => void,
    onJumpToCurrentWeek: () => void,
    onWeekClick: (startDate: string, endDate: string) => void,
    onJumpToCurrentWeekRequired: boolean | undefined
    currentDate: string,
    display: boolean
}

interface AppState {

}

export class Calendar extends React.Component<AppProps, AppState> {

    renderJumpButton(): JSX.Element {
        if(this.props.onJumpToCurrentWeekRequired) {
            return <div className="week-button">
                        <Button onClick={this.props.onJumpToCurrentWeek}>Jump To Current Week</Button>
                    </div>
        }
        return <div className="week-button">
            </div>
    }

    render() {
        return <div className={`box ${!this.props.display? 'display' : ''}`}>
            <div className="nav-bar">
                <NavBar
                    month={this.props.month} 
                    year={this.props.year}
                    onPreviousClick={this.props.onPreviousClick}
                    onNextClick={this.props.onNextClick}
                />
            </div>
            <div>
                <CalendarTable 
                    daysInMonth={this.props.daysInMonth}
                    currentDate={this.props.currentDate}
                    onWeekClick={this.props.onWeekClick}
                />
            </div>
            {this.renderJumpButton()}
        </div>
    }

}