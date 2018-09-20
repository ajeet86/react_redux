import React,{Component} from 'react';
import { connect } from 'react-redux';


 class StudentDetails extends Component{
  
     render(){
        if(!this.props.student){
            return <div> please click on a student first</div>
  
          }
          console.log('dddddddddddd'+this.props.student.name);
            return(
                    <div>
                            <h2>studentDetails for click</h2>
                           <h1>{this.props.student.name}</h1> 

                    </div>

            )

     }


}
function mapStateToProps(state){
       
    
   
    return{
          
        student:state.activestudent
    }

}
 
export default connect(mapStateToProps)(StudentDetails);