import React from 'react'

export default function App() {
  const [formData, setFormData] = React.useState('')

  const [list, setList] = React.useState([])

  function handleChange(e) {
    setFormData(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    setList(prevList => [...prevList, formData])
  }

  const nameList = list.map(item => <li key={item}>{item}</li>)

  return (
    <form onSubmit={handleSubmit} className='name--form'>
      <h1 className='title'>Name Entry</h1>
      <input
        name='name'
        type='text'
        placeholder='Name'
        value={formData}
        onChange={handleChange}
      />
      <h1>{formData}</h1>
      <div className='button--box'>
        <button>Add to List</button>
      </div>
      
      <ol>
        {nameList}
      </ol>
    </form>
  )
}