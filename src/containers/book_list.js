import React , {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions';
import {bindActionCreators} from 'redux';


 class BookList extends Component{
     renderList(){
         
             return this.props.books.map((book)=>{
                
                return(
                    <li  onClick={()=>this.props.selectBook(book)} 
                    key={book.title}>{book.title}
                    
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
//whenever  select book is called the result should be pass
//to all our reducer
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch)

}

//export default BookList;
export default connect(mapStateToProps,mapDispatchToProps)(BookList); 

