import { Chapter } from "@/libs/types/types";

export const story1: Chapter[] = [
    {
        chapter_id: 1,
        chapter_desc:
            "Vous vous réveillez dans une chambre miteuse de ce qui semble être un vieil hôtel. Au mur, un portrait d'Erich Honecker. Le calendrier indique 9 November. Vous vous sentez en danger mais vous ne savez pas pourquoi. Vous percevez que votre genre est stable et masculin. ",
        exits: [
            { id: 2, desc: "Sortir par la porte" },
            {
                id: 3,
                desc: "Sortir par la fenêtre",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
        ],
    },
    {
        chapter_id: 2,
        chapter_desc:
            "Le couloir est tout aussi miteux. Il donne sur trois chambres, dont celle dont vous sortez, et un ascenseur",
        exits: [
            { id: 5, desc: "Rentrer dans la chambre à la porte bleue" },
            { id: 6, desc: "Rentrer dans la chambre à la porte blanche" },
            { id: 7, desc: "Prendre l'ascenseur" },
        ],
    },
    {
        chapter_id: 3,
        chapter_desc: "Vous glissez et tombez lourdement sur le trottoir.",
        exits: [{ id: 4, desc: "Se relever" }],
    },
    {
        chapter_id: 4,
        chapter_desc:
            "Vous voilà sur un trottoir gris, à côté d'un hôtel. Vous pouvez continuer sur la gauche, aller vers la droite, ou rentrer dans l'hôtel",
        exits: [
            { id: 21, desc: "A gauche" },
            { id: 18, desc: "A droite" },
            { id: 8, desc: "Retourner dans l'hôtel" },
        ],
    },
    {
        chapter_id: 5,
        chapter_desc:
            "Vous voilà dans la chambre bleue, tout aussi misérable que celle où vous vous êtes réveillé. Pas grand chose, si ce n'est une carte du Parti Communiste sur la table",
        exits: [
            {
                id: 3,
                desc: "Sortir par la fenêtre",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
            {
                id: 10,
                desc: "Retourner dans le couloir avec la carte",
                action: {
                    type: "GET",
                    payload: { code: "PCCARD", name: "Carte du parti" },
                },
            },
            { id: 10, desc: "Retourner dans le couloir sans la carte" },
        ],
    },
    {
        chapter_id: 6,
        chapter_desc:
            "Dans la chambre blanche, un homme est en train de fouiller. Il se retourne vers vous.",
        exits: [
            {
                id: 3,
                desc: "Sortir par la fenêtre",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
            { id: 13, desc: "Le convaincre que vous n'êtes pas une menace." },
            {
                id: 14,
                desc: "Montrer la carte du parti",
                contrainte: {
                    object: { code: "PCCARD", name: "Carte du parti" },
                },
                action: {
                    type: "EFFECT",
                    payload: { target: "com", value: 2 },
                },
            },
        ],
    },
    {
        chapter_id: 7,
        chapter_desc:
            "L'ascenseur descend et ne dessert qu'une destination : le hall",
        exits: [{ id: 8, desc: "Sortir dans le hall" }],
    },
    {
        chapter_id: 8,
        chapter_desc:
            "Encore une pièce miteuse. Un homme vous regarde par dessus son journal. Vous vous dites qu'ils se ressemblent tous.",
        exits: [
            { id: 4, desc: "Sortir sur le trottoir" },
            { id: 9, desc: "Prendre l'ascenseur" },
            { id: 29, desc: "Se rapprocher de l'homme" },
        ],
    },
    {
        chapter_id: 9,
        chapter_desc:
            "L'ascenseur monte et ne dessert qu'une destination : le premier étage.",
        exits: [{ id: 12, desc: "le couloir" }],
    },
    {
        chapter_id: 10,
        chapter_desc:
            "Le couloir est tout aussi miteux. Il donne sur trois chambres, dont celle dont vous sortez, et un ascenseur",
        exits: [
            {
                id: 15,
                desc: "Rentrer dans la chambre à la porte rouge, celle où vous vous êtes réveillé",
            },
            { id: 6, desc: "Rentrer dans la chambre à la porte blanche" },
            { id: 7, desc: "Prendre l'ascenseur" },
        ],
    },
    {
        chapter_id: 11,
        chapter_desc:
            "Le couloir est tout aussi miteux. Il donne sur trois chambres, dont celle dont vous sortez, et un ascenseur",
        exits: [
            { id: 5, desc: "Rentrer dans la chambre à la porte bleue" },
            {
                id: 15,
                desc: "Rentrer dans la chambre à la porte rouge, celle où vous vous êtes réveillé",
            },
            { id: 7, desc: "Prendre l'ascenseur" },
        ],
    },
    {
        chapter_id: 12,
        chapter_desc:
            "Le couloir est tout aussi miteux. Il donne sur trois chambres",
        exits: [
            { id: 5, desc: "Rentrer dans la chambre à la porte bleue" },
            { id: 6, desc: "Rentrer dans la chambre à la porte blanche" },
            {
                id: 15,
                desc: "Rentrer dans la chambre à la porte rouge, celle où vous vous êtes réveillé",
            },
        ],
    },
    {
        chapter_id: 13,
        chapter_desc:
            "L'homme se jette sur vous. Vous allez devoir vous défendre. Et vous êtes persuadé qu'un autre homme le remplacera bientôt si vous parveniez à le vaincre.",
        exits: [
            {
                id: 14,
                desc: "combattre le garde",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "GUARD1",
                        name: "un garde du parti",
                        damage: 10,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 14,
        chapter_desc:
            "Une fois l'homme géré, la chambre blanche ne semble pas très intéressante.",
        exits: [
            {
                id: 3,
                desc: "Sortir par la fenêtre",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
            { id: 11, desc: "Sortir par la porte" },
        ],
    },
    {
        chapter_id: 15,
        chapter_desc:
            "C'est toujours la même chambre miteuse. Au mur, un portrait d'Erich Honecker. Le calendrier indique 9 November. ",
        exits: [
            { id: 2, desc: "Sortir par la porte" },
            {
                id: 3,
                desc: "Sortir par la fenêtre",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
        ],
    },
    {
        chapter_id: 16,
        chapter_desc:
            "Vous êtes mort, et la vie n'est qu'un éternel recommencement",
        exits: [{ id: 0, desc: "Recommencer", action: { type: "RESET" } }],
    },
    {
        chapter_id: 17,
        chapter_desc:
            "Vous arrivez devant le mur de Berlin, mais vous êtes bien trop communiste pour participer",
        exits: [{ id: 0, desc: "Recommencer", action: { type: "RESET" } }],
    },
    {
        chapter_id: 18,
        chapter_desc:
            "C'est une impasse, dans ce monde il faut toujours aller à gauche.",
        exits: [
            {
                id: 4,
                desc: "Retourner sur vos pas",
                action: {
                    type: "EFFECT",
                    payload: { target: "com", value: -2 },
                },
            },
        ],
    },
    {
        chapter_id: 19,
        chapter_desc:
            "Vous arrivez devant le mur de Berlin avec votre pioche. Au milieu des autres, vous piochez vers la liberté. Vous resterez un inconnu dans la masse de ce jour historique",
        exits: [{ id: 0, desc: "Recommencer", action: { type: "RESET" } }],
    },
    {
        chapter_id: 20,
        chapter_desc:
            "Vous arrivez devant le mur de Berlin avec le violoncelle. Un homme aux cheveux blancs s'approche de vous. Vous lui donnez l'instrument. Il commence à jouer, la musique est merveilleuse. Le mur tombe, vous êtes libre, et pour l'éternité vous serez celui qui a apporté son instrument à Rostropovitch",
        exits: [{ id: 0, desc: "Recommencer", action: { type: "RESET" } }],
    },
    {
        chapter_id: 21,
        chapter_desc:
            "Loin devant vous, une clameur. Mais juste devant vous, une créature étrange, qui se jette sur vous",
        exits: [
            {
                id: 22,
                desc: "Combattre",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "ZOMBIE1",
                        name: "une chose humanoïde",
                        damage: 8,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 22,
        chapter_desc:
            "Vous avez vaincu la bête. Vous pouvez revenir sur vos pas ou poursuivre",
        exits: [
            { id: 23, desc: "Revenir sur vos pas" },
            { id: 31, desc: "Poursuivre" },
        ],
    },
    {
        chapter_id: 23,
        chapter_desc:
            "Vous voilà sur un trottoir gris, à côté d'un hôtel. Vous pouvez continuer sur la gauche, aller vers la droite, ou rentrer dans l'hôtel",
        exits: [
            { id: 24, desc: "A gauche" },
            { id: 18, desc: "A droite" },
            { id: 8, desc: "Retourner dans l'hôtel" },
        ],
    },
    {
        chapter_id: 24,
        chapter_desc:
            "Loin devant vous, une clameur. Mais juste devant vous, une créature étrange, qui se jette sur vous",
        exits: [
            {
                id: 25,
                desc: "Combattre",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "ZOMBIE1",
                        name: "une chose humanoïde",
                        damage: 8,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 25,
        chapter_desc:
            "Vous avez vaincu la bête. Vous pouvez revenir sur vos pas ou poursuivre",
        exits: [
            { id: 26, desc: "Revenir sur vos pas" },
            { id: 31, desc: "Poursuivre" },
        ],
    },
    {
        chapter_id: 26,
        chapter_desc:
            "Vous voilà sur un trottoir gris, à côté d'un hôtel. Vous pouvez continuer sur la gauche, aller vers la droite, ou rentrer dans l'hôtel",
        exits: [
            { id: 27, desc: "A gauche" },
            { id: 18, desc: "A droite" },
            { id: 8, desc: "Retourner dans l'hôtel" },
        ],
    },
    {
        chapter_id: 27,
        chapter_desc:
            "Loin devant vous, une clameur. Mais juste devant vous, une créature étrange, qui se jette sur vous",
        exits: [
            {
                id: 28,
                desc: "Combattre",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "ZOMBIE1",
                        name: "une chose humanoïde",
                        damage: 8,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 28,
        chapter_desc:
            "Vous avez vaincu la bête. Derrière elle, un violoncelle. Vous pouvez poursuivre.",
        exits: [
            {
                id: 31,
                desc: "Poursuivre",
                action: {
                    type: "GET",
                    payload: {
                        code: "VIOLIN",
                        name: "Un magnifique violoncelle",
                    },
                },
            },
        ],
    },
    {
        chapter_id: 29,
        chapter_desc:
            "Lorsque vous vous rapprochez de l'homme, il panique et vous attaque",
        exits: [
            {
                id: 30,
                desc: "Se défendre",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "YANKEE1",
                        name: "un espion américain",
                        damage: 10,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 30,
        chapter_desc:
            "Personne n'a réagi. Vous préferez tout de même sortir rapidement",
        exits: [
            { id: 4, desc: "Sortir" },
            {
                id: 4,
                desc: "Sortir après lui avoir volé ses sandales",
                action: {
                    type: "GET",
                    payload: { code: "SANDALS", name: "Des sandales" },
                },
            },
        ],
    },
    {
        chapter_id: 31,
        chapter_desc: "Vous êtes à quelques pas du mur de Berlin",
        exits: [
            { id: 17, desc: "Se rapprocher" },
            {
                id: 19,
                desc: "Ramasser une pioche et se rapprocher",
                contrainte: { maxcom: 1 },
            },
            {
                id: 20,
                desc: "Sortir le violoncelle et se rapprocher",
                contrainte: {
                    object: {
                        code: "VIOLIN",
                        name: "Un magnifique violoncelle",
                    },
                },
            },
        ],
    },
];

export const story1_en: Chapter[] = [
    {
        chapter_id: 1,
        chapter_desc:
            "You wake up in a dingy room of what appears to be an old hotel. On the wall, a portrait of Erich Honecker. The calendar reads November 9th. You feel in danger but you don't know why. You sense that your gender is stable and masculine.",
        exits: [
            { id: 2, desc: "Leave through the door" },
            {
                id: 3,
                desc: "Leave through the window",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
        ],
    },
    {
        chapter_id: 2,
        chapter_desc:
            "The corridor is just as dingy. It leads to three rooms, including the one you just left, and an elevator.",
        exits: [
            { id: 5, desc: "Enter the room with the blue door" },
            { id: 6, desc: "Enter the room with the white door" },
            { id: 7, desc: "Take the elevator" },
        ],
    },
    {
        chapter_id: 3,
        chapter_desc: "You slip and fall heavily onto the pavement.",
        exits: [{ id: 4, desc: "Get up" }],
    },
    {
        chapter_id: 4,
        chapter_desc:
            "You find yourself on a grey pavement, next to a hotel. You can head left, go right, or go back into the hotel.",
        exits: [
            { id: 21, desc: "Left" },
            { id: 18, desc: "Right" },
            { id: 8, desc: "Go back into the hotel" },
        ],
    },
    {
        chapter_id: 5,
        chapter_desc:
            "You are now in the blue room, just as miserable as the one you woke up in. Not much here, except a Communist Party card on the table.",
        exits: [
            {
                id: 3,
                desc: "Leave through the window",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
            {
                id: 10,
                desc: "Go back to the corridor with the card",
                action: {
                    type: "GET",
                    payload: { code: "PCCARD", name: "CP card" },
                },
            },
            { id: 10, desc: "Go back to the corridor without the card" },
        ],
    },
    {
        chapter_id: 6,
        chapter_desc:
            "In the white room, a man is rummaging around. He turns toward you.",
        exits: [
            {
                id: 3,
                desc: "Leave through the window",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
            { id: 13, desc: "Convince him you are not a threat." },
            {
                id: 14,
                desc: "Show the CP card",
                contrainte: {
                    object: { code: "PCCARD", name: "CP card" },
                },
                action: {
                    type: "EFFECT",
                    payload: { target: "com", value: 2 },
                },
            },
        ],
    },
    {
        chapter_id: 7,
        chapter_desc:
            "The elevator goes down and serves only one destination: the lobby.",
        exits: [{ id: 8, desc: "Exit into the lobby" }],
    },
    {
        chapter_id: 8,
        chapter_desc:
            "Yet another dingy room. A man watches you from above his newspaper. You tell yourself they all look alike.",
        exits: [
            { id: 4, desc: "Step outside onto the pavement" },
            { id: 9, desc: "Take the elevator" },
            { id: 29, desc: "Approach the man" },
        ],
    },
    {
        chapter_id: 9,
        chapter_desc:
            "The elevator goes up and serves only one destination: the first floor.",
        exits: [{ id: 12, desc: "The corridor" }],
    },
    {
        chapter_id: 10,
        chapter_desc:
            "The corridor is just as dingy. It leads to three rooms, including the one you just left, and an elevator.",
        exits: [
            {
                id: 15,
                desc: "Enter the room with the red door, the one where you woke up",
            },
            { id: 6, desc: "Enter the room with the white door" },
            { id: 7, desc: "Take the elevator" },
        ],
    },
    {
        chapter_id: 11,
        chapter_desc:
            "The corridor is just as dingy. It leads to three rooms, including the one you just left, and an elevator.",
        exits: [
            { id: 5, desc: "Enter the room with the blue door" },
            {
                id: 15,
                desc: "Enter the room with the red door, the one where you woke up",
            },
            { id: 7, desc: "Take the elevator" },
        ],
    },
    {
        chapter_id: 12,
        chapter_desc:
            "The corridor is just as dingy. It leads to three rooms.",
        exits: [
            { id: 5, desc: "Enter the room with the blue door" },
            { id: 6, desc: "Enter the room with the white door" },
            {
                id: 15,
                desc: "Enter the room with the red door, the one where you woke up",
            },
        ],
    },
    {
        chapter_id: 13,
        chapter_desc:
            "The man lunges at you. You will have to defend yourself. And you are convinced that another man will soon replace him if you manage to defeat him.",
        exits: [
            {
                id: 14,
                desc: "Fight the guard",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "GUARD1",
                        name: "a CP guard",
                        damage: 10,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 14,
        chapter_desc:
            "Once the man has been dealt with, the white room doesn't seem very interesting.",
        exits: [
            {
                id: 3,
                desc: "Leave through the window",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
            { id: 11, desc: "Leave through the door" },
        ],
    },
    {
        chapter_id: 15,
        chapter_desc:
            "It's still the same dingy room. On the wall, a portrait of Erich Honecker. The calendar reads November 9th.",
        exits: [
            { id: 2, desc: "Leave through the door" },
            {
                id: 3,
                desc: "Leave through the window",
                contrainte: { minlife: 15 },
                action: {
                    type: "EFFECT",
                    payload: { target: "life", value: -10 },
                },
            },
        ],
    },
    {
        chapter_id: 16,
        chapter_desc:
            "You are dead, and life is but an eternal cycle of repetition.",
        exits: [{ id: 0, desc: "Start over", action: { type: "RESET" } }],
    },
    {
        chapter_id: 17,
        chapter_desc:
            "You arrive at the Berlin Wall, but you are far too much of a communist to take part.",
        exits: [{ id: 0, desc: "Start over", action: { type: "RESET" } }],
    },
    {
        chapter_id: 18,
        chapter_desc:
            "It's a dead end — in this world you must always go left.",
        exits: [
            {
                id: 4,
                desc: "Retrace your steps",
                action: {
                    type: "EFFECT",
                    payload: { target: "com", value: -2 },
                },
            },
        ],
    },
    {
        chapter_id: 19,
        chapter_desc:
            "You arrive at the Berlin Wall with your pickaxe. Among the crowd, you swing toward freedom. You will remain an anonymous face in the mass of that historic day.",
        exits: [{ id: 0, desc: "Start over", action: { type: "RESET" } }],
    },
    {
        chapter_id: 20,
        chapter_desc:
            "You arrive at the Berlin Wall with the cello. A white-haired man approaches you. You hand him the instrument. He begins to play — the music is magnificent. The wall falls, you are free, and for eternity you will be the one who brought his instrument to Rostropovich.",
        exits: [{ id: 0, desc: "Start over", action: { type: "RESET" } }],
    },
    {
        chapter_id: 21,
        chapter_desc:
            "Far ahead, a roar of the crowd. But right in front of you, a strange creature hurls itself at you.",
        exits: [
            {
                id: 22,
                desc: "Fight",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "ZOMBIE1",
                        name: "a humanoid thing",
                        damage: 8,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 22,
        chapter_desc:
            "You have defeated the beast. You can turn back or press on.",
        exits: [
            { id: 23, desc: "Turn back" },
            { id: 31, desc: "Press on" },
        ],
    },
    {
        chapter_id: 23,
        chapter_desc:
            "You find yourself on a grey pavement, next to a hotel. You can head left, go right, or go back into the hotel.",
        exits: [
            { id: 24, desc: "Left" },
            { id: 18, desc: "Right" },
            { id: 8, desc: "Go back into the hotel" },
        ],
    },
    {
        chapter_id: 24,
        chapter_desc:
            "Far ahead, a roar of the crowd. But right in front of you, a strange creature hurls itself at you.",
        exits: [
            {
                id: 25,
                desc: "Fight",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "ZOMBIE1",
                        name: "a humanoid thing",
                        damage: 8,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 25,
        chapter_desc:
            "You have defeated the beast. You can turn back or press on.",
        exits: [
            { id: 26, desc: "Turn back" },
            { id: 31, desc: "Press on" },
        ],
    },
    {
        chapter_id: 26,
        chapter_desc:
            "You find yourself on a grey pavement, next to a hotel. You can head left, go right, or go back into the hotel.",
        exits: [
            { id: 27, desc: "Left" },
            { id: 18, desc: "Right" },
            { id: 8, desc: "Go back into the hotel" },
        ],
    },
    {
        chapter_id: 27,
        chapter_desc:
            "Far ahead, a roar of the crowd. But right in front of you, a strange creature hurls itself at you.",
        exits: [
            {
                id: 28,
                desc: "Fight",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "ZOMBIE1",
                        name: "a humanoid thing",
                        damage: 8,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 28,
        chapter_desc:
            "You have defeated the beast. Behind it, a cello. You can press on.",
        exits: [
            {
                id: 31,
                desc: "Press on",
                action: {
                    type: "GET",
                    payload: {
                        code: "VIOLIN",
                        name: "A magnificent cello",
                    },
                },
            },
        ],
    },
    {
        chapter_id: 29,
        chapter_desc:
            "As you approach the man, he panics and attacks you.",
        exits: [
            {
                id: 30,
                desc: "Defend yourself",
                action: {
                    type: "FIGHT",
                    payload: {
                        code: "YANKEE1",
                        name: "an American spy",
                        damage: 10,
                    },
                },
            },
        ],
    },
    {
        chapter_id: 30,
        chapter_desc:
            "Nobody reacted. You prefer to leave quickly all the same.",
        exits: [
            { id: 4, desc: "Leave" },
            {
                id: 4,
                desc: "Leave after stealing his sandals",
                action: {
                    type: "GET",
                    payload: { code: "SANDALS", name: "A pair of sandals" },
                },
            },
        ],
    },
    {
        chapter_id: 31,
        chapter_desc: "You are just a few steps from the Berlin Wall.",
        exits: [
            { id: 17, desc: "Move closer" },
            {
                id: 19,
                desc: "Pick up a pickaxe and move closer",
                contrainte: { maxcom: 1 },
            },
            {
                id: 20,
                desc: "Take out the cello and move closer",
                contrainte: {
                    object: {
                        code: "VIOLIN",
                        name: "A magnificent cello",
                    },
                },
            },
        ],
    },
];

