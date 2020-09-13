import React from "react";
import classes from './styles.module.css'
import Filter from "../Filter";
import LaunchCardSection from "../LauchCardSection";
import axios from "axios";
import {withRouter} from 'react-router-dom'

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        axios
            .get('https://api.spacexdata.com/v3/launches?limit=10')
            .then(res => {
                console.log('Data', res.data);
                this.setState({data: res.data})
            })
            .catch(e => {
                console.log('Error while fetching data ', e)
                //     })
            })
    }

    render() {
        return (
            <>
                <div className={'col'}>
                    <h3 className={classes.Bold}>SpaceX Launch Programs</h3>
                </div>
                <div className={classes.Container}>
                    <Filter/>
                    <LaunchCardSection data={this.state.data}/>
                </div>
            </>
        )
    }
}

export default withRouter(Landing)
