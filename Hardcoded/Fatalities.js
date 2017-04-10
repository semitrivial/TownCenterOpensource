import _ from 'lodash';
import {cachedPlayerName} from '../../Client/RefreshPlayerCache';

const Fatalities = [
    He => `${He} collapses in a heap.`,

    He => `${He} groans as his life drains away!`,

    He => `${He} clutches his stomach and keels over.`,

    He => `${He} says 'No!  It cannot be!'`,

    He => `${He} stands still, then slowly falls in half.`,

    He => `${He} falls to his knees, killed in noble battle.`,

    He => `${He} says 'My son will avenge me!'`,

    He => `${He} dies without taking his eyes off you.`,

    He => `${He} splashes into a pool of his own blood!`,

    He => `${He} salutes you as rightful victor.`,

    He => `${He} blinks in confusion, sputters and dies.`,

    him => `You freeze ${him} into solid ice.`,

    him => `You shatter ${him} to pieces.`,

    him => `You incinerate ${him}.`,

    () => `You scatter the ashes.`,

    him => `You bury ${him} in a shallow grave.`,

    He => `${He} flickers out (like in a video game).`,

    his => `You rip out ${his}'s heart and devour it!`,

    He => `${He} blows up in a huge explosion!`,

    He => `${He} melts into a puddle of goo.`,

    He => `${He} sinks straight down to Hell!`,

    his => `You suck out ${his}'s soul and devour it.`,

    () => `Somebody call a morgue.`,

    () => `Hasta la vista, baby.`,

    () => `Nothing is left but a smouldering crater.`,

    () => `Nothing is left but a heap of ashes.`,

    () => `Rest In Peace.`,

    () => `Rest In Pieces.`,

    () => `May God have mercy on his soul.`,

    He => `${He} screams "NOOOOOO!!!!!!"`,

    He => `${He} spins around three times and collapses.`,

    He => `${He} flies back and crashes into the wall.`,

    () => `I hope he had life insurance.`,

    He => `${He} struggles with the horror of his fate.`,

    He => `${He} goes out kicking and screaming!`,

    He => `${He} gasps as he sees his wounds.`,

    He => `${He} curses you with dying breath.`,

    He => `${He} thanks you for a worthy fight.`,

    () => `So this is how it finally ends.`,

    () => `One more notch in your belt.`,

    () => `"He was a mighty man, now he fits in a tiny can."`,

    Kenny => `"Oh My God!  They killed ${Kenny}!"`,

    he => `Looks like ${he} failed his saving throw vs. death ;)`,

    () => `All his children are now orphans.`,

    He => `${He} stumbles into a conveniently open grave.`,

    He => `${He} flops down like a pancake.`,

    () => `One down, a million more to go.`,

    He => `${He} collapses like a pile of bricks.`,

    () => `Good night sweet prince.`,

    He => `${He}'s mangled body hits the floor.`,

    him => `You banish ${him} to an alternate dimension.`,

    his => `Blood trickles down ${his}'s forehead.`,

    him => `You kick ${him} into a chasm.  "This is Sparta!"`,

    He => `${He} goes out in a blaze of glory.`,

    He => `${He} goes down like a lead balloon.`,

    his => `You stuff ${his}'s head and mount it on your wall.`,

    he => {
        const player = cachedPlayerName();
        return `Looks like ${he} messed with the wrong ${player}.`;
    },

    He => {
        const player = cachedPlayerName();
        return `${He} coughs and chokes.  'Curse you, ${player}!'`;
    },

    He => {
        const worm = _.sample(['worm', 'worm', 'grub', 'slug']);
        return `${He} is reincarnated as a ${worm}.`;
    },
];

export default Fatalities;