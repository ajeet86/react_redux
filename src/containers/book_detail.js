import React,{ Component } from 'react';
import { connect } from 'react-redux';


 class Bookdetail extends Component{
          
    render(){
        if(!this.props.book){
          return <div> please click on a book first</div>

        }
         return(
            <div>sssbook details

                {this.props.book.title}
            </div>
         )
                
         
    }

}

function mapStateToProps(state){
    return{
        book:state.activebook
    }

}

export default connect(mapStateToProps)(Bookdetail);
