import { ChangeEvent, useState } from "react"

export type Comment = {
    id: number,
    name: string,
    email: string,
    body: string,
    lastUpdated: string
}

interface ICommentBoxProps {
    comment: Comment
    onUpdate: (comment: Comment) => Promise<void>
    onDelete: (comment: Comment) => Promise<void>
}

interface ICommentBoxState {
    isEdit: boolean
    body: string
}

const CommentBox = ({ comment, onUpdate, onDelete }: ICommentBoxProps) => {
    const [state, setState] = useState<ICommentBoxState>({
        isEdit: false,
        body: comment.body
    });

    const handleOnEdit = () => {
        setState(prevState => ({
            ...prevState,
            isEdit: !prevState.isEdit
        }))
    }

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleUpdateComment = () => {
        onUpdate({ ...comment, body: state.body });
        setState({ isEdit: false, body: '' })
    }

    const handleOnDelete = () => {
        onDelete(comment);
    }

    return <div className="relative grid grid-cols-1 gap-4 p-4 my-8 border rounded-lg bg-white shadow-lg">
        <div className="flex flex-row items-start justify-between">
            <div className="relative flex flex-1 gap-4">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                    <svg className="absolute w-12 h-12 -mx-[1px] text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd">
                        </path>
                    </svg>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                        <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{comment.name}</p>
                        <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        {comment.lastUpdated}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="cursor-pointer p-1 rounded hover:bg-slate-100" onClick={handleOnEdit}>
                    {
                        state.isEdit
                            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                    }
                </div>

                <div className="cursor-pointer p-1 rounded hover:bg-slate-100" onClick={handleOnDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>

            </div>
        </div>
        <div className="mt-4 text-gray-500">
            {
                state.isEdit
                    ? <div className="flex flex-col gap-2">
                        <textarea
                            className="bg-gray-100 rounded border border-gray-400 leading-normal w-full h-40 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                            name="body"
                            placeholder='Type Your Comment'
                            onChange={handleOnChange}
                            value={state.body}
                            required
                        />
                        <div className="w-full flex justify-end">
                            <button className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" onClick={handleUpdateComment} >
                                Save
                            </button>
                        </div>
                    </div>
                    : <pre className="whitespace-pre-wrap">
                        {comment.body}
                    </pre>
            }
        </div>
    </div>
}

export default CommentBox;