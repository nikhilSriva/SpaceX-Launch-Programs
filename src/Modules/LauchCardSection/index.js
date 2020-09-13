import React from "react";
import classes from './styles.module.css'
import './styles.css'
import {Card} from 'react-bootstrap';
import {isEmpty} from 'lodash'

const LaunchCardSection = ({data}) => {

    return (
        <div className={classes.FlexWrap}>
            {
                !isEmpty(data) && data.map(item => {
                    return (
                        <div className={classes.CardContainer}>
                            <Card className={classes.Card}>
                                <Card.Img className={classes.logoContainer} variant="top"
                                          src={item?.links?.mission_patch || ''}/>
                                <Card.Body
                                    style={{padding: '15px 0 15px 0'}}
                                >
                                    <label style={{
                                        fontSize: 17,
                                        fontWeight: '800',
                                        color: '#4b518b'
                                    }}>{item.mission_name} #{item.flight_number}</label>
                                    <div>
                                        <div style={{fontSize: 17, fontWeight: '800'}}>Mission Ids</div>
                                        <ul>
                                            {
                                                !isEmpty(item.mission_id) ?
                                                    item.mission_id.map(item => (
                                                        <li>{item}</li>
                                                    ))
                                                    : 'N/a'
                                            }
                                        </ul>
                                    </div>

                                    <div style={{display: 'flex'}}>
                                        <div style={{fontSize: 17, fontWeight: '800', paddingRight: '5px'}}>
                                            Launch Year:
                                        </div>
                                        <div style={{fontSize: 17}}>{item.launch_year}</div>
                                    </div>

                                    <div style={{display: 'flex'}}>
                                        <div style={{fontSize: 17, fontWeight: '800', paddingRight: '5px'}}>
                                            Successful Launch
                                        </div>
                                        <div style={{fontSize: 17}}>{!item.launch_success ? 'No' : 'Yes'}</div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div style={{fontSize: 17, fontWeight: '800', paddingRight: '5px'}}>
                                            Successful Landing
                                        </div>
                                        <div style={{fontSize: 17}}>{!item.land_success ? 'No' : 'Yes'}</div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default React.memo(LaunchCardSection)
// export default LaunchCardSection
