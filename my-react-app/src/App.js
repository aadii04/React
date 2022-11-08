
import './App.css';
import Message from './Message'
import Badge from './Badge';
import BadgeWithClass from './BadgeWithClass';
import Card from './Card';
import Dropdown from './components/Dropdown';
import CardwithClass from './CardwithClass';
import ViewCourses from './components/ViewCourses';
import ViewCoursesFn from './components/ViewCoursesFn';


function App() {

  const cuisines = ['North Indian', 'South Indian', 'Mexican', 'Japanese']
  const courses = ['React', 'Angular', 'NodeJS', 'Spring']

  let listCourses = courses.map((course, i)=> <Card key={i} title={course}/>)

  return (
  <div>
    <p>Simple text!</p>

    <Message/>
    <Badge caption="Inbox" count="10"/>
    <Badge caption="Sent" count="1"/>
    <BadgeWithClass caption="Spam" count="20233"/>
    <Dropdown caption="Select Cuisines" items={cuisines}/>
    <Dropdown caption="Select Courses" items={courses}/>
    {/* {/* <Card title="React"/> */}
    {/* <CardwithClass title="NodeJS"/> 
     */}
     < ViewCoursesFn/>

{/* {listCourses} */}
  </div>
  );
}

export default App;
