import Home from "../pages/home"
import Help from "../pages/help"
import Courses from "../pages/courses"
import Course from "../pages/course"

const routes = [
            {
                path : "/",
                exact : true,
                component : Home
            },
            {
                path : "/Home",
                exact : false,
                component : Home
            },
            {
                path : "/Courses",
                exact : true,
                component : Courses
            },
            {
                path : "/Help",
                exact : false,
                component : Help
            },
            {
                path : "/Courses/:id",
                exact : true,
                component : Course
            }
        ]
  
export default routes