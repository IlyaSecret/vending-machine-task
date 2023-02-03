import "./main-page.css";
import MachineItems from "../../components/machine-items/machine-items";
import MachineMenu from "../../components/machine-menu/machine-menu";

export default function MainPage() {
    return (
        <div className="main">
            <MachineItems />
            <MachineMenu />
        </div>
    )
}