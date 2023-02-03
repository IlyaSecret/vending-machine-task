import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import "./machine-menu.css";
import { RootState } from '../../hooks/store';
import { buyItem, depositMoney, withdrawMoney } from "../../store/reducer";
import { MouseEvent } from "react";
// Знаю, что можно было навесить слушатели через делегирование событий, но я не смог разрбраться с типами.


export default function MachineMenu() {

    const dispatch = useAppDispatch()

    const machineBalance = useAppSelector((state: RootState) => state.main.machineBalance);
    const clientBalance = useAppSelector((state: RootState) => state.main.clientBalance);
    const products = useAppSelector((state: RootState) => state.main.products);
    
    return (
        <div className="machine-menu">
            <div className="machine-menu__balance">{ machineBalance}</div>
            <div className="machine-menu__deposit">
                <p className="machine-menu__deposit-title menu_title">Внести деньги</p>
                <input className="deposit_btn" type="button" value="50" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(depositMoney(sum))            
                }}/>    
                <input className="deposit_btn" type="button" value="100" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(depositMoney(sum))            
                }}/>
                <input className="deposit_btn" type="button" value="500" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(depositMoney(sum))            
                }}/>
                <input className="deposit_btn" type="button" value="1000" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(depositMoney(sum))            
                }}/>
            </div>
            <div className="machine-menu__select">
                <p className="menu_title">Выбрать товар</p>
                
                {products.map(el => <input
                    className="select_btn"
                    type="button"
                    value={el.id}
                    onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const id = parseInt(e.currentTarget.value);
                        dispatch(buyItem(id))
                    }}
                    disabled={products[el.id - 1]?.quantity === 0}
                />)}
            </div>
            <div className="machine-menu__change">
                <p className="menu_title">Получить сдачу</p>
                <input className="change_btn" type="button" value="1" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(withdrawMoney(sum))            
                }}/>
                <input className="change_btn" type="button" value="5" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(withdrawMoney(sum))            
                }}/>
                <input className="change_btn" type="button" value="10" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(withdrawMoney(sum))            
                }}/>
                <input className="change_btn" type="button" value="50" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(withdrawMoney(sum))            
                }}/>
                <input className="change_btn" type="button" value="100" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(withdrawMoney(sum))            
                }}/>
                <input className="change_btn" type="button" value="500" onClick={(e: React.FormEvent<HTMLInputElement>) => {
                    const sum = parseInt(e.currentTarget.value);
                    dispatch(withdrawMoney(sum))            
                }}/>
            </div>
            <h1 className="menu_title">Ваш баланс: { clientBalance }</h1>
        </div>
    )
}