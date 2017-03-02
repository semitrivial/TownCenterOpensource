import GetRoomType from '../../util/GetRoomType';
import {
    ROOM_TOWNCENTER, ROOM_FOREST, ROOM_BEACH, ROOM_DESERT, ROOM_MOUNTAIN,
    ROOM_TUNDRA, ROOM_JUNGLE, ROOM_SWAMP, ROOM_OCEAN
} from '../../util/GetRoomType';

const names = {
    [ROOM_TOWNCENTER]: 'Town Center',
    [ROOM_FOREST]: 'Forest',
    [ROOM_BEACH]: 'Beach',
    [ROOM_DESERT]: 'Desert',
    [ROOM_MOUNTAIN]: 'Mountain',
    [ROOM_TUNDRA]: 'Tundra',
    [ROOM_JUNGLE]: 'Jungle',
    [ROOM_SWAMP]: 'Swamp',
    [ROOM_OCEAN]: 'Ocean',
};

export default function MakeRoomName(room) {
    const roomType = GetRoomType(room);
    return names[roomType];
}
