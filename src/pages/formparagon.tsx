import axios from "axios";
import { useRouter } from "next/router";
import * as React from "react";
import {useState} from 'react'

interface IFormParagonProps {}

const FormParagon: React.FunctionComponent<IFormParagonProps> = (props) => {
    const [kata, setKata] = useState("")
    const [isPending, setIsPending] = useState(false)

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        axios
            .post("http://localhost:3001/data", {kata}, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                if(res.status === 201){
                    setIsPending(true)
                    router.push("/paragonlist")
                }
            })
            .catch((err) => console.log(err))
    }

  return (
    <>
      <div>
        <h2>Form Paragon</h2>
        <form className="formParagon" onSubmit={handleSubmit}>
          <label>Input kata-kata</label>
          <input type="text" required value={kata} onChange={(e) => setKata(e.target.value)}/>

          { isPending ? (<button>Submitting...</button>) : (<button>Submit</button>) }
        </form>
      </div>
    </>
  );
};

export default FormParagon;
