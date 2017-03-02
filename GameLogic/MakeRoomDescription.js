import _ from 'lodash';
import GetRoomType from '../../util/GetRoomType';
import {
    ROOM_TOWNCENTER, ROOM_FOREST, ROOM_BEACH, ROOM_DESERT, ROOM_MOUNTAIN,
    ROOM_TUNDRA, ROOM_JUNGLE, ROOM_SWAMP, ROOM_OCEAN
} from '../../util/GetRoomType';

const forests = ['forests', 'woods',];
const forestEvents = [
    'Critters shriek and try to bite your throat out.',
    'The shadows of the trees loom ominously.',
    'Tree-roots rise up to strangle you.',
];
const beaches = ['beach', 'shore',];
const beachEvents = [
    'Seagulls swarm you to peck out your eyeballs.',
    'Violent waves pound you mercilessly.',
    'In the distance you see a pirate ship.',
];
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
const mountains = ['mountains', 'hills',];
const mountainEnemies = [
    'Critters roll down the hillsides to ambush you',
    'Enemies slide down the slopes and attack you',
];

export default function MakeRoomDescription(r) {
    const roomType = GetRoomType(r);

    if ( roomType === ROOM_TOWNCENTER ) {
        return `
            You're in the center of town.  The town's citizens are
            trying to kill you.
        `;
    }

    if ( roomType === ROOM_FOREST ) {
        return `
            You're in the ${_.sample(forests)} north of Town Center.
            ${_.sample(forestEvents)}
        `;
    }

    if ( roomType === ROOM_BEACH ) {
        return `
            You're on the ${_.sample(beaches)} south of Town Center.
            ${_.sample(beachEvents)}
        `;
    }

    if ( roomType === ROOM_DESERT ) {
        return `
            You're ${_.sample(wandering)} the
            endless ${_.sample(deserts)} east of
            Town Center.  ${_.sample(desertAlone)},
            except ${_.sample(desertEnemies)}.
        `;
    }

    if ( roomType === ROOM_MOUNTAIN ) {
        return `
            You're climbing the ${_.sample(mountains)} west of Town Center.
            ${_.sample(mountainEnemies)}.
        `;
    }

    if ( roomType === ROOM_TUNDRA ) {
        return `
            You are trudging through an icy tundra.  The icy glare hurts your
            eyes.
        `;
    }

    if ( roomType === ROOM_SWAMP ) {
        return `
            You are waist-deep in a nasty swamp.  Mosquitos buzz around you.
        `;
    }

    if ( roomType === ROOM_JUNGLE ) {
        return `
            You are hacking your way through an overgrown jungle.  Exotic
            creatures rise up to kill you.
        `;
    }

    if ( roomType === ROOM_OCEAN ) {
        return `
            You are swimming in the ocean.  It is deathly cold and your arms
            are tired.
        `;
    }
}
