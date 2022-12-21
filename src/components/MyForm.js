import { useState } from 'react';
import MyPayPalButton from './MyPayPalButton';
import { createClient } from '@supabase/supabase-js'

function MyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [idea, setIdea] = useState("");
    const [tier, setTier] = useState("1");
    const [isPending, setIsPending] = useState('false');
    const [isComplete, setIsComplete] = useState(false)
    const [lock, setLock] = useState(false);

    const supabase = createClient(process.env.REACT_APP_SUPABASEURL, process.env.REACT_APP_SUPABASEKEY)

    // THIS WORKS !!!!!!
    async function getAll() {
        
        let { data: ideas, error } = await supabase
        .from('ideas')
        .select('*')

        // THIS WORKS !!!!!!
        console.log({ data: ideas,})

    }

    function createPost() {

        supabase.from('ideas')
        .insert([ 
            {name, email, idea, tier }
        ])
        .then(() => {
            console.log("Completed posting ")
            setIsPending(false)
            alert("You have successfully posted your idea")
        })
    }

    const handleSetName = (e) => {
        setName(e.target.value);
        console.log(e.target.value)
    }

    const setCompleteToTrue = () => {
        setIsComplete(true);
    }

    

    if(lock) {
        if(isComplete) {
            setLock(false)
        }
    }

    if(isComplete && !lock) {
        setIsComplete(false)
        createPost()
    }
    


    return (
      <div className="MyForm">
        <form>
            <label>Enter your name:</label>
            <input 
            type="text"
            required
            value={name}
            onChange={handleSetName}
            />
        </form>
        <label>Enter your email:</label>
        <textarea 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        ></textarea>
        <label>Enter your idea:</label>
        <textarea 
            required
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
        ></textarea>
        <label>Type:</label>
        <select onChange={(e) => setTier(e.target.value)}>
            <option value="1">tier1</option>
            <option value="2">tier2</option>
            <option value="3">tier3</option>
        </select>
        <div className="PPWrapper">
            <MyPayPalButton handleComplete={setCompleteToTrue}></MyPayPalButton>
        </div>
        <button></button>
        <p> {name} </p>
      </div>
    )
  }
export default MyForm