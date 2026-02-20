
export interface Chapter {
chapter_id: number;
chapter_desc: string;
exits:[Exit]|[Exit, Exit]| [Exit, Exit, Exit] // Ici tupple, car Exit[] avec une contrainte de longueur minimale n'existe pas nativement en TypeScript
// mais si max plus long (exemple: 10) tu peux utiliser [Exit, ...Exit[]] qui signifie
//  "au moins un Exit, suivi d'autant d'Exit que tu veux".
}

export interface Exit {
	id: number;
	desc: string;
	contrainte?: Contrainte;
	action?:Action;
}

 export   interface PotentialExitInterface {
index: number;
exit_contrainte?:Contrainte;
exit_desc?: string;
exit_id?: number;
exit_ztarget?:Target;
        }

export interface Contrainte {
minlife?: number;
maxlife?: number;
mincom?: number;
maxcom?: number;
object?: Object;
}


export interface Object {
code: string;
name: string;
}

export interface Ennemy {
code:string;
name:string;
damage:number;
}

export interface Effect {
target: "life"|"com";
value: number;
}
export type Target = Action

export type Action = EffectAction | FightAction | ResetAction | GetAction | UseAction

interface EffectAction {
	type: "EFFECT";
	payload: Effect;
}

interface FightAction {
	type: "FIGHT";
	payload: Ennemy ;
}

interface ResetAction {
		type: "RESET";
}

interface GetAction {
		type: "GET";
	payload: Object;
}

interface UseAction {
		type: "USE";
	payload: Object;
}


export interface State {
	maxLife : number;
	life : number;
	chapter: Chapter;
	comPoints: number;
	inventory: Object[],
	lastEvent: string;
}


