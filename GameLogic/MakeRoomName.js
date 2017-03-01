import GetRoomType from '../../util/GetRoomType';
import {
    ROOM_TOWNCENTER, ROOM_FOREST, ROOM_BEACH, ROOM_DESERT, ROOM_MOUNTAIN
} from '../../util/GetRoomType';

const names = {
    [ROOM_TOWNCENTER]: 'Town Center',
    [ROOM_FOREST]: 'Forest',
    [ROOM_BEACH]: 'Beach',
    [ROOM_DESERT]: 'Desert',
    [ROOM_MOUNTAIN]: 'Mountain',
};

export default function MakeRoomName(room) {
    const roomType = GetRoomType(room);
    return names[roomType];
}
