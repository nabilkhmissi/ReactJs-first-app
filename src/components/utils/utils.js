export function loginUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "user logged in successfully..." })
            /*  reject({ message: "Oops! an error occured" }) */
        }, 2000);
    })
}