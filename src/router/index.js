import { createWebHistory, createRouter } from "vue-router";
import DisplayFile from "@/components/DisplayFile";
import Home from "../components/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [

        ]
    },
    {
        path:  "/:location*/:fileName",
        name: "DisplayFile",
        component: DisplayFile,
        props: (route) => {
            return {
                fileVersionID: Number(route.params.fileVersionID),
                fileName: String(route.params.fileName),
                version: Number(route.query.version),
                location: Array(route.params.location)
            }
        },
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;