const loader = (state = false, action:any) => {
    switch (action.type) {
        case "SHOW_LOADER":
            return action.data;
            break;
        case "HIDE_LOADER":
            return action.data;
            break;
        default:
            return state;
    }
}

export default loader;