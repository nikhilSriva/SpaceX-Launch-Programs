import React from "react";
import classes from './styles.module.css'
import './styles.css'
import {withRouter} from 'react-router-dom'

const LAUNCH_YEARS = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

class Filter extends React.Component {
    render() {
        return (
            <div className={classes.Container}>
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
                                     className={classes.FilterButton}>
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
                                <div className={classes.FilterButton}>
                                    {Boolean(item).toString()}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.SubContent}>
                    <div className={classes.Subheading}>
                        <span>Successful Landing</span>
                    </div>
                    <div className={classes.FilterSection}>
                        {
                            [1, 0].map(item => (
                                <div className={classes.FilterButton}>
                                    {Boolean(item).toString()}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Filter)
