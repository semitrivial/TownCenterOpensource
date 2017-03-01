import React from 'react';
import AddHelp from './AddHelp';

for (const dir of ['north', 'south', 'east', 'west']) {
    AddHelp(dir, () => 
        <div>
            Type {dir} to walk {dir}.  What more can I say?  Maybe if you walk
            far enough from the Town Center, you'll find the Potion of
            Immortality, which will allow you to survive in this hostile world
            where literally everybody wants you dead.
        </div>
    );
}