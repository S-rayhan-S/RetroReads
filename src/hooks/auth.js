export default function auth() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
        return {
            token,
            user
        }
    } else {
        return false;
    }
}
