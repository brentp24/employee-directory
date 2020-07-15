//api call

import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
    
    searchRandomUser: function() {
        return axios.get(APIURL)
        .then(res => {
            const employees = res.data;
            return employees.map(employee => {
                return {
                   employeeName: employee.name.first,   
                }
            })
        })
    }
}