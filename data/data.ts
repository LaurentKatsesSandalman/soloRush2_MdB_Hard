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
