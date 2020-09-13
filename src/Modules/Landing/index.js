import React from "react";
import classes from './styles.module.css'
import Filter from "../Filter";
import LaunchCardSection from "../LaunchCardSection";
import axios from "axios";
import {withRouter} from 'react-router-dom'

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    fetchData = (limit = 10, filters = '') => {
        this.setState({loading: true});
        axios
            .get(`https://api.spacexdata.com/v3/launches?limit=${limit}&${filters}`)
            .then(res => {
                console.log('Data', res.data);
                this.setState({data: res.data, loading: false})
            })
            .catch(e => {
                console.log('Error while fetching data ', e)
                this.setState({loading: false})
            })
    };


    componentDidMount() {
        this.props.history.listen((location, action) => {
            this.fetchData(10, location.pathname?.substr(1))

        });
        this.fetchData(10)
    }

    render() {
        return (
            <>
                <div className={classes.Heading}>
                    <h3 className={classes.Bold}>SpaceX Launch Programs</h3>
                </div>
                <div className={classes.Container}>
                    <Filter/>
                    {
                        !this.state.loading ?
                            // 0 ?
                            <LaunchCardSection data={this.state.data}/>
                            :
                            <div className={classes.Cont}>
                                <div className={classes.LoaderContainer}>
                                    <div className={classes.Loader}></div>
                                </div>
                            </div>
                    }
                </div>
            </>
        )
    }
}

export default withRouter(Landing)
