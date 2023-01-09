import React, { Component } from 'react'
// import Fa from '@fortawesome/free-solid-svg-icons'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import UserDP from "../../Stock Images/UserDp.jpg"




export class LeftDashboard extends Component {
   
    render() {
      return (
        <div className='leftDashboard'>
          <img src={UserDP}></img>
          <p className='name' ><strong>Name</strong></p>
          <p className='organaisation' >Orgnaisation</p>
          <div id="Menu">
            <div><PeopleAltIcon/> Accounts</div>
            <div> <NavigateNextIcon/>Projects</div>
          <div className='registration'><CreateNewFolderIcon/>Registration</div>
          </div>
        </div>
        
      )
    }
}

export default LeftDashboard
