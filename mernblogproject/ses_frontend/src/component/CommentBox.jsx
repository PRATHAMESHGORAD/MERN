import axios from 'axios'
import React, { useEffect, useState } from 'react'
import socket from "../socket"

const CommentBox = ({blogId}) => {
    const [message,setMessage] = useState("")
    const [comments,setComments] = useState([])

    const handelcomment = ()=>{
        axios.post("http://localhost:2000/comment/add",{
            blog:blogId,
            user:"pratham",
            message:message
        })
        .then((res)=>{
            console.log(res.data);
            setMessage("")
            
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    useEffect(()=>{
        axios.get(`http://localhost:2000/comment/${blogId}`)
        .then((res)=>setComments(res.data))
        .catch((err)=>console.log(err));
        
    },[blogId])
    useEffect(()=>{
        socket.on("newComment",(comment)=>{
            setComments((prev)=>[
                ...prev,comment
            ])
        })
        return ()=>{
            socket.off("newcomment")
        }
    },[])
  return (
    <>
    <div className="card mt-4">
       
        <div className="card-body">
            <h3>comments</h3>
            
                <input
                    type="text"
                    className="form-control"
                    placeholder="write a comment"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                />
                <button className='btn btn-primary mt-3'
                onClick={handelcomment}>
                    post comment
                </button>

                <hr/>
                {
                    comments.map((item,index)=>(
                        <div key={index}>
                            <b>{item.user}</b>
                            <p>{item.message}</p>
                        </div>
                    ))
                }
                
            
            
        </div>
    </div>
    
    
    </>
  )
}

export default CommentBox
