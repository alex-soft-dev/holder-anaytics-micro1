import { createStore } from "state-pool";
import { sidebarMenuData } from "../components/layouts/sidebar/Sidebar";

const store = createStore();

store.setState("sidebar", false);
store.setState("headerTitle", "");

export default store;
