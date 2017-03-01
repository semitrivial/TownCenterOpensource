import React from 'react';
import AddHelp from './AddHelp';

AddHelp('who', () =>
    <div>
        Typing "who" in the game console will show you a list of players
        currently online.  You can click on any player in this list to get
        more details about them, or just type "who (name)" directly.
    </div>
);