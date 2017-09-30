import React from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import { Menu } from "../Menu/Menu";
import Home from '../Home/Home'
import Courses from '../Courses/Courses'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'


const Routes = () => (
  <div>
    <Menu />
    <Route path="/" exact component={Home} />
    <Route path={"/courses"} component={Courses} />
    <Route path={"/projects"} component={Projects} />
    <Route path={"/contact"} component={Contact} />
  </div>
)

export default Routes

