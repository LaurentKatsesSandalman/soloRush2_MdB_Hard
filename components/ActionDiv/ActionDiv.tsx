import styles from "./ActionDiv.module.css";
import { State } from "@/libs/types/types";

interface ActionDivProps {
state: State

}

export function ActionDiv ({state}:ActionDivProps){
    
		const sandal = {
            code: "SANDALS",
            name: "Des sandales"
        }

    return (    <div className={styles.actiondiv}>
                {state.inventory.some((object)=>object.code === sandal.code)?(<p>Vie actuelle : {state.life} (vous portez des sandales)</p>):(<p>Vie actuelle : {state.life}</p>)}
                <p>Niveau de communisme : {state.comPoints}</p>
                <p>Inventaire : {state.inventory.map(object => object.name).join(", ")}</p>
                <p>{state.lastEvent}</p>
                {state.life<1 && <p>Vous êtes mort ! Appuyez sur un bouton</p>}
            </div>)
}

export default ActionDiv