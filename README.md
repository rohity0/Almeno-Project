# Almeno-Project

API = > '/student/login'
method: post 
req.body : {
   email: "alice@example.com" //dummy data safed in db
   password: "1234"

  }
resposne = > token 

#-------------
* Course-List
* Api => '/course/list'
* method= get
* response = [ {} ]  // all the list data

* Course_list_By_ID
* Api => '/course/list/:id'
* method: 'get'
* response: {} // data object of id

* Enroll_In_The_Course
* Api => /course/course-enrole/:courseId/student
* method: put
* req.body : {} //empty object
* req.headers // authorization: "token"

* Studnet_Enrolled_Course
* Api => /course/student-enrolled-course
* method: get
* response : [{}] //list course enrolled by studnet
*  req.headers // authorization: "token"

* Student_Enrolled_Course_Details
* Api => /course/course/:courseId/student
* method: get
* response: {};
*  req.headers // authorization: "token"

* Course_Status_Change
* APi=. /course/course-status/:courseId
* method: put
* reqbody: data, // =>       { enrollmentStatus: "" }
* req.headers // authorization: "token"
* 
  


  
