import React from 'react';
import './Addpost.css'
import SimpleModal from '../../../UI/modal/Modal';
import PostUploader from '../postUploader/PostUploader';



const Addpost = (props) => {

  
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  const body = <PostUploader />

  return (
    <div className='Posts'>
      <div
        className='addPost'>
        <p
          className='para'
          onClick={handleOpen}>Add new post</p>
        <SimpleModal
          handleClose={handleClose}
          open={open}
          body={body}
          onClick={setTimeout(() => {
            setOpen(false)
          }, 12000)}


        />

      </div>
    </div>
  );
}

export default Addpost;