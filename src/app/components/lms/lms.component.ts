import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { Progress } from 'src/app/models/progress.model';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular, a popular front-end framework.',
      duration: '5 weeks',
      enrollmentDeadline: new Date('2024-03-01')
    },
  ];

  students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      enrolledCourses: []
    },
  ];

  progress: Progress[] = [
    {
      courseId: 1,
      studentId: 1,
      assignmentScores: { "Assignment 1": 95 },
      completionStatus: 'In Progress'
    },
  ];

  certificates: { studentId: number; courseId: number; certificateId: string }[] = [
    {
      studentId: 1,
      courseId: 1,
      certificateId: 'CERT-1-1-123456'
    },
  ];

  addCourse(form: NgForm) {
    // write your logic here
  }

  enrollStudentToCourse(form: NgForm) {
    // write your logic here
  }

  updateProgress(form: NgForm) {
    // write your logic here
  }

  assignCertificate(form: NgForm) {
    // write your logic here
  }

  getCoursesTitle(courseId: number): string {
    // write your logic here
    return "";
  }

  getStudentName(studentId: number): string {
    // write your logic here
    return "";
  }

  getCourseTitle(courseId: number): string {
    // write your logic here
    return "";
  }
}
