import React, { Component } from 'react';
import BookList from '../containers/book_list';
import StudentList from '../containers/student_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <div>React simple starter</div>
      <BookList/>
      <StudentList />
      </div>
    );
  }
}
