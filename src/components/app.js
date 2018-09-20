import React, { Component } from 'react';
import BookList from '../containers/book_list';
import StudentList from '../containers/student_list';
import BookDetail from '../containers/book_detail';
import StudentDetail from '../containers/student_detail';

export default class App extends Component {
  render() {
    return (
      <div>
      <div>React simple starter</div>
      <BookList/>
      <BookDetail />
      <StudentList />
      <StudentDetail />
      </div>
    );
  }
}
