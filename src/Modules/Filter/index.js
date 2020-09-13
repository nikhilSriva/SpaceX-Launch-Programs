import React from "react";
import classes from './styles.module.css'
import {withRouter} from 'react-router-dom'

const LAUNCH_YEARS = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: null,
            selectedLandStatus: null,
            selectedLaunchStatus: null

        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            this.state.selectedYear !== nextState.selectedYear
            || this.state.selectedLandStatus !== nextState.selectedLandStatus
            || this.state.selectedLaunchStatus !== nextState.selectedLaunchStatus
        );

    }

    handleRouteChangeWithFilters = () => {
        let url = '';
        Object.keys(this.state)
            .map(key => {
                if (this.state[key])
                    url += this.state[key] + '&'
            });
        this.props.history.push(url)
    };


    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.SubContainer}>
                    <div>
                        <h5 className={classes.Bold}>Filters</h5>
                    </div>
                    <div className={classes.SubContent}>
                        <div className={classes.Subheading}>
                            <span>Launch Year</span>
                        </div>
                        <div className={classes.FilterSection}>
                            {
                                LAUNCH_YEARS.map(item => (
                                    <div key={item}
                                         onClick={() => {
                                             let value = `launch_year=${item}`
                                             if (this.state.selectedYear?.includes(item))
                                                 this.setState({selectedYear: null}, this.handleRouteChangeWithFilters)
                                             else
                                                 this.setState({selectedYear: value}, this.handleRouteChangeWithFilters)
                                         }}
                                         className={[classes.FilterButton, this.state.selectedYear?.includes(item) ? classes.FilterButtonSelected : ''].join(' ')}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={classes.SubContent}>
                        <div className={classes.Subheading}>
                            <span>Successful Launch</span>
                        </div>
                        <div className={classes.FilterSection}>
                            {
                                [1, 0].map(item => (
                                    <div
                                        onClick={() => {
                                            let value = `launch_success=${!!item}`
                                            if (this.state.selectedLaunchStatus?.includes(!!item))
                                                this.setState({selectedLaunchStatus: null}, this.handleRouteChangeWithFilters)
                                            else
                                                this.setState({selectedLaunchStatus: value}, this.handleRouteChangeWithFilters)
                                        }}
                                        className={[classes.FilterButton, this.state.selectedLaunchStatus?.includes(!!item) ? classes.FilterButtonSelected : ''].join(' ')}>
                                        {Boolean(item).toString()}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={classes.SubContent}>
                        <div className={classes.Subheading}>
                            <div>Successful Landing</div>
                        </div>
                        <div className={classes.FilterSection}>
                            {
                                [1, 0].map(item => (
                                    <div
                                        onClick={() => {
                                            let value = `land_success=${!!item}`
                                            console.log('v', value)
                                            if (this.state.selectedLandStatus?.includes(!!item))
                                                this.setState({selectedLandStatus: null}, this.handleRouteChangeWithFilters)
                                            else
                                                this.setState({selectedLandStatus: value}, this.handleRouteChangeWithFilters)
                                        }}
                                        className={[classes.FilterButton, this.state.selectedLandStatus?.includes(!!item) ? classes.FilterButtonSelected : ''].join(' ')}>
                                        {Boolean(item).toString()}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Filter)
