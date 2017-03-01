const SocialsDict = {
    smile({Joe, Vict}) {
        return {
            none: {
                self: `You smile happily.`,
                other: `${Joe} smiles happily.`,
            },
            self: {
                self: `You smile at yourself for being so awesome.`,
                other: `${Joe} smiles at himself for being so awesome.`,
            },
            target: {
                self: `You smile at ${Vict}.`,
                vict: `${Joe} smiles at you.`,
                other: `${Joe} smiles at ${Vict}.`,
            },
        };
    },

    frown({Joe, Vict}) {
        return {
            none: {
                self: `You frown.`,
                other: `${Joe} frowns.`,
            },
            self: {
                self: `You frown at yourself disapprovingly.`,
                other: `${Joe} smiles at himself disapprovingly.`,
            },
            target: {
                self: `You frown at ${Vict}.`,
                vict: `${Joe} frowns at you.`,
                other: `${Joe} frowns at ${Vict}.`,
            },
        };
    },

    cry({Joe, Vict}) {
        return {
            none: {
                self: `You burst into tears.`,
                other: `${Joe} bursts into tears.`,
            },
            self: {
                self: `You burst into tears thinking about what you've done.`,
                other: `${Joe} bursts into tears thinking about what he's done.`,
            },
            target: {
                self: `As soon as you see ${Vict} you burst into tears.`,
                vict: `As soon as ${Joe} sees you he bursts into tears.`,
                other: `As soon as ${Joe} sees ${Vict}, he bursts into tears.`,
            },
        };
    },

    highfive({Joe, Vict}) {
        return {
            none: {
                self: `Who do you want to high-five?`,
            },
            self: {
                self: `You almost break your neck high-fiving yourself!`,
                other: `${Joe} almost breaks his neck high-fiving himself!`,
            },
            target: {
                self: `You high-five ${Vict}!`,
                vict: `${Joe} high-fives you!`,
                other: `${Joe} high-fives ${Vict}!`,
            },
        };
    },
};

export default SocialsDict;