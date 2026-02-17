export const story1=[{
    chapter_id: 1,
    chapter_desc: "Vous vous réveillez dans une chambre miteuse de ce qui semble être un vieil hôtel. Au mur, un portrait d'Erich Honecker. Le calendrier indique 9 November. Vous vous sentez en danger mais vous ne savez pas pourquoi. Vous percevez que votre genre est stable et masculin. ",
    exit1_id: 2,
    exit1_desc: "Sortir par la porte",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 3,
    exit2_desc: "Sortir par la fenêtre",
    exit2_contrainte: {
        minlife: 15
    },
    exit2_ztarget:{
        type: "LOSS",
        effect: {
            target: "life",
            value: -10
        }
    },
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 2,
    chapter_desc: "Le couloir est tout aussi miteux. Il donne sur trois chambres, dont celle dont vous sortez, et un ascenseur",
    exit1_id: 5,
    exit1_desc: "Rentrer dans la chambre à la porte bleue",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 6,
    exit2_desc: "Rentrer dans la chambre à la porte blanche",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 7,
    exit3_desc: "Prendre l'ascenseur",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 3,
    chapter_desc: "Vous glissez et tombez lourdement sur le trottoir.",
    exit1_id: 4,
    exit1_desc: "Se relever",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 4,
    chapter_desc: "Vous voilà sur un trottoir gris, à côté d'un hôtel. Vous pouvez continuer sur la gauche, aller vers la droite, ou rentrer dans l'hôtel",
    exit1_id: 21,
    exit1_desc: "A gauche",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 18,
    exit2_desc: "A droite",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 8,
    exit3_desc: "Retourner dans l'hôtel",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 5,
    chapter_desc: "Vous voilà dans la chambre bleue, tout aussi misérable que celle où vous vous êtes réveillé. Pas grand chose, si ce n'est une carte du Parti Communiste sur la table",
    exit1_id: 3,
    exit1_desc: "Sortir par la fenêtre",
    exit1_contrainte: {
        minlife: 15
    },
    exit1_ztarget:{
        type: "LOSS",
        effect: {
            target: "life",
            value: -10
        }
    },
    exit2_id: 10,
    exit2_desc: "Retourner dans le couloir avec la carte",
    exit2_contrainte: null,
    exit2_ztarget:{
        type: "GET",
        object: {
            code: "PCCARD",
            name: "Carte du parti"
        }
    },
    exit3_id: 10,
    exit3_desc: "Retourner dans le couloir sans la carte",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 6,
    chapter_desc: "Dans la chambre blanche, un homme est en train de fouiller. Il se retourne vers vous.",
    exit1_id: 3,
    exit1_desc: "Sortir par la fenêtre",
    exit1_contrainte: {
        minlife: 15
    },
    exit1_ztarget:{
        type: "LOSS",
        effect: {
            target: "life",
            value: -10
        }
    },
    exit2_id: 13,
    exit2_desc: "Le convaincre que vous n'êtes pas une menace.",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 14,
    exit3_desc: "Montrer la carte du parti",
    exit3_contrainte: {
        object: {
            code: "PCCARD",
            name: "Carte du parti"
        }
    },
    exit3_ztarget:{
        type: "BOOST",
        effect: {
            target: "com",
            value: 2
        }
    }
}, {
    chapter_id: 7,
    chapter_desc: "L'ascenseur descend et ne dessert qu'une destination : le hall",
    exit1_id: 8,
    exit1_desc: "Sortir dans le hall",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 8,
    chapter_desc: "Encore une pièce miteuse. Un homme vous regarde par dessus son journal. Vous vous dites qu'ils se ressemblent tous.",
    exit1_id: 4,
    exit1_desc: "le trottoir",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 9,
    exit2_desc: "Prendre l'ascenseur",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 29,
    exit3_desc: "Se rapprocher de l'homme",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 9,
    chapter_desc: "L'ascenseur monte et ne dessert qu'une destination : le premier étage.",
    exit1_id: 12,
    exit1_desc: "le couloir",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 10,
    chapter_desc: "Le couloir est tout aussi miteux. Il donne sur trois chambres, dont celle dont vous sortez, et un ascenseur",
    exit1_id: 15,
    exit1_desc: "Rentrer dans la chambre à la porte rouge, celle où vous vous êtes réveillé",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 6,
    exit2_desc: "Rentrer dans la chambre à la porte blanche",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 7,
    exit3_desc: "Prendre l'ascenseur",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 11,
    chapter_desc: "Le couloir est tout aussi miteux. Il donne sur trois chambres, dont celle dont vous sortez, et un ascenseur",
    exit1_id: 5,
    exit1_desc: "Rentrer dans la chambre à la porte bleue",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 15,
    exit2_desc: "Rentrer dans la chambre à la porte rouge, celle où vous vous êtes réveillé",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 7,
    exit3_desc: "Prendre l'ascenseur",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 12,
    chapter_desc: "Le couloir est tout aussi miteux. Il donne sur trois chambres",
    exit1_id: 5,
    exit1_desc: "Rentrer dans la chambre à la porte bleue",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 6,
    exit2_desc: "Rentrer dans la chambre à la porte blanche",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 15,
    exit3_desc: "Rentrer dans la chambre à la porte rouge, celle où vous vous êtes réveillé",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 13,
    chapter_desc: "L'homme se jette sur vous. Vous allez devoir vous défendre. Et vous êtes persuadé qu'un autre homme le remplacera bientôt si vous parveniez à le vaincre.",
    exit1_id: 14,
    exit1_desc: "combattre le garde",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "FIGHT",
        ennemy: {
            code: "GUARD1",
            name: "un garde du parti",
            damage: 10
        }
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 14,
    chapter_desc: "Une fois l'homme géré, la chambre blanche ne semble pas très intéressante.",
    exit1_id: 3,
    exit1_desc: "Sortir par la fenêtre",
    exit1_contrainte: {
        minlife: 15
    },
    exit1_ztarget:{
        type: "LOSS",
        effect: {
            target: "life",
            value: -10
        }
    },
    exit2_id: 11,
    exit2_desc: "Sortir par la porte",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 15,
    chapter_desc: "C'est toujours la même chambre miteuse. Au mur, un portrait d'Erich Honecker. Le calendrier indique 9 November. ",
    exit1_id: 2,
    exit1_desc: "Sortir par la porte",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 3,
    exit2_desc: "Sortir par la fenêtre",
    exit2_contrainte: {
        minlife: 15
    },
    exit2_ztarget:{
        type: "LOSS",
        effect: {
            target: "life",
            value: -10
        }
    },
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 16,
    chapter_desc: "Vous êtes mort, et la vie n'est qu'un éternel recommencement",
    exit1_id: 0,
    exit1_desc: "Recommencer",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "RESET",
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 17,
    chapter_desc: "Vous arrivez devant le mur de Berlin, mais vous êtes bien trop communiste pour participer",
    exit1_id: 0,
    exit1_desc: "Recommencer",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "RESET",
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 18,
    chapter_desc: "C'est une impasse, dans ce monde il faut toujours aller à gauche.",
    exit1_id: 4,
    exit1_desc: "Retourner sur vos pas",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "LOSS",
        effect: {
            target: "com",
            value: -2
        }
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 19,
    chapter_desc: "Vous arrivez devant le mur de Berlin avec votre pioche. Au milieu des autres, vous piochez vers la liberté. Vous resterez un inconnu dans la masse de ce jour historique",
    exit1_id: 0,
    exit1_desc: "Recommencer",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "RESET",
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 20,
    chapter_desc: "Vous arrivez devant le mur de Berlin avec le violoncelle. Un homme aux cheveux blancs s'approche de vous. Vous lui donnez l'instrument. Il commence à jouer, la musique est merveilleuse. Le mur tombe, vous êtes libre, et pour l'éternité vous serez celui qui a apporté son instrument à Rostropovitch",
    exit1_id: 0,
    exit1_desc: "Recommencer",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "RESET",
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 21,
    chapter_desc: "Loin devant vous, une clameur. Mais juste devant vous, une créature étrange, qui se jette sur vous",
    exit1_id: 22,
    exit1_desc: "Combattre",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "FIGHT",
        ennemy: {
            code: "ZOMBIE1",
            name: "une chose humanoïde",
            damage: 8
        }
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 22,
    chapter_desc: "Vous avez vaincu la bête. Vous pouvez revenir sur vos pas ou poursuivre",
    exit1_id: 23,
    exit1_desc: "Revenir sur vos pas",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 31,
    exit2_desc: "Poursuivre",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 23,
    chapter_desc: "Vous voilà sur un trottoir gris, à côté d'un hôtel. Vous pouvez continuer sur la gauche, aller vers la droite, ou rentrer dans l'hôtel",
    exit1_id: 24,
    exit1_desc: "A gauche",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 18,
    exit2_desc: "A droite",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 8,
    exit3_desc: "Retourner dans l'hôtel",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 24,
    chapter_desc: "Loin devant vous, une clameur. Mais juste devant vous, une créature étrange, qui se jette sur vous",
    exit1_id: 25,
    exit1_desc: "Combattre",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "FIGHT",
        ennemy: {
            code: "ZOMBIE1",
            name: "une chose humanoïde",
            damage: 8
        }
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 25,
    chapter_desc: "Vous avez vaincu la bête. Vous pouvez revenir sur vos pas ou poursuivre",
    exit1_id: 26,
    exit1_desc: "Revenir sur vos pas",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 31,
    exit2_desc: "Poursuivre",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 26,
    chapter_desc: "Vous voilà sur un trottoir gris, à côté d'un hôtel. Vous pouvez continuer sur la gauche, aller vers la droite, ou rentrer dans l'hôtel",
    exit1_id: 27,
    exit1_desc: "A gauche",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 18,
    exit2_desc: "A droite",
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: 8,
    exit3_desc: "Retourner dans l'hôtel",
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 27,
    chapter_desc: "Loin devant vous, une clameur. Mais juste devant vous, une créature étrange, qui se jette sur vous",
    exit1_id: 28,
    exit1_desc: "Combattre",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "FIGHT",
        ennemy: {
            code: "ZOMBIE1",
            name: "une chose humanoïde",
            damage: 8
        }
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 28,
    chapter_desc: "Vous avez vaincu la bête. Derrière elle, un violoncelle. Vous pouvez poursuivre.",
    exit1_id: 31,
    exit1_desc: "Poursuivre",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "GET",
        object: {
            code: "VIOLIN",
            name: "Un magnifique violoncelle"
        }
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 29,
    chapter_desc: "Lorsque vous vous rapprochez de l'homme, il panique et vous attaque",
    exit1_id: 30,
    exit1_desc: "Se défendre",
    exit1_contrainte: null,
    exit1_ztarget:{
        type: "FIGHT",
        ennemy: {
            code: "YANKEE1",
            name: "un espion américain",
            damage: 10
        }
    },
    exit2_id: null,
    exit2_desc: null,
    exit2_contrainte: null,
    exit2_ztarget: null,
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 30,
    chapter_desc: "Personne n'a réagi. Vous préferez tout de même sortir rapidement",
    exit1_id: 4,
    exit1_desc: "Sortir",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 4,
    exit2_desc: "Sortir après lui avoir volé ses sandales",
    exit2_contrainte: null,
    exit2_ztarget:{
        type: "GET",
        object: {
            code: "SANDALS",
            name: "Des sandales"
        }
    },
    exit3_id: null,
    exit3_desc: null,
    exit3_contrainte: null,
    exit3_ztarget: null
}, {
    chapter_id: 31,
    chapter_desc: "Vous êtes à quelques pas du mur de Berlin",
    exit1_id: 17,
    exit1_desc: "Se rapprocher",
    exit1_contrainte: null,
    exit1_ztarget: null,
    exit2_id: 19,
    exit2_desc: "Ramasser une pioche et se rapprocher",
    exit2_contrainte: {
        maxcom: 1
    },
    exit2_ztarget: null,
    exit3_id: 20,
    exit3_desc: "Sortir le violoncelle et se rapprocher",
    exit3_contrainte: {
        object: "VIOLIN"
    },
    exit3_ztarget: null
}]
