import React from 'react';
import AddHelp from './AddHelp';
import CommandLink from '../../Commands/CommandLink';

AddHelp('taunt', () =>
    <div>
        <p>
            Q: What's better than an entire town trying to kill you?
        </p>

        <p>
            A: An entire town REALLY REALLY trying to kill you!
        </p>

        <p>
            Currently, <strong>taunt</strong> is still only partly
            implemented.  At the moment, you can adjust your{' '}
            <dfn>taunt level</dfn> using the{' '}
            <CommandLink cmd='taunt'/> command.  Type{' '}
            <CommandLink cmd='taunt 0'/> to reset it to the default
            level.  At that level, you won't taunt your enemies at all,
            so they will just casually take their time killing you.
            Set it to a higher amount and they'll really put their backs
            into it.  Each level of taunt will multiply all enemy stats
            by 1.1, and it will also increase the amount of cash you can
            loot from them by 1.1 as well.
        </p>

        <p>
            You can only set your taunt level as high as you've trained
            your <dfn>Taunt</dfn> skill (which you can only do by
            prestiging).
        </p>
    </div>
);