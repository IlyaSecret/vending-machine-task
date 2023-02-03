import "./machine-items.css";
import MachineItem from "../machine-item/machine-item";
import { RootState } from "../../hooks/store";
import { useAppSelector } from "../../hooks/hooks";
import { Product } from '../../types/product';


export default function MachineItems() {
    const products = useAppSelector((state: RootState) => state.main.products)
    return (
        <div className="machine-items">
            {products.map((el: Product )=> <MachineItem item={el}/>)}
        </div>
    )
}