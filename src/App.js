import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcom from "./pages/welcom";
import theme from "./theme";
import Layout from "./components/dashboard";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import TodoApp from "./pages/TodoApp";
import Home from "./pages/home";
import Students from "./pages/students";
import Teachers from "./pages/teachers";
import Courses from "./pages/courses";
import Groups from "./pages/groups";
import Leads from "./pages/leads";
import Settings from "./pages/settings";
import EditStudents from "./pages/editStudents";

function App() {
  return (
    <Router>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Welcom/>}/>
            <Route path="/dashboard" element={<Layout/>}>
              <Route path="" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="students" element={<Students/>}/>
              <Route path="teachers" element={<Teachers/>}/>
              <Route path="courses" element={<Courses/>}/>
              <Route path="groups" element={<Groups/>}/>
              <Route path="leads" element={<Leads/>}/>
              <Route path="settings" element={<Settings/>}/>
              <Route path="editstudent" element={<EditStudents/>}/>
            </Route>
          </Routes>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
