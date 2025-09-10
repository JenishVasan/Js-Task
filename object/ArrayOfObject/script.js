


let student =[   {name:"jeni", position:"graphic" },
                {name : "jenish" , position : "FUllStake " },
                {name : "Bittu " , position : "java"}        
        ]

// let Box = document.querySelector(".box")



student.forEach(student =>{


        document.querySelector(".card").innerHTML +=`<h3> position : - ${student.name} </h3>
                        <p>position : ${student.position} </p>` ;   

        // Box.appendChild(card);

}

)


