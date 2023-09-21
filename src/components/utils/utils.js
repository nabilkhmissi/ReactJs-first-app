export function loginUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            /*  const random = Math.floor(Math.random() * 10);
             if (random % 2 === 0) {
                 resolve({ message: "user logged in successfully..." })
             }
             reject({ message: "Oops! an error occured" }) */
            resolve({ token: "sgrh-dfhk-" + Date.now().toString(), user: "pizza_user" })
        }, 2000);
    })
}