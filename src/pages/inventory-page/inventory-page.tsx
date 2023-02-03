import "./inventory-page.css";
import { RootState } from '../../hooks/store';
import { useAppSelector } from "../../hooks/hooks";
import MachineItem from "../../components/machine-item/machine-item";
import { Product } from "../../types/product";
import InventoryItem from '../../components/inventory-item/inventory-item';

export default function InventoryPage() {
    const inventoryItems = useAppSelector((state: RootState) => state.main.invenory);

    return (
        <div className="inventory-page">
            <h1>Ваш инвентарь:</h1>
            <div className="inventory-page__content">
                {inventoryItems.map((el: Product) => <InventoryItem item={el}></InventoryItem>)}
            </div>
        </div>
    )
}