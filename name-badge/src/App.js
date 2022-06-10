import React from 'react'
import Badge from './Badge'

export default function App() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    placeOfBirth: '',
    phoneNumber: '',
    favoriteFood: '',
    aboutYourself: ''
  }

  const [formData, setFormData] = React.useState(initialFormData)

  const [badgeList, setBadgeList] = React.useState([])

  function handleChange(e) {
    const {name, value} = e.target

    setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: value 
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    setBadgeList(prevBadgeList => {
      return [...prevBadgeList, formData]
    })

    clearState()
  }

  function clearState() {
    setFormData({...initialFormData})
  }

  const badges = badgeList.map(badge => <Badge 
    key={badge.email}
    {...badge}
    />)

  console.log(badges)

  return (
    <div className=''>
      <form onSubmit={handleSubmit} className='form'>
        <h2 className='title'>Badge Form</h2>
        <div className='form--top'>
          <input 
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
            minLength={3}
          />
          <input 
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
            minLength={3}
          />
          <input 
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            minLength={3}
          />
          <input 
            type='text'
            name='placeOfBirth'
            placeholder='Place of Birth'
            value={formData.placeOfBirth}
            onChange={handleChange}
            required
            minLength={3}
          />
          <input 
            type='number'
            name='phoneNumber'
            placeholder='Phone'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            minLength={3}
          />
          <input 
            type='text'
            name='favoriteFood'
            placeholder='Favorite Food'
            value={formData.favoriteFood}
            onChange={handleChange}
            required
            minLength={3}
          />
        </div>
        <textarea 
          name='aboutYourself'
          placeholder='Tell us about yourself'
          value={formData.aboutYourself}
          onChange={handleChange}
          required
          minLength={3}
        />
        <button>Submit</button>
      </form>
      <div>
        {badges}
      </div>
    </div>
  )
}