import React from 'react';
import AddHelp from './AddHelp';
import CommandLink from '../../Commands/CommandLink';

AddHelp('statbonus', () =>
    <div>
        <p>
            Enemies get stat bonuses when you are distance 40+ from the
            starting point.  The further you go, the larger these stat
            bonuses become.
        </p>

        <dl>
            <dt>Intelligence</dt>
            <dd>
                If the enemy has +X intelligence, then you're more likely
                to lose your <CommandLink cmd='help combo' display='combo'/>
                {' '}(as if your own intelligence was reduced by X).
            </dd>

            <dt>Endurance</dt>
            <dd>
                If the enemy has +X endurance, then it's like your own
                attack stat was reduced by X.
            </dd>

            <dt>Attack</dt>
            <dd>
                If the enemy has +X attack, then it's like your own
                endurance stat was reduced by X.
            </dd>

            <dt>Speed</dt>
            <dd>
                If the enemy has +X speed, then it's like your own speed
                stat was reduced by X.
            </dd>
        </dl>
    </div>
);