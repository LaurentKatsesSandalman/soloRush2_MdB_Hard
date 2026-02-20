import { story1 } from "@/data/data";
import { Chapter, Exit, State } from "../types/types";

const MAX_LIFE=100
const firstChapter:Chapter = story1.find((chapter)=>chapter.chapter_id===1)!

export const initialState:State = {
	maxLife : MAX_LIFE,
	life : MAX_LIFE,
	chapter: firstChapter,
	comPoints: 0,
	inventory:[],
	lastEvent: "",
}

export interface ExitAction{
	type:"EXIT";
	payload:Exit
}

export function exitReducer (state:State, exitAction:ExitAction){
	let newLife = state.life
	let newCom = state.comPoints
	let newEvent = state.lastEvent
	let newInventory = state.inventory
	let newChapter = state.chapter
	const sandal = {
            code: "SANDALS",
            name: "Des sandales"
        } 
	if(state.inventory.some((objet)=>objet.code===sandal.code)){newLife += 10}
	const action = exitAction.payload.action
	if(action)
	{switch (action.type){
		case "EFFECT": { //précédemment LOSS et BOOST			
			if (action.payload.target==="life"){
				newLife += action.payload.value
				if(action.payload.value<0)
				{newEvent = `Vous avez perdu ${action.payload.value} points de vie`}
				else {newEvent =`Vous avez gagné ${action.payload.value} points de vie`}
			}
			if (action.payload.target==="com"){
				newCom += action.payload.value
				if(action.payload.value<0)
				{newEvent = `Vous avez perdu ${action.payload.value} points de communisme`}
				else {newEvent =`Vous avez gagné ${action.payload.value} points de communisme`}
			}
			break;
		}
		case "FIGHT": {
			newLife-=action.payload.damage*3
			newEvent=`Vous combattez ${action.payload.name} et vous perdez ${action.payload.damage*3} points de vie`
			break;
		}
		
		case "GET":{
			if(!newInventory.includes(action.payload)){
				newInventory = [...newInventory, action.payload]
			newEvent = `Vous avez un nouvel objet dans votre inventaire`
			}
			break;
		}
		case "USE":{
			newInventory= newInventory.filter(item => item !=action.payload )
			break;
		}
		case "RESET":{return initialState;
		}

	}}
	newChapter = story1.find((chapter)=>chapter.chapter_id===exitAction.payload.id )!
	if(newLife<1){newChapter = story1.find((chapter)=>chapter.chapter_id===16 )!}
	return {...state, life:newLife, comPoints:newCom, lastEvent:newEvent, inventory: newInventory, chapter:newChapter }
}