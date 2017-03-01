import {helpFiles} from './AddHelp';

export default function DisplayHelp(what) {
    if ( !what ) {
        return 'Help on what?';
    }

    if ( !helpFiles[what] ) {
        return "There's no helpfile on that.";
    }

    return helpFiles[what]();
}