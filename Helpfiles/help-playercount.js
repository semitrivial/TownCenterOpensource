import React from 'react';
import AddHelp from './AddHelp';
import CommandLink from '../../Commands/CommandLink';

AddHelp('playercount', () => 
    <div>
        <p>
            Type <CommandLink cmd='look'/> for players in same room.
        </p>
        <p>
            Type <CommandLink cmd='who'/> for all online players.
        </p>
    </div>
);