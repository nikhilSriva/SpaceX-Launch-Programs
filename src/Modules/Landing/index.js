import React from "react";
import classes from './styles.module.css'
import Filter from "../Filter";
import LaunchCardSection from "../LaunchCardSection";
import axios from "axios";
import {withRouter} from 'react-router-dom'
import {isEmpty} from 'lodash'

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            data: []
        }
    }

    fetchData = (limit = this.state.limit, filters = '',) => {
        console.log('filer', filters)
        this.setState({loading: true});
        axios
            .get(`https://api.spacexdata.com/v3/launches?limit=${limit}&${filters}`)
            .then(res => {
                // console.log('Data', res./**/data);
                if (res?.status === 200 && Array.isArray(res?.data)) {
                    if (isEmpty(filters))
                        this.setState({data: [...this.state.data, ...res.data], loading: false})
                    else
                        this.setState({data: res.data, loading: false, limit: 10})

                }
                document.addEventListener('scroll', this.trackScrolling);

            })
            .catch(e => {
                console.log('Error while fetching data ', e)
                this.setState({loading: false})
            })
    };


    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
        this.props.history.listen((location, action) => {
            this.setState({appliedFilters: location.pathname?.substr(1)}, () => this.fetchData(10, this.state.appliedFilters))
        });
        this.fetchData(this.state.limit)
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('mainWrapper');
        if (this.isBottom(wrappedElement)) {
            console.log('header bottom reached');
            document.removeEventListener('scroll', this.trackScrolling);
            this.setState((state) => ({
                limit: state.limit + 10
            }), () => {
                this.fetchData(this.state.limit, this.state.appliedFilters)
            })
        }
    };

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
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
