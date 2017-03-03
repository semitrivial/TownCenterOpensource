import React from 'react';
import AddHelp from './AddHelp';
import CommandLink from '../../Commands/CommandLink';

AddHelp('news', () =>
    <div>
        For up-to-date news on the development of Town Center,
        visit <CommandLink targetUrl='/news'/>.
    </div>
);