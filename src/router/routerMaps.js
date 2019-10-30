import LoadableComponent from "../until/LoadableComponent";

const Home = LoadableComponent(() => import("../pages/home"));
const Recommend = LoadableComponent(() => import("../pages/recommend"));

export default [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/Recommend", component: Recommend }
];
