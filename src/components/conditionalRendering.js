import Login from "./login"
import Admin from "./admin"

let isLogin = true;

export default function ConditionalRender() {
    return(
        <div>
           {isLogin ? <Admin/>: <Login/>}
        </div>
    )
}