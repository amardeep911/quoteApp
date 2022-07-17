import React, { Fragment } from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DetailQuotes = () => {
    const param = useParams();
    const DUMMY_QUOTES = [
        {id: 'q1', author: 'Amardeep', text: 'Learning react is fun'},
        {id: 'q2', author: 'Ranjan', text: 'Learning react is always a fun'}
    ]
    const [item]  = DUMMY_QUOTES.filter(x=>x.id === param.quoteId)
    console.log(param.quoteId)
    console.log(item);
  return (
    <Fragment>
        
            <HighlightedQuote text ={item.text} author = {item.author} />
        <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments/> 
        </Route>
    </Fragment>
    

  )
}

export default DetailQuotes