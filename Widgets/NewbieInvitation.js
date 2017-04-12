import React from 'react';
import CommandLink from '../../Commands/CommandLink';

export default function NewbieInvitation(props) {
    return (
        <div>
            <strong>
                This character is auto-generated.
            </strong>
            <br/>
            &raquo;<CommandLink
                display='Rename to make permanent!'
                cmd='name'
            />
            {' '}
            &raquo;Or <CommandLink display='Login' cmd='login'/> another
            character.
            <br/>
        </div>
    );
}
