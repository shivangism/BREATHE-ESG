import React, { Component,Fragment} from 'react';
import NavComp from '../Navbar/NavComp';
import LeftDashboard from './LeftDashboard';
import JoinOrgnisation from './JoinOrgnisation';
import CreateOrganasition from './CreateOrganasition';

export class Dashboard extends Component {
  render() {
    return (
     <Fragment>
        <NavComp></NavComp>
      <div className='dashboard'>
         <LeftDashboard></LeftDashboard>
        <div>
            <div className='rightDashboard'>
                <h2>Welcome to <span>Breathe ESG</span> </h2>
                <p>Home / Registration</p>
                <div>
                    <CreateOrganasition></CreateOrganasition>
                    <JoinOrgnisation></JoinOrgnisation>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
    )
  }
}

export default Dashboard
