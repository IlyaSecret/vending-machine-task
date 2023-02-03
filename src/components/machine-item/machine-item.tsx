import "./machine-item.css";
import { Product } from '../../types/product';

type MachineItemProps = {
    item: Product
}

export default function MachineItem({item} : MachineItemProps) {
    return (
        <div className="machine-item">
            <div className="border">
                <img src={item.quantity ? item.img : "/img/out.png"}></img>
                <div className="machine-item__desc">
                    <h1 className="item__title">{item.title }</h1>
                    <p>Номер: {item.numberInMachine}</p>
                    <p>{item.price} РУБ</p>
                    <p>Осталось: { item.quantity }</p>
                </div>
            </div>
            
            
        </div>
    )
}