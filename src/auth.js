export const authenticated = (data) => {
    if (typeof window == 'undefined') return false;
    localStorage.setItem('user', JSON.stringify(data));
}
export const isAuthenticate = () => {
    if (typeof window == 'undefined') return false;
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}