import React from 'react';
import AddHelp from './AddHelp';

AddHelp('loot', () =>
    <div>
        <p>
            The <dfn>loot</dfn> command is used to grab items that your enemies
            dropped in battle.
        </p>
        <p>
            When a monster spawns a loot item, that item remains available for
            looting until you either loot it, or until five new loot spawns
            appear.
        </p>
        <p>
            Type <em>loot</em> by itself to get a list of currently available
            loot, then <em>loot (object)</em> to loot an item, e.g.,{' '}
            <em>loot sword</em>.
        </p>
        <p>
            You can also type <em>loot discard (item)</em> to discard an item
            from your inventory, e.g., <em>loot discard sword</em>.
        </p>
    </div>
);