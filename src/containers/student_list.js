import React,{Component} from 'react';
import { connect } from 'react-redux';



class studentList extends Component{
    studentRender() {
             return this.props.students.map((student)=>{
                return(
                    <div key={student.name}>
                    <p >{student.name}</p>
                    <p >{student.age}</p>
                    <p >{student.sex}</p>
                    <p >{student.interest}</p>
                    </div>
                )
             })
              
          
      
  }
       render(){
           console.log(this.props.students);

        return(
            <div style={{float: 'right'}}>call of render {this.studentRender()}</div>
        )
       }
               

       

}
const mapStateToProps = state => {
    return{
        students:state.students

    }
}

export default connect(mapStateToProps)(studentList);