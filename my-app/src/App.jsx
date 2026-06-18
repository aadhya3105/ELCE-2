import Student from "./student";
import './style.css';
function App(){
  return(
    <div>
      <h1>Student Information</h1>
      <Student
      name="Rahul sharma"
      course="Computer Science"
      marks="85"/>
      <Student
      name="Anita verma"
      course="Information technology"
      marks="89"/>
      <Student
      name="Rohan Garg"
      course="Electronics"
      marks="67"/>
    </div>
  )
}
export default App;