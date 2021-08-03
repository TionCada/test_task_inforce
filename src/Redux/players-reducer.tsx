import profilePhoto from '../assets/images/profilePhoto.png'

const ADD_PLAYER = 'test_task/users/ADD_PLAYER';
const REMOVE_PLAYER = 'test_task/users/REMOVE_PLAYER';
const CHANGE_POINTS_AMOUNT = 'test_task/points/ADD_POINTS';
const CHANGE_POSITION = 'test_task/points/CHANGE_POSITION';

interface Action {
    type: string,
    data: {
        position?: number,
        username?: string,
        points?: number,
        id: string
    }
}

interface AddPlayerData {
    position: number,
    username: string,
    points: number,
    id: string
}

interface RemovePlayerData {
    id: string
}

interface ChangePointsAmountData {
    points: number
}

interface ChangePositionData {
    position: number
}

let initialState = {
    playersList: [{
        position: 2,
        profileImage: profilePhoto,
        username: 'Artur Balakin',
        points: 420,
        id: '12erttex34'
    }]
};

const playersReducer = (state  = initialState, action: Action) => {

    let index = state.playersList.findIndex(item => console.log(item.id));

    switch (action.type) {
        case ADD_PLAYER:
            let newPlayer = {
                position: action.data.position,
                profileImage: profilePhoto,
                username: action.data.username,
                points: action.data.points,
                id: Math.floor((1 + Math.random()) * 0x1000000)
                    .toString(16)
                    .substring(1),
            }
            return {
                ...state,
                playersList: [...state.playersList, newPlayer]
            }
        case REMOVE_PLAYER:
            return {
                ...state,
                playersList: [...state.playersList.slice(index)],
            }
        case CHANGE_POINTS_AMOUNT:
            return {
                ...state,
                //playersList: [...state.playersList, state.playersList[index].points = action.data.points as number]
            }
        case CHANGE_POSITION:
            return {
                ...state,
                //playersList: [...state.playersList, state.playersList[index].points = action.data.points as number]
            }
        default:
            return state;
    }
}

export const addPlayer = (data: AddPlayerData) => ({
    type: ADD_PLAYER,
    data: {data}
});

export const removePlayer = (data: RemovePlayerData) => ({
    type: REMOVE_PLAYER,
    data: {data}
});

export const changePointsAmount = (data: ChangePointsAmountData) => ({
    type: CHANGE_POINTS_AMOUNT,
    data: {data}
});

export const changePosition = (data: ChangePositionData) => ({
    type: CHANGE_POSITION,
    data: {data}
});

export default playersReducer;