import React from 'react';
import AddHelp from './AddHelp';

AddHelp('socials', () =>
    <div>
        <p>
            <dfn>Socials</dfn> are mini-commands like "smile", "highfive", etc.,
            which have no real game effects but are used for spicing up
            interactions with other players.
        </p>
        <p>
            Socials can be targeted at another player, e.g. <em>smile Bob</em>.
            Note that the target player must be in the same room (i.e. the same
            coordinates) as you.
        </p>
        <p>
            The <em>socials</em> command displays a list of all socials.
        </p>
    </div>
);