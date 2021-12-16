import React from 'react' ;

function gentable(peoples){
    return (peoples.map((people)=>{
        const {id , name : rname,age} = people;
        return(
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
                <td>{age}</td>
            </tr>
            );
    }))   
}

function DataTable() {
    const student =[
        {
            id: 1 ,
            name: "win" ,
            age: 25 ,
        },
        {
            id: 2 ,
            name: "mana" ,
            age: 20 ,
        },
    ];
    return( <table>
            <tbody>{gentable(student)}</tbody>
        </table>
    )
}

export default DataTable;