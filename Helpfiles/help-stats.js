import React from 'react';
import AddHelp from './AddHelp';

AddHelp('stats', () => 
    <div>
        The <dfn>stats</dfn> command is used to see how powerful your character
        is.  Some of the available arguments are:
        <dl>
            <dt>stats</dt>
            <dd>View attack/int/speed/endurance</dd>

            <dt>
                stats <em>implant</em> (e.g. "stats magnet")
            </dt>
            <dd>Details about an implant type</dd> 

            <dt>
                stats head/torso/arms/legs
            </dt>
            <dd>Details about body upgrades</dd>
        </dl>
    </div>
);