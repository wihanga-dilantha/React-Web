import Login from "./login"
import Admin from "./admin"

let content;
let isLogin = false;

if(isLogin){
    content=<Admin/>
}else{
    content=<Login/>
}

export default function ConditionalRender() {
    return(
        <div>
            {content}
        </div>
    )
}