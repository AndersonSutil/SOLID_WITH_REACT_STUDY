import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Styles from "./CartActions.module.css";

const CartActions = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/");
    };

    return (
        <div className={Styles.cartActions}>
            <Button onClick={handleRedirect} variant="secondary">Continuar comprando</Button>
            <Button onClick={() => console.log("pagamento")}>Ir para pagamento</Button>
        </div>
    )
};

export default CartActions;