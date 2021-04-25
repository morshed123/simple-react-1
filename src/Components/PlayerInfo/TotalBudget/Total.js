import React from 'react';

const Total = (props) => {
    const total = props.total;
    const totalSalary = total.reduce( (sum, salary) => sum + salary,0);

    return (
        <div>
            <h2>Total Sum : {total.length}</h2>
            <h2> Budget In Total : ${totalSalary}</h2>
        </div>
    );
};

export default Total;