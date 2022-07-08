import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bounty from './Bounty'
import AddBountyForm from './AddBountyForm'

export default function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
      .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log(err))
  }

  function removeBounty(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function updateBounty(updates, bountyId) {
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div className="app">
      <img src="https://fontmeme.com/permalink/220708/4625df16fc3dc2bea2302c221e94248f.png" alt="the-mandalorian-font" border="0" className='title'/>
      <AddBountyForm 
        submit={addBounty}
        btnText="Add Bounty"
      />
      <div className='wanted--list'>
        {
          bounties.map((bounty, index) => 
            <Bounty 
              key={index}
              {...bounty}
              removeBounty={removeBounty}
              updateBounty={updateBounty}/>)
        }
      </div>
    </div>
  )
}
