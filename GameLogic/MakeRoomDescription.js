import _ from 'lodash';
import GetRoomType from '../../util/GetRoomType';
import {
    ROOM_TOWNCENTER, ROOM_FOREST, ROOM_BEACH, ROOM_DESERT, ROOM_MOUNTAIN,
    ROOM_TUNDRA, ROOM_JUNGLE, ROOM_SWAMP, ROOM_OCEAN
} from '../../util/GetRoomType';

function rnd(x) {
    return _.sample(x);
}

export default function MakeRoomDescription(r) {
    const roomType = GetRoomType(r);

    if ( roomType === ROOM_TOWNCENTER ) {
        return `
            You're in the center of town.  The town's citizens are
            trying to kill you.
        `;
    }

    if ( roomType === ROOM_FOREST ) {
        const forests = ['forests', 'woods',];
        const forestEvents = [
            'Critters shriek and try to bite your throat out.',
            'The shadows of the trees loom ominously.',
            'Tree-roots rise up to strangle you.',
        ];

        return `
            You're in the ${rnd(forests)} north of Town Center.
            ${rnd(forestEvents)}
        `;
    }

    if ( roomType === ROOM_BEACH ) {
        const beaches = ['beach', 'shore',];
        const beachEvents = [
            'Seagulls swarm you to peck out your eyeballs.',
            'Violent waves pound you mercilessly.',
            'In the distance you see a pirate ship.',
        ];

        return `
            You're on the ${rnd(beaches)} south of Town Center.
            ${rnd(beachEvents)}
        `;
    }

    if ( roomType === ROOM_DESERT ) {
        const wandering = ['wandering', 'lost in',];
        const deserts = ['desert', 'deserts',];
        const desertAlone = [
            `There isn't a soul in sight`,
            `You're totally alone out here`,
        ];
        const desertEnemies = [
            'a few wanderers trying to kill you',
            'a handful of enemies out to kill you',
        ];

        return `
            You're ${rnd(wandering)} the endless ${rnd(deserts)} east of
            Town Center.  ${rnd(desertAlone)}, except ${rnd(desertEnemies)}.
        `;
    }

    if ( roomType === ROOM_MOUNTAIN ) {
        const mountains = ['mountains', 'hills',];
        const mountainEnemies = [
            'Critters roll down the hillsides to ambush you',
            'Enemies slide down the slopes and attack you',
        ];

        return `
            You're climbing the ${rnd(mountains)} west of Town Center.
            ${rnd(mountainEnemies)}.
        `;
    }

    if ( roomType === ROOM_TUNDRA ) {
        const anIcy = [
            'an icy', 'a frozen', 'a freezing', 'an inhospitable',
        ];
        const tundra = [
            'tundra', 'tundra', 'tundra', 'tundra', 'snow-field',
        ];
        const trudging = [
            'trudging', 'trudging', 'trudging', 'slogging',
        ];
        const tundraWoe = [
            ['bright glare', 'eyes'], ['wind chill', 'face'],
        ];

        const [glare, eyes] = rnd(tundraWoe);
        return `
            You are ${rnd(trudging)} through ${rnd(anIcy)} ${rnd(tundra)}.
            The ${glare} hurts your ${eyes}.
        `;
    }

    if ( roomType === ROOM_SWAMP ) {
        const nasty = ['nasty', 'smelly', 'moint, damp',];
        const mosquitos = [
            'mosquitos', 'mosquitos', 'mosquitos', 'flies',
        ];
        const buzz = [
            'buzz', 'buzz', 'buzz', 'swirl',
        ];

        return `
            You are waist-deep in a ${rnd(nasty)} swamp.  ${rnd(mosquitos)}
            ${rnd(buzz)} around you.
        `;
    }

    if ( roomType === ROOM_JUNGLE ) {
        const anOvergrown = [
            'an overgrown', 'an unexplored', 'a deep mysterious',
        ];
        const hackingYourWay = [
            'hacking your way', 'trying to navigate', 'running blindly',
            'groping your way', 'slashing your way', 'blazing a trail',
        ];
        const exoticCreatures = [
            'Exotic creatures', 'Hungry predators', 'Thorny vines',
        ];

        return `
            You are ${rnd(hackingYourWay)} through ${rnd(anOvergrown)} jungle.
            ${rnd(exoticCreatures)} rise up to kill you.
        `;
    }

    if ( roomType === ROOM_OCEAN ) {
        const swimming = [
            'swimming', 'swimming', 'floating', 'treading water',
        ];
        const deathlyCold = [
            'deathly cold', 'deathly cold', 'dark',
        ];
        const tired = [
            'tired', 'tired', 'exhausted',
        ];

        return `
            You are ${rnd(swimming)} in the ocean.  It is ${rnd(deathlyCold)}
            and your arms are ${rnd(tired)}.
        `;
    }
}
