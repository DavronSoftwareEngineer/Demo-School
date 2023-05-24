import axios from "axios";

const getStudents = async () => {
    try {
        const res = await axios.get('https://crm-c3xh.onrender.com/api/crm/student');
        return res.data;
    } catch (error) {
        console.log(error);
        return {status: "error"};
    }
}

const getTeachers = async () => {
    try {
        const res = await axios.get('https://crm-c3xh.onrender.com/api/crm/teacher');
        return res.data;
    } catch (error) {
        console.log(error);
        return {status: "error"};
    }
}

const getCourses = async () => {
    try {
        const res = await axios.get('https://crm-c3xh.onrender.com/api/crm/category');
        return res.data;
    } catch (error) {
        console.log(error);
        return {status: "error"};
    }
}


export { getStudents, getTeachers, getCourses };