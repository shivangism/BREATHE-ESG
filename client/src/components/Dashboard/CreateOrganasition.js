import React, { Component } from 'react'
import SVG1 from "../../Stock Images/SVG (1).png"


export class CreateOrganasition extends Component {
  render() {
    return (
      <div className='createOrganisation' >
            <div className='box-left' >
                <img src={SVG1} alt="svg1" title='svg1'/>
            </div>
            <div>
                <div className='box-right'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  magna aliqua
                    </p>
                    <button> Create Organisation</button>
                    <div>
                </div>
                </div>
            </div>    
      </div>
    )
  }
}

export default CreateOrganasition
