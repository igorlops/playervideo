import React,{useState, useContext} from 'react'
import { videoStore } from '../data/video/VideoContext'

const NewVideoForm = () => {
  // O primeiro elemento é o estado, e não vamos precisar,
  //  vamos utilziar apenas o envio de formulário, 
  // que nesse caso utilizando apenas o add do Reducer

  const[,videoDispatch] = useContext(videoStore)
  const [title,setTitle] = useState('')
  const [duration,setDuration] = useState('')
  const [url,setUrl] = useState('')
  const [cover,setCover] = useState('')

  function save(){
    const newVideo = {
      title,
      duration,
      url,
      cover
    };
    videoDispatch({
      type:'add',
      value:newVideo
    })
    reset()
  }

  function reset(){
    setTitle('')
    setDuration('')
    setUrl('')
    setCover('')
  }
  return (
    <div className='form'>
      <label>Título:</label>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      
      <label>Duração:</label>
      <input type="text" value={duration} onChange={(event) => setDuration(event.target.value)}/>

      <label>URL:</label>
      <input type="text" value={url} onChange={(event) => setUrl(event.target.value)}/>

      <label>Capa:</label>
      <input type="text" value={cover} onChange={(event) => setCover(event.target.value)}/>

      <button onClick={save}>Salvar</button>
    </div>
  )
}

export default NewVideoForm