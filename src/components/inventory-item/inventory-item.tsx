import { Product } from "../../types/product";
import "./inventory-item.css";

type InventoryItemProps = {
    item: Product
}

export default function InventoryItem({item} : InventoryItemProps) {
    return (
        <div className="inventory-item">
            <div className="border">
                <img src={item.img}></img>
                <div className="inventory-item__desc">
                    <h1 className="item__title">{item.title }</h1>
                    <p>Количество в сумке: { item.quantityInInventory }</p>
                </div>
            </div>
        </div>
    )
}