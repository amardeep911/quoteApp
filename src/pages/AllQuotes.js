import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
    {id: 'q1', author: 'Amard   eep', text: 'Learning react is fun'},
    {id: 'q2', author: 'Ranjan', text: 'Learning react is always a fun'}
]
const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}
 
export default AllQuotes