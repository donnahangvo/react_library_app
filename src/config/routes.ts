import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Newsletter from '../pages/Newsletter'
import Contact from '../pages/Contact'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected:boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },

    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },

    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    },

    {
        path: "/newsletter",
        component: Newsletter,
        name: "Newsletter",
        protected: true
    },
    
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
        protected: false
    }
];

export default routes