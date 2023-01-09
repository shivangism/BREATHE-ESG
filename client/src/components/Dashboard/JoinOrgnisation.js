import React, { Component } from 'react'
import SVG2 from "../../Stock Images/SVG (2).png"

export class JoinOrgnisation extends Component {
  render() {
    return (
      <div className='joinOrganisation'>
           <div className='box-left'>
           <img src={SVG2} alt="svg2" title='svg2'/>
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

export default JoinOrgnisation
