import React, {Fragment}from 'react'
import Card from './Card'

const CardList = (props) => {
  const {robots} = props
  const cards = robots.map((user,index) => (
    <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email} />
  ))
  return (
    <Fragment>
      {cards}
    </Fragment>
    
  )
}

export default CardList