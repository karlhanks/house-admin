const initState = {
    number: 6,
    nav: ''
}
const reducer = (state = initState, action) => {
    // console.log(action)
    let tmp = { ...state }
    switch (action.type) {
        case 'NAV_BREAD':
            tmp.nav = action.payload.content
            break;
        case 'CART_INCREMENT':
            tmp.number += 1
            break;
        case 'CART_DECREMENT':
            tmp.number -= 1
            break;

        default:
            break;
    }
    return tmp
}
export default reducer