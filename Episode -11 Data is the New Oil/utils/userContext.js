import {createContext} from "react"

const userContext=createContext({
    loggedInUser:"Default User"
});

export default  userContext;
// i can access it anywhere in the app 