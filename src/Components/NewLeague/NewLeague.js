import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchNbaTeams from '../../apiCalls/apiCalls'
import nbaCleaner from '../../helpers/dataCleaner'
import addNbaToStore from '../../actions/index'

export class NewLeague extends Component {
    constructor(){ 
        super()
    }

    showNbaData = async () => {
        try{
            const nbaCall = await fetchNbaTeams()
            console.log(nbaCall)
            const nbaData = await nbaCleaner(nbaCall)
            this.props.setNbaData(nbaData)
        }catch(error){

        }
    }

    render(){
        return (
            <div className="new-league">
                <h1>Create New League</h1>
                <button onClick={this.showNbaData}>Create League</button>
            </div>
        )
    }

}

export const mapDispatchToProps = (dispatch) => ({
    setNbaData: (nbaData) => dispatch(addNbaToStore(nbaData))
})


export default connect(null, mapDispatchToProps) (NewLeague)
