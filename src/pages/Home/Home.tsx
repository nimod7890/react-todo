import { FC } from "react";
import useHome from "./useHome";
import Button from "../../components/common/Button"
//view
const Home: FC = () => {
    const { 
        user,
        login  
    } = useHome();

    return <div className=" flex-row w-full" >
        <div onClick={login} >
            {JSON.stringify(user)}
            LOGIN
        </div>
        <Button variant="register" onClick={() => console.log('hi')} />
        <Button variant="delete" />

    </div>
}
export default Home;
