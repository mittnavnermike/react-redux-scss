import deepFreeze from 'deep-freeze-es6';

function app(state = deepFreeze([]), action) {
    switch (action.type) {

    case 'LOGG_IN': {
        console.log(`User is ${action.bool ? 'logged in' : 'not logged in'}`);

        const newState = Object.assign({}, state, {
            logged_in: action.bool,
        });

        return newState;
    }
    default:
        return state;
    }
}
export default app;
