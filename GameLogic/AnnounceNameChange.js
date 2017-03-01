import React from 'react';
import EchoRoom from '../../Rooms/EchoRoom';
import ResendRoom from '../../Rooms/ResendRoom';
import {logMsg} from '../../util/logger';

export default function AnnounceNameChange(ch, name) {
    const [before, after] = [ch.player.name, name];

    if (before === after) {
        ch.toConsole(`
            You've elected to keep your auto-generated name.
            You can now save your character.
        `);
        logMsg(`${before} elected to make their autoname permanent`);
        return;
    }

    logMsg(`${before} has changed name to ${after}`);

    ch.toConsole(`You've changed your name to ${after}!`);

    EchoRoom(ch.room, {
        msg: `${before} has changed name to ${after}.`,
        skip: ch,
    });

    ResendRoom(ch.room);
}
