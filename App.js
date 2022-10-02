// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Registration from "./components/Auth/Registration";
import LandingPage from "./components/landing-page/LandingPage";
// import Homeroom from "./components/page/home/Homeroom";
import Resume from "./components/page/Resume";
import ViewProfile from './components/page/ViewProfile';
import Homeroom from './components/page/home/Homeroom';
import CreateJob from './components/page/job/CreateJob';
import AdminIndex from './components/adminDashbord/AdminIndex';
import SearchJob from './components/page/browseJobs/SearchJob';
import JobPostList from './components/page/job/JobPostList';
import ApplyJob from './components/page/browseJobs/ApplyJob';
import { useDispatch, useSelector } from "react-redux";
import { initUser } from './components/redux/action/auth';
import PdfView from './components/adminDashbord/PdfView';

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const history = useHistory()
  const location = useLocation()
  // const userDetail = JSON.parse(localStorage.getItem("@@__token"))

  const dispatch = useDispatch();
  const access = useSelector((state) => state.auth.user.role);
  const RouteAccess = access && location.pathname.includes('/')
  // let access = localStorage.getItem("authenticate");
  console.log(RouteAccess)

  const navigateUser = useCallback(
    (access) => {
      dispatch(
        initUser(history, () => {
          if (access && access.length) {
            if (access.includes("Teacher")) {
              return (
                console.log(access)
              );
            } else {
              // history.push("/");
            }
          }
        })
      );
    },
    [dispatch, history]
  );

  // const userRouteNavigation = (user) => {
  //   let functionality = user.role
  //   console.log("functionality", functionality)
  //   switch (functionality) {
  //     case 'teacher':
  //       return history.push("/app/teacher/homeroom")
  //     default:
  //       history.push("/")
  //   }
  // }


  useEffect(() => {
    navigateUser(access);
    const timer = window.setInterval(() => {
      navigateUser(access);
    }, 3000);
    return () => { // Return callback to run on unmount.
      window.clearInterval(timer);
    };

  }, [navigateUser, access]);

  // useEffect(() => {
  //   getRegistration(
  //     { query_type: "selectFacilty", facilityId: token, role: userDetail.role },
  //     (data) => {
  //       setResult(data[0]);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }, [0])


  return (
    <>
      <AdminIndex
        nearConfig={nearConfig}
        wallet={wallet}
        contract={contract}
        currentUser={currentUser}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />


        {/* {access === "teacher" ? ( */}
        <Route
          path="/app/teacher/homeroom"
          component={(props) => (
            <Homeroom
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          exact
          path="/app/teacher/resume"
          render={(props) => (
            <Resume
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          exact
          path="/app/teacher/viewprofile"
          render={(props) => (
            <ViewProfile
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />

        {/* ) : null} */}


        <Route
          exact
          path="/admin"
          render={(props) => (
            <AdminIndex
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          exact
          path="/auth/register"
          render={(props) => (
            <Registration
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />


        <Route
          exact
          path="/app/teacher/create-job"
          render={(props) => (
            <CreateJob
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />


        <Route
          exact
          path="/app/teacher/search/jobs"
          render={(props) => (
            <SearchJob
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />

        <Route
          exact
          path="/app/teacher/post/job/list/"
          render={(props) => (
            <JobPostList
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />

        <Route
          exact
          path="/app/teacher/job/apply/:id?"
          render={(props) => (
            <ApplyJob
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />

        <Route
          exact
          path="/app/teacher/test/resume"
          render={(props) => (
            <PdfView
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />

<Route
          exact
          path="/pagination"
          render={(props) => (
            <PdfView
              {...props}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
              currentUser={currentUser}
            />
          )}
        />

      </Switch>
      {/* <Footer /> */}
    </>
  );

};



export default App;
