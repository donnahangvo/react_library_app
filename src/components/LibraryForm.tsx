import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls  } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseFirst, chooseLast, chooseTitle, chooseLength, chooseType, chooseLanguage, chooseISBN } from "../redux/slices/RootSlices"

interface LibraryFormProps {
  id?: string[]
}

const LibraryForm = ( props:LibraryFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.book_title } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseFirst(data.first_name));
      dispatch(chooseLast(data.last_name));
      dispatch(chooseTitle(data.book_title));
      dispatch(chooseLength(data.book_length));
      dispatch(chooseType(data.book_type));
      dispatch(chooseLanguage(data.language));
      dispatch(chooseISBN(data.isbn));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="first_name">First Name</label>
          <Input {...register('first_name')} name='first_name' placeholder="First" />
        </div>

        <div>
          <label htmlFor="last_name">Last Name</label>
          <Input {...register('last_name')} name='last_name' placeholder="Last" />
        </div>

        <div>
          <label htmlFor="book_title">Book Title</label>
          <Input {...register('book_title')} name='book_title' placeholder="Book Title" />
        </div>

        <div>
          <label htmlFor="book_length">Book Length</label>
          <Input {...register('book_length')} name='book_length' placeholder="Book Length" />
        </div>

        <div>
          <label htmlFor="book_type">Book Type</label>
          <Input {...register('book_type')} name='book_type' placeholder="Book Type" />
        </div>

        <div>
          <label htmlFor="language">Language</label>
          <Input {...register('language')} name='language' placeholder="Language" />
        </div>

        <div>
          <label htmlFor="isbn">ISBN Number</label>
          <Input {...register('isbn')} name='isbn' placeholder="ISBN Number" />
        </div>

        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Add Book
          </Button>
        </div>

      </form>
    </div>
  )
}

export default LibraryForm