import React, { Component } from 'react'
import NewLeague from '../../Components/NewLeague/NewLeague'

export class LeagueContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="leage-container">
                <NewLeague /> 
            </div>

        )
    }
}

export default LeagueContainer