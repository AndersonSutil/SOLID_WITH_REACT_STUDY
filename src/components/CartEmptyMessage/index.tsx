import Typography from "../Typography";
import Styles from "./CartEmptyMessage.module.css";


const CartEmptyMessage = () => (
    <div className={Styles.cartEmptyMessage}>
        <Typography>Não existem produtos no carrinho.</Typography>
    </div>
);

export default CartEmptyMessage;
