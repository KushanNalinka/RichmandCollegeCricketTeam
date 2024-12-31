
import React from "react";

const UnauthorizedPage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="flex p-10">
            <p>
                <span className=" text-red-900 font-bold">Access Denied:</span> You do not have the required permissions ({user.roles}) to view this page. 
                    Please <a href="/login" className="text-blue-500 underline">log in</a> with appropriate credentials or go back to the 
                <a href="/member" className="text-blue-500 underline"> home page</a>.
            </p>
        </div>
    );
}

export default UnauthorizedPage;