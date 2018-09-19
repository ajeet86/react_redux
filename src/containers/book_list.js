import React , {Component} from 'react';
import {connect} from 'react-redux';

 class BookList extends Component{
     renderList(){
         console.log(this.props.books);
             return this.props.books.map((book)=>{
                console.log(book)
                return(
                    <li key={book.title}>{book.title}
                    <div>{book.pages}</div>
                    </li>

                );

             }
 )
     }
   render(){
        
    return(
         <ul>
            
             {
                 this.renderList()
             
             }
             <li>1abc</li>
         </ul>
    )
}

}
 


const mapStateToProps = (state)=>{
    return{
        books:state.books
       
    }
}
//export default BookList;
export default connect(mapStateToProps)(BookList); 

