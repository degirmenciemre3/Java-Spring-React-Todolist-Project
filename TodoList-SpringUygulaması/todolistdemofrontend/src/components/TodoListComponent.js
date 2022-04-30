import React, {useState, useEffect} from "react";
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


export default function TodoList() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }



  const TodoDelete=() => {

    const userId = localStorage.getItem("userId")
    const todoId = localStorage.getItem("todoId")
    axios.delete("/users/"+userId+"/todos/"+todoId).then(response=>response.data)
    alert("Todo Silme Başarılı")
    window.location.reload();
}
    
  const userId = localStorage.getItem("userId")
  const [todoList, setTodoList] = useState([]);

    useEffect(() => { axios.get("/users/"+userId+"/alltodos").then((res) => {


        setTodoList(res?.data); 
        console.log(res.data)
       })},[]);
    
       const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        return( 
           
            <div className='container'>

                {todoList.map(todoList =>(
                    localStorage.setItem("todoId",todoList.id),
                <Accordion expanded={expanded === "panel"+todoList.id} onChange={handleChange("panel"+todoList.id)}>
      
      
                  <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header"  >
                    
                    <Typography key={todoList.id}  > <h3 align='right'>Yapılacak : {todoList.content}  </h3></Typography>
                  </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                            <h3>
                            <Checkbox {...label} /> Yapıldı mı ? 
                            </h3>
                            <Typography align='right' >
                            <Button variant="contained" onClick={TodoDelete}>Sil</Button>
                      </Typography>
                    </Typography>
                </AccordionDetails>
                </Accordion>
               ))}
          </div>
        )
        
    }