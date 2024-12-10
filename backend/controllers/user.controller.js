export const register = async (req, res) => {
    try {
        const {firstname, lastname, email, phoneNumber, gender, dateOfBirth, password, nationality, role} = req.body;
    } catch (error) {
        console.log(error);
    }
}