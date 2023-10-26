import { ChangeEvent, FormEvent, useState } from "react";

export interface ICreateCommentForm {
    name: string
    email: string
    body: string
}

interface ICreateCommentProps {
    onCreate: (comment: ICreateCommentForm) => Promise<void>
}

const emptyFormState: ICreateCommentForm = {
    name: '',
    email: '',
    body: ''
}

const CreateComment = ({onCreate}: ICreateCommentProps) => {
    const [state, setState] = useState<ICreateCommentForm>(emptyFormState)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onCreate(state);
        setState(emptyFormState);
    }

    return <form className="w-full bg-white rounded-lg p-2" onSubmit={handleOnSubmit}>
        <div className="flex flex-wrap mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2 flex flex-col gap-2">
                <input
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleOnChange}
                    value={state.name}
                    required
                />
                <input
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                    value={state.email}
                    required
                />
                <textarea
                    className="bg-gray-100 rounded border border-gray-400 leading-normal w-full h-40 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder='Type Your Comment'
                    onChange={handleOnChange}
                    value={state.body}
                    required
                />
            </div>
            <div className="w-full md:w-full flex items-start justify-end md:w-full px-3 pt-1">
                <div className="-mr-1">
                    <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
                </div>
            </div>
        </div>
    </form>
}

export default CreateComment;