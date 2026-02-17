
export interface Chapter {
chapter_id: number;
chapter_desc: string;
exit1_id: number;
exit1_desc: string;
exit1_contrainte?: Contrainte;
exit1_ztarget?: Target;
exit2_id?: number;
exit2_desc?: string;
exit2_contrainte?: Contrainte;
exit2_ztarget?: Target;
exit3_id?: number;
exit3_desc?: string;
exit3_contrainte?: Contrainte;
exit3_ztarget?: Target;
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


export interface Target {
type: string;
object?: Object;
fight?: Ennemy;
effect?: Effect;
}

export interface Effect {
target: "life"|"com";
value: number;
}


