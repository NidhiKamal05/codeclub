const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    return emailRegex.test(email) ;
}

const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/ ;
    return nameRegex.test(name) ;
}

const isEmpty = (input) => {
    return !input ? true : false ;
}

export { validateEmail, validateName, isEmpty } ;