import React,{Component} from 'react';
import { connect } from 'react-redux';
import {selectStudent} from '../actions/student_action';
import {bindActionCreators} from 'redux';



class studentList extends Component{
    studentRender() {
        //console.log('sss'+this.props.students[0].name);
             return this.props.students.map((student)=>{
                return(
                    <div key={student.name} onClick={()=>this.props.selectStudent(student)}>
                    <p >{student.name}</p>
                    <p >{student.age}</p>
                    </div>
                )
             })
              
          
      
  }
       render(){
          // console.log(this.props.students);

        return(
            <div style={{float: 'right'}}>call of render {this.studentRender()}</div>
        )
       }
               

       

}
const mapStateToProps = (state) => {
    return{
        students:state.students

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectStudent:selectStudent},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(studentList);