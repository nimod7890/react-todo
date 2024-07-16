import { FC } from "react";
import useHome from "./useHome";

//view
const Home: FC = () => {
    const { 
        user,
        login  
    } = useHome();

    return <div>
        <div onClick={login} >
            {JSON.stringify(user)}
            LOGIN
        </div>
        Home
    </div>
}
export default Home;