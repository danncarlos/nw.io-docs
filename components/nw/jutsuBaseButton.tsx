
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { EJutsuType } from "@/models/EJutsuType";
import { JutsuBase } from "@/models/jutsuBase";
import * as React from "react"
import { Button } from "../ui/button";

interface JutsuBaseButtonProps {
    jutsu: JutsuBase;
}

const JutsuBaseButton: React.FC<JutsuBaseButtonProps> = (params) => {

    const jutsu = params.jutsu;

    return (
        <HoverCard openDelay={200}>
            <HoverCardTrigger className="cursor-pointer hover:text-purple-400 duration-700">
                <div className="relative w-24 h-24 rounded-2xl bg-slate-200 bg-opacity-5 hover:shadow-2xl duration-300 bg-cover bg-center flex items-center justify-center mx-2 py-2" style={{ backgroundImage: `url(/assets/jutsus/${jutsu.image})` }}>
                    <span className="text-white font-bold text-outline text-center">{jutsu.name}</span>
                    {jutsu.cooldown > 0 ? (
                        <span className="animate-ping animate-once animate-duration-[600ms] animate-ease-linear animate-reverse rounded-2xl absolute w-full h-full flex items-center justify-center bg-black bg-opacity-80 font-bold text-white text-2xl text-outline">
                            {jutsu.cooldown}
                        </span>
                    ) : (
                        <span></span>
                    )}
                </div>
            </HoverCardTrigger>
            <HoverCardContent side="right">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-center">
                        <span className="font-bold">{jutsu.name}</span>
                    </div>
                    <div className="flex flex-row mt-2 text-gray-400">{jutsu.description}</div>
                    {
                        jutsu.type === EJutsuType.Ultimate ? (
                            <div className="flex flex-row justify-center text-sm" >
                                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                    Você só poderá usar 1 JUTSU ULTIMATE por batalha!!
                                </span>
                            </div>
                        ) : (
                            <span></span>
                        )
                    }
                    <div className="flex flex-row mt-2 justify-center">
                        <ul>
                            <li className="bg-opacity-55 w-full">
                                <Button variant='ghost'>
                                    <i className="ra ra-heavy-fall ra-2x text-[#d44b4b]"></i>
                                    <span className="font-bold">
                                        Dano Base: {jutsu.baseDamage}
                                    </span>
                                </Button>
                            </li>

                            {
                                jutsu.chakraCost > 0 ? (
                                    <li className="bg-opacity-55 w-full">
                                        <Button variant='ghost'>
                                            <i className="ra ra-small-fire ra-2x text-[#4dbeff]"></i>
                                            <span className="font-bold">
                                                Chakra: {jutsu.chakraCost}
                                            </span>
                                        </Button>
                                    </li>
                                ) : (
                                    <span></span>
                                )
                            }

                            {
                                jutsu.hpCost > 0 ? (
                                    <li className="bg-opacity-55 w-full">
                                        <Button variant='ghost'>
                                            <i className="ra ra-hearts ra-2x text-red-700"></i>
                                            <span className="font-bold">
                                                Custo Vida: {jutsu.hpCost}
                                            </span>
                                        </Button>
                                    </li>
                                ) : (
                                    <span></span>
                                )
                            }

                            {
                                jutsu.turnCooldown < 90 ? (
                                    <li className="bg-opacity-55 w-full">
                                        <Button variant='ghost'>
                                            <i className="ra ra-recycle ra-2x text-[#b1e7bab2]"></i>
                                            <span className="font-bold">
                                                Cooldown: {jutsu.turnCooldown}
                                            </span>
                                        </Button>
                                    </li>
                                ) : (
                                    <span></span>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

export default JutsuBaseButton;
