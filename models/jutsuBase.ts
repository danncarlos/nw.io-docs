import { EJutsuType } from "./EJutsuType";

export interface JutsuBase { 
    id: string;
    name: string;
    description: string;
    turnCooldown: number;
    cooldown: number;
    damage: string;
    baseDamage: string;
    hpCost: number;
    chakraCost: number;
    image: string;
    
    rank: any;
    element: any;
    type: EJutsuType;
    subtype: any;
    target: any;

    effects?: any[];
}