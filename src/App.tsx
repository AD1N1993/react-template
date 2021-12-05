import './styles.css';
import ReactImage from './assets/images/react.png';
import Logo from './assets/images/reactLogo.svg';
import ClickCounter from "./ClickCounter";

const App = () => {
    const num = 0;
    return (
        <>
            <h1>Hello React {process.env.NODE_ENV}{process.env.name}</h1>
            <img src={ReactImage} alt={'logo'} width={300} height={200}/>
            <img src={Logo} alt={'logo'} width={300} height={300}/>
            <ClickCounter/>
        </>
    )
}
export default App;
